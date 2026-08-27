"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

type UseExploreNextPageOptions = {
  nextPage: string;
  scrollThreshold?: number;
  swipeThreshold?: number;
};

const touchPointerQuery = "(any-pointer: coarse)";

const subscribeToTouchCapability = (
  onStoreChange: () => void
) => {
  const mediaQuery = window.matchMedia(touchPointerQuery);

  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener(
      "change",
      onStoreChange
    );
  };
};

const getTouchCapability = () =>
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  window.matchMedia(touchPointerQuery).matches;

const getServerTouchCapability = () => false;

export function useExploreNextPage({
  nextPage,
  scrollThreshold = 360,
  swipeThreshold = 120,
}: UseExploreNextPageOptions) {
  const router = useRouter();

  const isTouchDevice = useSyncExternalStore(
    subscribeToTouchCapability,
    getTouchCapability,
    getServerTouchCapability
  );

  useEffect(() => {
    let touchStartY = 0;
    let extraScroll = 0;
    let navigating = false;

    const atBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const goToNextPage = () => {
      if (navigating) return;

      navigating = true;
      router.push(nextPage);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!atBottom() || event.deltaY <= 0) {
        extraScroll = 0;
        return;
      }

      extraScroll += event.deltaY;

      if (extraScroll >= scrollThreshold) {
        goToNextPage();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;

      if (atBottom() && swipeDistance >= swipeThreshold) {
        goToNextPage();
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );
      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [
    nextPage,
    router,
    scrollThreshold,
    swipeThreshold,
  ]);

  return {
    isTouchDevice,
  };
}

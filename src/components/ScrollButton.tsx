"use client";

import type { ReactNode } from "react";

import { useScrollTo } from "@/hooks/useScrollTo";

type ScrollButtonProps = {
  targetId: string;
  children?: ReactNode;
};

export default function ScrollButton({
  targetId,
  children = "Learn more",
}: ScrollButtonProps) {
  const scrollTo = useScrollTo();

  return (
    <button
      type="button"
      className="button button-secondary"
      onClick={() => scrollTo(targetId)}
    >
      {children}
    </button>
  );
}
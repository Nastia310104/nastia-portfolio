"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {

  const router = useRouter();

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    let touchStartY = 0;
    let extraScroll = 0;

    const SCROLL_THRESHOLD = 360;
    const SWIPE_THRESHOLD = 120;

    const atBottom = () => {
      return (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      );
    };

    const goToAbout = () => {
      router.push("/about");
    };

    const handleWheel = (event: WheelEvent) => {
      if (!atBottom()) {
        extraScroll = 0;
        return;
      }

      if (event.deltaY > 0) {
        extraScroll += event.deltaY;

        if (extraScroll >= SCROLL_THRESHOLD) {
          goToAbout();
        }
      } else {
        // They changed their mind and scrolled upward.
        extraScroll = 0;
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;

      if (atBottom() && swipeDistance >= SWIPE_THRESHOLD) {
        goToAbout();
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router]);

  return (
      <section id="hero" className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">

        <div className="flex flex-1 flex-col justify-center py-12">
          <div className="mb-8">

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-blue-400">
                Nastia.
              </span>
            </h1>

            <p className="mt-5 text-xl leading-8 text-slate-200">
              Computer Science student & aspiring software developer.
            </p>

            <p className="mt-6 leading-7 text-slate-400">
              I build things, solve problems, learn obsessively, and
              occasionally put cats in my software. 🐈‍⬛
            </p>
          </div>

          <div className="relative mb-10">
            {/* Glow behind portrait */}
            <div
              className="
                absolute
                inset-6
                rounded-full
                bg-blue-600/25
                blur-3xl
              "
            />

            <div
              className="
                relative
                h-96
                rounded-3xl
                shadow-[0_0_60px_rgba(59,130,246,0.20)]
              "
            >
              <div className="relative mb-10 h-96">
                <Image
                  src="/images/nastia-portrait.png"
                  alt="Portrait of Nastia Kotliar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]
                    [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]
                  "
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="/projects"
              className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-slate-700 px-6 py-4 text-center font-semibold text-slate-200 transition hover:bg-slate-900"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href="https://github.com/kotliar-dev"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                border border-slate-700
                px-4 py-3
                text-slate-200
                font-semibold
                transition
                hover:border-blue-500
                hover:bg-slate-900
                hover:text-blue-400
              "
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kotliar-dev/"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                border border-slate-700
                px-4 py-3
                text-slate-200
                font-semibold
                transition
                hover:border-blue-500
                hover:bg-slate-900
                hover:text-blue-400
              "
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="/documents/nastia-kotliar-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border border-slate-700
                px-4 py-3
                text-center
                font-semibold
                text-slate-200
                transition
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              View Resume
            </a>

            <a
              href="/documents/nastia-kotliar-resume.pdf"
              download
              className="
                rounded-xl
                border border-slate-700
                px-4 py-3
                text-center
                font-semibold
                text-slate-200
                transition
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="pb-6 text-center">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <p className="text-base font-medium uppercase tracking-[0.22em]">
              {isTouchDevice ? "Swipe to explore" : "Scroll to explore"}
            </p>

            <span
              aria-hidden="true"
              className="animate-bounce text-2xl text-blue-400"
            >
              ↓
            </span>
          </div>
        </div>
      </section>
  )
}

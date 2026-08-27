"use client";

import type { ReactNode } from "react";

import { useScrollTo } from "@/hooks/useScrollTo";

type ScrollButtonProps = {
  targetId: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function ScrollButton({
  targetId,
  children = "Learn more",
  variant = "secondary",
  className = "",
}: ScrollButtonProps) {
  const scrollTo = useScrollTo();
  const classes = [
    "button",
    `button-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      onClick={() => scrollTo(targetId)}
    >
      {children}
    </button>
  );
}

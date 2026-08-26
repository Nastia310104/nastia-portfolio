"use client";

import { scrollToSection } from "@/utils/scroll";

export function useScrollTo() {
  return (id: string) => {
    scrollToSection(id);
  };
}
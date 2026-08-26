export type Project = {
  slug: string;
  title: string;
  type: string;
  subtitle: string;
  description: string;
  technologies: string[];
  coverImage: string;
  screenshots?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
    {
    slug: "catnect-four",
    title: "Catnect Four",
    type: "JavaFX Game",
    subtitle: "Connect Four, but make it cats.",
    description:
        "A cat-themed Connect Four game with animated cat tokens, custom sounds, character selection, and winner animations.",
    technologies: ["Java", "JavaFX", "Git"],
    coverImage: "/images/projects/catnect-four/cover.png",
    screenshots: [
        "/images/projects/catnect-four/screenshot-1.png",
        "/images/projects/catnect-four/screenshot-2.png",
        "/images/projects/catnect-four/screenshot-3.png",
    ],
    }
];
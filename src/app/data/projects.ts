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
  features?: string[];
  storyHeader: string;
  story: string;
  noteReason?: string;
  noteHeader?: string;
  note?: string;
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
        github: "https://github.com/kotliar-dev/ConnectFourByChatster",
        features: [
            "Animated cat tokens",
            "Two-player gameplay",
            "8 selectable cats",
            "Random cat sounds",
            "Winner animation",
            "Horizontal, vertical & diagonal wins",
        ],
        storyHeader: "A class project that got a little out of hand.",
        story: `Catnect Four started as a JavaFX programming assignment: build a working Connect Four game.

                Somewhere along the way, plain colored tokens became animated cats. Then the cats needed character selection. Then sound effects. Then a winner animation. Then smoother dropping animations. At that point, the reasonable thing to do was obviously keep going.

                The finished version includes selectable cat characters, animated game pieces, custom sound effects, winner animations, and a UI built entirely around the very serious competitive sport of placing cats in a grid.`,
        noteReason: "AI-assisted development",
        noteHeader: "Yes, this one was vibecoded.",
        note: `Catnect Four was built as an experiment in AI-assisted software development.

                I designed the concept, chose the visual direction, tested each iteration, made feature and product decisions, identified problems, and directed the development process.

                The code itself was written almost entirely by ChatGPT.

                I include the project here deliberately rather than presenting it as code I wrote line-by-line. For me, the project represents another useful development skill: directing AI effectively, evaluating generated code, debugging problems, refining architecture, and turning an idea into a finished, polished application.`,
    }
];
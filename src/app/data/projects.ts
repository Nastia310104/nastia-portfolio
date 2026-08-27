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
    github:
      "https://github.com/kotliar-dev/ConnectFourByChatster",
    features: [
      "Animated cat tokens",
      "Two-player gameplay",
      "8 selectable cats",
      "Random cat sounds",
      "Winner animation",
      "Horizontal, vertical, and diagonal wins",
    ],
    storyHeader:
      "A class project that got a little out of hand.",
    story: `Catnect Four started as a JavaFX programming assignment: build a working Connect Four game.

Somewhere along the way, plain colored tokens became animated cats. Then the cats needed character selection. Then sound effects. Then a winner animation. Then smoother dropping animations. At that point, the reasonable thing to do was obviously keep going.

The finished version includes selectable cat characters, animated game pieces, custom sound effects, winner animations, and a UI built entirely around the very serious competitive sport of placing cats in a grid.`,
    noteReason: "AI-assisted development",
    noteHeader: "Yes, this one was vibecoded.",
    note: `Catnect Four was built as an experiment in AI-assisted software development.

I designed the concept, chose the visual direction, tested each iteration, made feature and product decisions, identified problems, and directed the development process.

The code itself was written almost entirely by ChatGPT.

I include the project here deliberately rather than presenting it as code I wrote line-by-line. For me, the project represents another useful development skill: directing AI effectively, evaluating generated code, debugging problems, refining architecture, and turning an idea into a finished, polished application.`,
  },
  {
    slug: "platformer-for-andrei",
    title: "Platformer for Andrei",
    type: "Game Development",
    subtitle: "An early game built for someone I love.",
    description:
      "A platformer game I built as an earlier programming project. It pushed me to experiment with game mechanics, visual design, and building something personal instead of only completing an assignment.",
    technologies: ["Python", "Pygame"],
    coverImage: "",
    features: [
      "Player movement",
      "Collision detection",
      "Interactive game mechanics",
      "Core gameplay logic",
      "Personal visual direction",
    ],
    storyHeader:
      "An early project with a personal reason to exist.",
    story: `This platformer was one of my earlier programming projects and one of the first times I tried to make a game feel personal rather than purely academic.

I built it for Andrei while learning Python and Pygame. The project gave me hands-on practice with player movement, collision detection, interactive elements, and the small pieces of logic that make a game world respond to the player.

It is not my newest or most technically advanced work, but it represents an important shift in how I approached programming: code could be more than an assignment. It could become a gift, an experiment, and something made for a specific person.`,
  },
  {
    slug: "plant-guardian",
    title: "Plant Guardian",
    type: "Hardware + Software",
    subtitle: "Helping plants ask for water.",
    description:
      "A plant-monitoring project combining programming with physical hardware. It reads soil moisture using a capacitive sensor connected to a microcontroller, with plans to grow into a smarter plant-care system.",
    technologies: [
      "MicroPython",
      "ESP32",
      "Sensors",
      "IoT",
    ],
    coverImage: "",
    features: [
      "Capacitive soil-moisture sensing",
      "ESP32 microcontroller",
      "MicroPython sensor readings",
      "ADC calibration",
      "Hardware and software integration",
    ],
    storyHeader:
      "My first step from software into the physical world.",
    story: `Plant Guardian began with a simple question: could I build something that helps me understand what a plant needs instead of guessing?

The current version connects a capacitive soil-moisture sensor to an ESP32 and reads its analog output with MicroPython. Building it has already involved wiring, soldering, sensor calibration, ADC attenuation, and learning how readings from real hardware behave very differently from tidy values in a textbook.

The long-term idea is a smarter plant-care system that can turn those readings into useful information and alerts. For now, it is an intentionally small IoT project—and a practical foundation for the larger system I want to grow.`,
    noteReason: "Work in progress",
    noteHeader: "This project is still growing.",
    note: `Plant Guardian is an active learning project, not a finished commercial device.

The sensor-reading foundation works, while features such as environmental monitoring, alerts, data history, and a polished enclosure remain future possibilities rather than completed functionality.`,
  },
];

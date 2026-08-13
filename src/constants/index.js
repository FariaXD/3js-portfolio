import { three } from "maath";
import {
  html,
  css,
  javascript,
  reactjs,
  threejs,
  tailwind,
  node,
  xml,
  vite,
  bootstrap,
  git,
  figma,
  andstud,
  java,
  php,
  json,
  python,
  firebase,
  mysql,
  csharp,
  kotlin,
  web,
  mobile,
  backend,
  creator,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "AI Workflow Lead",
    icon: creator,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const softskills = [
  {
    name: "Communication",
    positionx: 1,
    positiony: 1,
  },
  {
    name: "Teamwork",
    positionx: -1,
    positiony: -1,
  },
  {
    name: "Problem Solving",
    positionx: 0.9,
    positiony: 0.5,
  },
  {
    name: "Critical Thinking",
    positionx: 2.8,
    positiony: -1,
  },
  {
    name: "Self-Motivation",
    positionx: .5,
    positiony: -.5,
  },
  {
    name: "Adaptability",
    positionx: -2.5,
    positiony: .5,
  },
  {
    name: "Autonomy",
    positionx: 2,
    positiony: 1.5,
  },
  {
    name: "Attention to Detail",
    positionx: -3,
    positiony: 1.5,
  },
  {
    name:"Dedication",
    positionx: -3,
    positiony: -1.5,
  },
]

const technologies = [
  {
    name:{tech1: "HTML 5", tech2: "CSS 3", tech3:"JavaScript"},
    icon: {icon1:html, icon2:css, icon3:javascript},
    planet: "Mercury",
  },
  {
    name:{tech1: "React", tech2: "Vite", tech3:"Node JS"},
    icon: {icon1:reactjs, icon2:vite, icon3:node},
    planet: "Venus",
  },
  {
    name:{tech1: "Python", tech2: "Kotlin", tech3:"C#"},
    icon: {icon1:python, icon2:kotlin, icon3:csharp},
    planet: "Earth",
  },
  {
    name:{tech1: "Git", tech2: "Figma", tech3:"Android Studio"},
    icon: {icon1:git, icon2:figma, icon3:andstud},
    planet: "Mars",
  },
  {
    name:{tech1: "ThreeJS", tech2: "Tailwind CSS", tech3:"Bootstrap"},
    icon: {icon1:threejs, icon2:tailwind, icon3:bootstrap},
    planet: "Jupiter",
  },
  {
    name:{tech1: "Java", tech2: "PHP", tech3:"JSON"},
    icon: {icon1:java, icon2:php, icon3:json},
    planet: "Saturn",
  },
  {
    name:{tech1: "MySQL", tech2: "XML", tech3:"Firebase"},
    icon: {icon1:mysql, icon2:xml, icon3:firebase},
    planet: "Uranus",
  },
];

const experiences = [
  {
    title: "BSc in Computer Science and Multimedia Engineering",
    company_name: "ISEL – Instituto Superior de Engenharia de Lisboa",
    icon: web,
    iconBg: "#383E56",
    date: "2019 - 2023",
    points: [
      "Bachelor's degree covering software engineering, multimedia and interactive systems.",
      "Final project: a card-based turn-based roguelike mobile game built in Unity.",
    ],
  },
  {
    title: "Android Developer — Interactive Lighting & Audio",
    company_name: "Critical TechWorks (BMW)",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Feb 2025",
    points: [
      "Developer in a 6-person Scrum team building dynamic lighting effects that react in real time to audio input.",
      "Implemented a settings UI in Jetpack Compose.",
      "Built audio processing using FFT for real-time sound analysis.",
      "Worked with Android NDK and C++ for performance-critical audio/lighting components.",
    ],
  },
  {
    title: "Android Developer — Media Hub",
    company_name: "Critical TechWorks (BMW)",
    icon: andstud,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Developer in a 12-person Scrum team building a full Android media hub spanning audio sources, games, video apps and TV.",
      "Worked within a full MVVM architecture across the application.",
      "Contributed to a comprehensive testing environment covering unit, integration, screenshot, text-size and blackbox tests.",
      "Analysed bugs and coordinated with other teams to investigate and resolve cross-team issues.",
    ],
  },
  {
    title: "AI Workflow Lead (Internal Initiative)",
    company_name: "Critical TechWorks (BMW)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "May 2026 - Present",
    points: [
      "Leading the team's adoption of AI-assisted development, defining how the group integrates AI tools into daily workflows.",
      "Mapped the entire project into smaller, well-scoped pieces of context, producing instruction files that make the codebase easy for AI agents to reason about.",
      "Built a token-aware agent that reduces and optimizes credit/token usage across AI-assisted tasks.",
      "Designed prompt-based automation for recurring work, including a bug-analysis tool and a self-service PR review tool.",
    ],
  },
];

// No real testimonials yet - the Feedbacks section stays disabled in App.jsx
// until there are genuine quotes to show.
const testimonials = [];

const projects = [
  {
    name: "Card-Based Roguelike Mobile Game",
    description:
      "Final degree project: a turn-based roguelike mobile game in which players use a card system to defeat enemies and progress through procedurally structured worlds.",
    tags: [
      {
        name: "unity2d",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "aseprite",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/FariaXD/UnityMobileGame-FinalProject",
  },
  {
    name: "Restaurant Food Delivery App",
    description:
      "Android app for ordering food, viewing promotional offers, and tracking order and delivery history.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/FariaXD/Restaurant-Android-App",
  },
  {
    name: "Machine Learning Race Car",
    description:
      "Self-driving race car agent trained with reinforcement learning to complete tracks without any human intervention.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "mlagents",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/FariaXD/RacingCar-Unity-MachineLearning",
  },
  {
    name: "AI Object-Seeking Agent",
    description:
      "Pathfinding agent that collects objects in a 2D environment using DFS, BFS and A* search strategies.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "processing",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/FariaXD/IASA",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  softskills,
};
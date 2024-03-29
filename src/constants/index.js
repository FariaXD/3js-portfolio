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
  starbucks,
  meta,
  tesla,
  shopify,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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
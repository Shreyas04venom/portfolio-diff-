import { px } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { interleaveAttributes } from "three/examples/jsm/utils/BufferGeometryUtils.js";

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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intermediate Drawing Exam",
    company_name: "MIDE",
    icon: starbucks,
    iconBg: "#A2E4F5",
    date: "Nov 2019",
    points: [
      "🎨 In 7th grade, I achieved an A grade in the Intermediate Drawing Exam, a recognition of my progress and skill refinement in drawing and design.",
      "This milestone strengthened my ability to combine creativity with discipline, a quality I continue to apply in my engineering studies and projects today.",
      "These exams are more advanced and require more complex skills.",
      "I achieve an A grade in the Intermediate Drawing Examination are awarded 15 additional marks.",
    ],
  },
  
  {
    title: "NCC 'A' Certificate Achievement",
    company_name: "National Cadet Corps",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "Jan 2021 ",
    points: [
      "🚢 During my school years, I had the privilege of training with the National Cadet Corps (NCC) under the 1 Mah Naval Unit, NCC Mumbai-B, representing New English School, Vasai.",
      "In 2021, I successfully earned the prestigious 'A' Certificate with Grade A, awarded by the Ministry of Defence, Government of India.",
      "This experience instilled in me valuable qualities such as discipline, leadership, teamwork, and a commitment to excellence.",
      "As an NCC Cadet, I gained exposure to essential skills in time management, responsibility, and resilience—qualities I now actively apply in my academic and professional pursuits as a engineering student.",
      "I am proud of this accomplishment and remain inspired to carry forward the principles of NCC throughout my career.",
    ],
  },
  
  {
    title: "Certified in Computerised Accounting with GST ",
    company_name: "Tally",
    icon: shopify,
    iconBg: "#005D8C",
    date: "July 2022 ",
    points: [
      "💼 In July 2022, I successfully completed the Computerised Accounting with GST course, earning an 'A' grade from CompuSkill Pvt. Ltd., an ISO 9001:2015 certified company",
      "This certification equipped me with practical knowledge in accounting principles, GST compliance, and Tally software, widely used in the industry.",
      "This accomplishment highlights my ability to work with financial data, tax regulations, and accounting software, adding a strong technical and analytical skillset to my engineering profile.",
      "I look forward to applying these skills in projects that require a blend of technical expertise and financial acumen.",
    ],
  },
  {
    title: "INSPIRE Awards MANAK Competition",
    company_name: "Inspire-Manak",
    icon: meta,
    iconBg: "#FFFFFF",
    date: "Feb 2021",
    points: [
      "I am thrilled to share my experience in the INSPIRE Awards – MANAK Competition, a national initiative by the Department of Science & Technology (DST) and the National Innovation Foundation (NIF). The program promotes creativity and innovation among students by encouraging them to develop ideas that address real-world challenges.",
      "My journey began with the idea of 'The Two-Way Tweezer', a tool designed to safely lift heavy and hot pots, solving a common household issue. This innovative concept was recognized at the Taluka Level, and after refining my presentation and idea, I advanced to the District Level. These stages helped me understand the fundamentals of idea validation and taught me how to present my solution effectively to a panel of judges.",
      "At the State-Level Practice Camp in Gujarat, I worked under the guidance of experienced mentors to improve my project's prototype and align it with real-world needs.This stage was a game-changer for me as I learned Prototype Development, Business Thinking, Presentation Skills, etc ",
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
      "I've never met a student who truly cares about their carrier and future' success like Shreyas does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "As a 1st year engineeering student, this thing is very imapactful.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather-Tunes-App",
    description:
      "The Weather Music App is an innovative project that combines weather conditions with music recommendations. Based on the real-time weather at your location, the app fetches songs that perfectly match the ambiance, offering a unique and immersive experience.",
    tags: [
      {
        name: "Weather API",
        color: "blue-text-gradient",
      },
      {
        name: "Spotify API",
        color: "green-text-gradient",
      },
      {
        name: "Geolocation API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Shreyas04venom/Weather-Tunes-App.git",
  },
  {
    name: "AI-based-Personalized-Learning",
    description:
      "This repository contains the source code, resources, and documentation for an AI-powered personalized learning application. The platform is designed to provide tailored educational experiences for students by leveraging advanced machine learning algorithms and AI technologies.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Shreyas04venom/AI-based-Personalized-Learning-.git",
  },
  {
    name: "AI-based-Personalized-Learning",
    description:
      "This repository contains the source code, resources, and documentation for an AI-powered personalized learning application. The platform is designed to provide tailored educational experiences for students by leveraging advanced machine learning algorithms and AI technologies.",
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
    source_code_link: "https://github.com/Shreyas04venom/AI-based-Personalized-Learning-.git",
  },
];

export { services, technologies, experiences, testimonials, projects };

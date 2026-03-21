// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";

// Project Images
import prosyncImg from "../assets/images/projectImages/image.png";
import filenestImg from "../assets/images/projectImages/image copy.png";
import goPlanner from "../assets/images/projectImages/image copy 2.png";
import swasthAI from "../assets/images/projectImages/image copy 4.png";
import optify from "../assets/images/projectImages/image copy 3.png";

export const Projects = {
  ProSync: {
    image: prosyncImg,
    title: "ProSync",
    subTitle: "Project Management System",
    duration: "Feb 2026 - Present",
    insights: {
      desc: "ProSync is a project management system designed to help teams organize, track, and collaborate on tasks efficiently. It allows users to create projects, assign tasks, set deadlines, and monitor progress in real time.",
      category: "Management, Collaboration, Real-time",
      techStack: [js, node, md, react],
      reportLink: "",
    },
    githubLink: "https://github.com/vanshika265526/ProSync",
    liveLink: "https://github.com/vanshika265526/ProSync",
  },
  FileNest: {
    image: filenestImg,
    title: "FileNest",
    subTitle: "Cloud Storage Platform",
    duration: "Jan 2026 - Feb 2026",
    insights: {
      desc: "FileNest is a full-stack cloud-based file storage and sharing platform that allows users to securely upload, manage, and access their files anytime. It provides a centralized space to store documents, images, and other data with ease.",
      category: "Cloud, Storage, Full-Stack",
      techStack: [js, node, md, react],
      reportLink: "",
    },
    githubLink: "https://github.com/vanshika265526/FileNest",
    liveLink: "https://file-nest-frontend-3q1h.vercel.app",
  },
  GoPlanner: {
    image: goPlanner,
    title: "GoPlanner",
    subTitle: "Travel & Itinerary Planner",
    duration: "Oct 2025 - Dec 2025",
    insights: {
      desc: "GoPlanner is a travel and itinerary planning application that helps users organize trips with ease. It allows users to create detailed travel plans with map integration for better route visualization and location tracking.",
      category: "Travel, Maps, AI",
      techStack: [js, node, md, react, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/vanshika265526/GoPlanner",
    liveLink: "https://go-planner-frontend.vercel.app/",
  },
  SwasthAI: {
    image: swasthAI,
    title: "Swasth AI",
    subTitle: "AI Healthcare Assistant",
    duration: "May 2025 - July 2025",
    insights: {
      desc: "Swasth AI is an AI-powered healthcare assistant designed to provide users with basic health guidance and support. It helps users understand symptoms, get preliminary advice, and access health-related information quickly.",
      category: "Healthcare, GenAI, AI",
      techStack: [js, node, md, react, py],
      reportLink: "",
    },
    githubLink: "https://github.com/vanshika265526/Swasth_AI",
    liveLink: "https://swasth-ai.netlify.app/",
  },
  Optify: {
    image: optify,
    title: "Optify",
    subTitle: "Resume Optimizer System",
    duration: "Apr 2025 - May 2025",
    insights: {
      desc: "Optify is a comprehensive resume-JD analysis engine that benchmarks candidate profiles, computes match scores, detects competency gaps, and generates actionable enhancement insights.",
      category: "AI/ML, Flask, Python",
      techStack: [py, js, md],
      reportLink: "",
    },
    githubLink: "https://github.com/vanshika265526/Optify.AI",
    liveLink: "https://extraordinary-melba-9ac9bd.netlify.app/",
  },
};

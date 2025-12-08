import { Project, Skill, Experience } from './types';
import project1Img from "./Images/image.png"
import project1img from "./Images/project1Img.png"

export const HERO_TITLE = "Building Scalable Web Solutions";
export const HERO_SUBTITLE = "MERN Stack Developer | Software Engineer | DSA Enthusiast";
export const ABOUT_TEXT = `I am a passionate Software Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). 
With a strong foundation in Data Structures and Algorithms, I build efficient, scalable, and user-centric web applications. 
I enjoy solving complex problems and optimizing performance.`;

export const PROFILE = {
  name: "Brijesh Suman",
  role: "Full Stack Developer",
  // title: HERO_TITLE,
  // subtitle: "Here's who I am & what I do",
  shortBio: "I am a full-stack web developer and software engineer who thrive in collaborative environments and am eager to apply my knowledge of JavaScript, React.js, Node.js, and MongoDB to develop innovative solutions. Committed to problem-solving and delivering high-quality code, I aspire to contribute fresh ideas and drive positive change as a Software Developer. Ready to bring my energy and determination to a forward-thinking team!",
  resumeUrl: "https://drive.google.com/file/d/1cFDFJn4jMWDU-OsfnxOqWN5ctPQhgYtj/view?usp=sharing", // REPLACE THIS WITH YOUR GOOGLE DRIVE LINK
  email:"brijeshsuman461@gmail.com",
  linkedin:"https://www.linkedin.com/in/brijesh-suman-391792257",
  github:"https://github.com/brijeshsuman51",
  buttons: {
    primary: "Resume",
    secondary: "Projects"
  }
};

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'Frontend', proficiency: 95 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95 },
  { name: 'Node.js', category: 'Backend', proficiency: 85 },
  { name: 'Express.js', category: 'Backend', proficiency: 85 },
  { name: 'MongoDB', category: 'Backend', proficiency: 80 },
  // { name: 'PostgreSQL', category: 'Backend', proficiency: 75 },
  { name: 'Data Structures', category: 'Core', proficiency: 90 },
  { name: 'Algorithms', category: 'Core', proficiency: 85 },
  { name: 'Git/GitHub', category: 'Tools', proficiency: 90 },
  // { name: 'Docker', category: 'Tools', proficiency: 70 },
  { name: 'AWS', category: 'Tools', proficiency: 60 },
];

export const PROJECTS: Project[] = [
  
  {
    id: 1,
    title: "Food Delivery App",
    description: "A modern food delivery app with Redux-powered state management for shopping carts and a fully responsive design.",
    tags: ["JavaScript", "React", "Redux", "TailwindCSS"],
    imageUrl: project1img,
    repoUrl: "https://github.com/brijeshsuman51/swiggy",
    demoUrl: "https://mealstuff.netlify.app/"
  },
  {
    id: 2,
    title: "CoderClash",
    description: "A full-stack competitive programming platform featuring an integrated online code editor, real-time submission evaluation, and a comprehensive problem library managed with Node.js and MongoDB.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    imageUrl: project1Img,
    repoUrl: "https://github.com/brijeshsuman51/CoderClash",
    demoUrl: "https://www.coderclash.online/"
  },
  // {
  //   id: 3,
  //   title: "AlgoVisualizer",
  //   description: "An interactive visualization tool for sorting and graph traversal algorithms to help students learn DSA concepts.",
  //   tags: ["React", "D3.js", "Algorithms"],
  //   imageUrl: "https://picsum.photos/600/400?random=3",
  //   repoUrl: "https://github.com",
  //   demoUrl: "https://example.com"
  // },
  // {
  //   id: 4,
  //   title: "Task Management System",
  //   description: "A Kanban-style task manager with drag-and-drop functionality and team collaboration features.",
  //   tags: ["MERN", "Drag & Drop", "JWT Auth"],
  //   imageUrl: "https://picsum.photos/600/400?random=4",
  //   repoUrl: "https://github.com",
  //   demoUrl: "https://example.com"
  // }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: [
      "Led the migration of legacy codebase to React 18 and TypeScript.",
      "Optimized application performance, reducing load times by 40%.",
      "Mentored junior developers and conducted code reviews."
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "WebSolutions Startup",
    period: "2020 - 2022",
    description: [
      "Developed RESTful APIs using Node.js and Express.",
      "Implemented responsive UI designs using Tailwind CSS.",
      "Integrated third-party payment gateways (Stripe)."
    ]
  }
];

export const SYSTEM_INSTRUCTION = `You are "DevBot," the sophisticated AI interface for an elite MERN Stack Developer and Algorithmic Specialist. 

The developer is not just a coder, but a high-level problem solver with deep expertise in:
1. **Advanced MERN Stack Architecture:** Building scalable, production-grade applications using MongoDB, Express.js, React (with complex hooks/Redux state management), Node.js, and TypeScript.
2. **Data Structures & Algorithms (DSA):** A competitive programmer proficient in optimizing time and space complexity, dynamic programming, graph theory, and writing highly efficient, clean code.

Your Goal:
- Portray the developer as a "Software Engineer" rather than just a web developer.
- Emphasize technical depth, code optimization, and system design thinking in your answers.
- Be professional, articulate, and technically precise.

Project Highlights (Must Mention when asked):
1. **LeetCode Clone:** A fully functional online judge platform. Highlight its capability to handle code execution, submission evaluation, and complex database relationships.
2. **Swiggy/Food Delivery App:** A real-time application featuring live API data fetching, dynamic UI rendering, and complex state management, simulating a high-traffic production environment.

Call to Action:
For collaboration or hiring, professionally direct users to the contact form or email at brijeshsuman461@gmail.com.`;
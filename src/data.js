import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaTerminal,
  FaDocker,
  FaJava,
  FaPython,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVisualstudiocode,
} from "react-icons/si";

const contactInfo = {
  email: "afaraelias@gmail.com",
};

const education = [
  {
    schoolName: "EPITA - ECOLE D'INGÉNIEURS INFORMATIQUE PARIS",
    degree: "Master of Science in CS - Software Engineering",
    date: "September 2021 - March 2023",
    location: "Le Kremlin-Bicêtre, France",
    schoolURL: "https://www.epita.fr/en/",
  },
  {
    schoolName: "Phoenicia University",
    degree: "Bachelor of Science in Computer Science",
    date: "January 2017 - March 2021",
    location: "Lebanon",
    schoolURL: "https://www.pu.edu.lb/",
  },
];

const workExperience = [
  {
    date: "2022-09-12",
    title: "Software Engineer Intern",
    company: "Rangor Poker",
    location: "Paris, France",
    range: "September 2022 - March 2023",
    url: "https://www.linkedin.com/company/rangor-poker/about/",
    activities: [
      "Developed an educational learning path that provides the users with access to professional poker training.",
      "Developed & implemented multiple features that contribute in increasing users' interest in the company's product and driving more traffic.",
      "Technology Stack Used: Vue, Vuex, Vuetify, Node.js, MongoDB, Strapi, Git",
    ],
  },
  {
    date: "2020-08-15",
    title: "Full Stack Web Developer Intern",
    company: "Bitwork",
    location: "Beirut, Lebanon",
    range: "August 2020 - October 2020",
    url: "https://www.linkedin.com/company/bitwork-studio/about/",
    activities: [
      "Worked in a five-person team on building a monetization portal which creates & manages advertisements.",
      "Developed & implemented multiple features which contribute in creating an advertisement.",
      "Technology Stack Used: Laravel, AngularJS, Bootstrap, MySQL, Git",
    ],
  },
];

const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/eliasafara",
    icon: "FiGithub",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/thegrindev",
    icon: "FiTwitter",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/eliasafara",
    icon: "FiLinkedin",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/c/eliasafara",
    icon: "FiYoutube",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/eliasafara",
    icon: "FiCodepen",
  },
];

const navLinks = [
  {
    id: "#about",
    name: "About",
    url: "/#about",
    icon: "HiOutlineUser",
    routerLink: false,
  },
  {
    id: "#education",
    name: "Education",
    url: "/#education",
    icon: "HiOutlineAcademicCap",
    routerLink: false,
  },
  {
    id: "#experience",
    name: "Experience",
    url: "/#experience",
    icon: "HiOutlineBriefcase",
    routerLink: false,
  },
  {
    id: "#skills",
    name: "Skills",
    url: "/#skills",
    icon: "HiOutlineBadgeCheck",
    routerLink: false,
  },
  {
    id: "#projects",
    name: "Projects",
    url: "/#projects",
    icon: "HiOutlinePhotograph",
    routerLink: false,
  },
  {
    id: "#contact",
    name: "Contact",
    url: "/#contact",
    icon: "HiOutlineMail",
    routerLink: false,
  },
  {
    id: "#guestbook",
    name: "Guestbook",
    url: "/guestbook",
    icon: "HiOutlineChatAlt2",
    routerLink: true,
  },
];

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { name: "Sass", icon: FaSass, color: "#CC6699" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Bash", icon: FaTerminal, color: "#000000" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "VSCode", icon: SiVisualstudiocode, color: "#007ACC" },
];

const projects = [
  {
    title: "Netflix Clone",
    cover_name: "netflix-clone.png",
    github: "https://github.com/EliasAfara/netflix-clone",
    external: null,
    youtube:
      "https://www.youtube.com/watch?v=wEl11pbAQAE&ab_channel=EliasAfara",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Java",
      "PostgreSQL",
      "React-Context-API",
    ],
    description:
      "A web app that mimics the functionalities and features of the popular streaming platform Netflix. Some of the functionalities include: user authentication, movie ratings, compute and display the 10 most popular and most viewed movies, etc.",
  },
  {
    title: "Blockchain-based E-Voting System",
    cover_name: "blockchain-voting-system.png",
    github: "https://github.com/smart-elections",
    external: null,
    youtube: null,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Ethers",
      "MetaMask",
      "React-Context-API",
    ],
    description:
      "Worked in a three-person team to research & develop a decentralized e-voting system using blockchain technology. The project involved developing a web application that allows users to vote for candidates and a blockchain network that stores the votes and ensures the integrity of the voting process.",
  },
  {
    title: "Decentralized Light-Twitter Clone",
    cover_name: "solidity-twitter-clone.png",
    github: "https://github.com/EliasAfara/Solidity-Dapp-Twitter-Clone",
    external: "https://solidity-dapp-twitter-clone-eliasafara.netlify.app/",
    youtube: null,
    tech: ["React", "JavaScript", "Solidity", "MetaMask"],
    description:
      "The object of this class project was to develop a decentralized Twitter clone using Solidity and React. The project involved developing a smart contract that allows users to create tweets and a web application that allows users to interact with the smart contract.",
  },
  {
    title: "Lebanon Freecycle",
    cover_name: "lebanon_freecycle.png",
    github: "https://github.com/EliasAfara/Lebanon-Freecycle",
    external: null,
    youtube:
      "https://www.youtube.com/watch?v=gi0-auwXxlo&ab_channel=EliasAfara",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    description:
      "Non-profit Lebanese social donation platform that aims to help the citizens to connect with each other and donate their items to the ones in need.",
  },
];

const techColors = {
  React: "#61DAFB",
  "Node.js": "#339933",
  Express: "#000000",
  MySQL: "#4479A1",
  Ethers: "#645DD7",
  MetaMask: "#E2761B",
  "React-Context-API": "#7f9e77",
  Redux: "#764ABC",
  MongoDB: "#47A248",
  JavaScript: "#d3c23c",
  Solidity: "#363636",
  Java: "#007396",
  PostgreSQL: "#336791",
};

const connectSection = {
  openToWork: true,
  openToWorkMessage:
    "Open to new opportunities! I'm actively seeking exciting projects and roles where I can contribute my skills and passion. Let's connect and explore how we can work and make a difference together.",
  notOpenToWorkMessage:
    "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
};

export {
  contactInfo,
  socialMedia,
  navLinks,
  workExperience,
  education,
  connectSection,
  projects,
  skills,
  techColors,
};

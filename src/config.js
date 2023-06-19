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
  },
  {
    id: "#education",
    name: "Education",
    url: "/#education",
    icon: "HiOutlineAcademicCap",
  },
  {
    id: "#experience",
    name: "Experience",
    url: "/#experience",
    icon: "HiOutlineBriefcase",
  },
  {
    id: "#skills",
    name: "Skills",
    url: "/#skills",
    icon: "HiOutlineBadgeCheck",
  },
  {
    id: "#projects",
    name: "Projects",
    url: "/#projects",
    icon: "HiOutlinePhotograph",
  },

  {
    id: "#contact",
    name: "Contact",
    url: "/#contact",
    icon: "HiOutlineMail",
  },
];

const skills = [
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "TypeScript",
    icon: "",
  },
  {
    name: "React",
    icon: "",
  },
  {
    name: "Node.js",
    icon: "",
  },
  {
    name: "Express.js",
    icon: "",
  },
  {
    name: "Vue.js",
    icon: "",
  },
  {
    name: "MongoDB",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
  {
    name: "JavaScript",
    icon: "",
  },
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
};

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

// Note: currently trying to using markdown files for the work experience
const workExperience = [];

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
];

const navLinks = [
  {
    id: "#about",
    name: "About",
    url: "/#about",
    icon: "HiOutlineUser",
  },
  {
    id: "#experience",
    name: "Experience",
    url: "/#experience",
    icon: "HiOutlineBriefcase",
  },
  {
    id: "#education",
    name: "Education",
    url: "/#education",
    icon: "HiOutlineAcademicCap",
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

export { contactInfo, socialMedia, navLinks, education };

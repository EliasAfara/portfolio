/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Elias Afara",
  title: "Hi all, I'm Elias",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs. I'm a hard-working, adaptable and problem-solving person who can work under pressure in a methodological and responsible manner while being able to meet deadlines."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dHbO3xuw4nSaBOBpVw1L_UjzpuqE4WA0/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/eliasafara",
  linkedin: "https://www.linkedin.com/in/eliasafara/",
  gmail: "afaraelias@gmail.com",
  facebook: "https://www.facebook.com/lesio.brawn",
  instagram: "https://instagram.com/eliasafara",
  twitter: "https://twitter.com/thegrindev",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-leaf"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Phoenicia University",
      logo: require("./assets/images/PU_Logo.png"),
      subHeader: "Bachelor of Science (BS) in Computer Science",
      duration: "2017 - 2021",
      desc:
        "⚡ I have studied basic computer science subjects like DS, Algorithms, DB, OS, AI etc.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer Intern",
      company: "Bitwork",
      companylogo: require("./assets/images/Bitwork_Logo.png"),
      date: "August 2020 - October 2020",
      desc:
        "I have worked in a five-person team on building a monetization portal which creates & manages advertisements. I have Developed & implemented multiple features which contribute in creating an advertisement.",
      descBullets: [
        "Technology Stack Used: Laravel (PHP), AngularJS (JavaScript), HTML, CSS, Bootstrap, Git, MySQL.",
        "Website: https://bitworkstudio.com/"
      ]
    },
    {
      role: "CMPS200 Lab Assistant",
      company: "Phoenicia University",
      companylogo: require("./assets/images/PU_Logo.png"),
      date: "October 2020 - January 2021",
      desc: "Helped CMPS 200 students with their lab work.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "eliasafara", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some big projects that I enjoyed working on.",
  projects: [
    {
      image: require("./assets/images/lebanon_freecycle.png"),
      projectName: "Lebanon Freecycle",
      projectDesc:
        "🌐 A platform for citizens of Lebanon 🇱🇧 to support each other by donating unwanted/reusable items & asking for support requests",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.lebanon-freecycle.live/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/devconnector.png"),
      projectName: "DevConnector",
      projectDesc: "Social network for developers, built on the MERN stack",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lit-shelf-53790.herokuapp.com/"
        },
        {
          name: "View Code",
          url: "https://github.com/EliasAfara/DevConnector"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      subtitle:
        "I have successfully completed 12 hours of MERN Stack Front To Back with Brad Traversy. I developed an in-depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+ in this course",
      image: require("./assets/images/MERN_Certificate.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.udemy.com/certificate/UC-055b084c-056d-499f-9855-b8479a3be5f0/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+961 78 845 230",
  emailAddress: "afaraelias@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "thegrindev", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

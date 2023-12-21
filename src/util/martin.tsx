import { IMartin } from "./interfaces";

const martin: IMartin = {
  profile: {
    name: "Martin Enev",
    gitHub: "https://github.com/martynosa/",
    linkedIn: "https://www.linkedin.com/in/martynosa/",
    summary: "Front-end developer and a Full-time learner",
    //   summary:
    //     "Hello! I am a front-end developer with experience in JavaScript, TypeScript, React, and Redux. I also have experience with back-end technologies such as Node.js, Express, and MongoDB. My portfolio showcases a variety of projects that utilize different tools and frameworks, highlighting my flexibility as a developer.",
  },
  certificates: {
    softuni: [
      {
        name: "JS Web Developer",
        link: "https://softuni.bg/certificates/details/199366/95f95907",
        isVisible: true,
        isFeatured: true,
      },
      {
        name: "Basics - September 2020",
        link: "https://softuni.bg/certificates/details/89217/bead03e7",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "JS Fundamentals - January 2021",
        link: "https://softuni.bg/certificates/details/103159/3995e03b",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "JS Applications - June 2021",
        link: "https://softuni.bg/certificates/details/110306/843d5569",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "JS Advanced - May 2021",
        link: "https://softuni.bg/certificates/details/110439/004d24d1",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "JS Back-End - September 2021",
        link: "https://softuni.bg/certificates/details/117827/fcbc22d4",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "ReactJS - November 2021",
        link: "https://softuni.bg/certificates/details/122108/c5dd477b",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "HTML & CSS - September 2022",
        link: "https://softuni.bg/certificates/details/147285/5fb03cdc",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "Angular - November 2022",
        link: "https://softuni.bg/certificates/details/152920/fea892da",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "TypeScript - October 2023",
        link: "https://softuni.bg/certificates/details/193651/817b4fd2",
        isVisible: true,
        isFeatured: false,
      },
    ],
    udemy: [
      {
        name: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
        link: "https://www.udemy.com/certificate/UC-d1ace649-d27d-4788-b357-51f8a76ae612/",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        link: "https://www.udemy.com/certificate/UC-554cbc83-8253-494d-9d4b-beb00c791ed0/",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "Build Responsive Real-World Websites with HTML and CSS",
        link: "https://www.udemy.com/certificate/UC-bdf57b7e-7491-443c-b339-bbf21eb7cc51/",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "Understanding TypeScript - 2023 Edition",
        link: "https://www.udemy.com/certificate/UC-5d7fbbc3-20a7-4079-a2d8-1d0608f0d3a8/",
        isVisible: true,
        isFeatured: false,
      },
      {
        name: "Complete Angular Developer in 2023: Zero to Mastery",
        link: "https://www.udemy.com/certificate/UC-02b548b5-a19e-419f-8daa-9d947f1e1a7f/",
        isVisible: true,
        isFeatured: false,
      },
    ],
  },
  projects: [
    {
      name: "project-tracker",
      link: "https://martynosa-project-tracker.netlify.app/",
      repo: "https://github.com/martynosa/project-tracker",
      techStack: ["javascript", "react", "nodejs", "express", "mongodb"],
      isVisible: true,
    },
    {
      name: "naruto-store",
      link: "https://naruto-store.netlify.app/",
      repo: "https://github.com/martynosa/naruto-store",
      techStack: ["typescript", "react", "redux", "firebase"],
      isVisible: true,
    },
    {
      name: "weather",
      link: "https://martynosa-weather.netlify.app/",
      repo: "https://github.com/martynosa/weather",
      techStack: ["html", "css", "javascript", "react"],
      isVisible: true,
    },
    {
      name: "sharingan",
      link: "https://martynosa-sharingan.netlify.app/",
      repo: "https://github.com/martynosa/sharingan",
      techStack: ["html", "css", "javascript"],
      isVisible: false,
    },
    {
      name: "omnifood",
      link: "https://martynosa-omnifood.netlify.app/",
      repo: "https://github.com/martynosa/Build-Responsive-Real-World-Websites-with-HTML-and-CSS",
      techStack: ["html", "css"],
      isVisible: true,
    },
  ],
};
export default martin;

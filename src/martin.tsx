import { IMartin } from './interfaces';

const martin: IMartin = {
  profile: {
    name: 'Martin Enev',
    github: 'https://github.com/martynosa/',
    linkedIn: 'https://www.linkedin.com/in/martynosa/',
    summary: 'Aspiring JavaScript Web Developer and a Full-time learner',
  },
  certificates: {
    softuni: [
      {
        name: 'Basics - September 2020',
        link: 'https://softuni.bg/certificates/details/89217/bead03e7',
        isVisible: false,
      },
      {
        name: 'JS Fundamentals - January 2021',
        link: 'https://softuni.bg/certificates/details/103159/3995e03b',
        isVisible: false,
      },
      {
        name: 'JS Applications - June 2021',
        link: 'https://softuni.bg/certificates/details/110306/843d5569',
        isVisible: false,
      },
      {
        name: 'JS Advanced - May 2021',
        link: 'https://softuni.bg/certificates/details/110439/004d24d1',
        isVisible: false,
      },
      {
        name: 'JS Back-End - September 2021',
        link: 'https://softuni.bg/certificates/details/117827/fcbc22d4',
        isVisible: true,
      },
      {
        name: 'ReactJS - November 2021',
        link: 'https://softuni.bg/certificates/details/122108/c5dd477b',
        isVisible: true,
      },
      {
        name: 'HTML & CSS - September 2022',
        link: 'https://softuni.bg/certificates/details/147285/5fb03cdc',
        isVisible: true,
      },
      {
        name: 'Angular - November 2022',
        link: 'https://softuni.bg/certificates/details/152920/fea892da',
        isVisible: true,
      },
    ],
    udemy: [
      {
        name: 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2022',
        link: 'https://www.udemy.com/certificate/UC-d1ace649-d27d-4788-b357-51f8a76ae612/',
        isVisible: true,
      },
      {
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        link: 'https://www.udemy.com/certificate/UC-554cbc83-8253-494d-9d4b-beb00c791ed0/',
        isVisible: true,
      },
      {
        name: 'Build Responsive Real-World Websites with HTML and CSS',
        link: 'https://www.udemy.com/certificate/UC-bdf57b7e-7491-443c-b339-bbf21eb7cc51/',
        isVisible: true,
      },
      {
        name: 'Understanding TypeScript - 2023 Edition',
        link: 'https://www.udemy.com/certificate/UC-5d7fbbc3-20a7-4079-a2d8-1d0608f0d3a8/',
        isVisible: true,
      },
    ],
  },
  projects: [
    {
      name: 'project-tracker',
      link: 'https://martynosa-project-tracker.netlify.app/',
      repo: 'https://github.com/martynosa/project-tracker',
      isVisible: true,
    },
    {
      name: 'omnifood',
      link: 'https://martynosa-omnifood.netlify.app/',
      repo: 'https://github.com/martynosa/Build-Responsive-Real-World-Websites-with-HTML-and-CSS',
      isVisible: true,
    },
    {
      name: 'weather',
      link: 'https://martynosa-react-weather.netlify.app/',
      repo: 'https://github.com/martynosa/react-weather-app',
      isVisible: true,
    },
    {
      name: 'sharingan',
      link: 'https://martynosa-sharingan.netlify.app/',
      repo: 'https://github.com/martynosa/sharingan',
      isVisible: true,
    },
  ],
};
export default martin;

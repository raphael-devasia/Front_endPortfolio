import React from "react";
import project1 from "../assets/WatchCrafters.png"
import project2 from "../assets/WhisperedLines.png";
import project3 from "../assets/CMS.jpg";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { FiLinkedin, FiGithub, FiFacebook, FiMail } from "react-icons/fi";
import {
  css,
  html,
  api,
  git,
  java,
  tailwind,
  react,
  sass,
  next,
  mongo,
  node,
  express,
} from "../assets/skills";
export const links = [
  {
    id: 1,
    text: "About",
    url: "#about",
  },
  {
    id: 2,
    text: "Skills",
    url: "#skills",
  },
 
  {
    id: 3,
    text: "Projects",
    url: "#projects",
  },
  {
    id: 4,
    text: "Contact",
    url: "#contact",
  },
];
export const socials = [
  {
    id: 1,
    text: <FiLinkedin />,
    url: "https://www.linkedin.com/in/jay-dee-949614274/",
  },
  {
    id: 2,
    text: <FiGithub />,
    url: "https://github.com/raphael-devasia",
  },

  {
    id: 3,
    text: <FiFacebook />,
    url: "https://www.facebook.com/profile.php?id=100092428561372",
  },
  {
    id: 4,
    text: <FiMail />,
    url: "mailto:jaydee.coder@gmail.com",
  },
];

export const services = [
  {
    id: 1,
    icon: project1,
    title: "Watch Crafters",
    git: "https://github.com/raphael-devasia/WatchCrafters",
    live: "https://whispered-lines.vercel.app/",
    text: "This project is a store that allows users to register accounts, log in and out, make payments, and join the newsletter. Users can add items to their shopping cart and proceed to payment using a fake credit card for testing purposes. The site includes features such as product filtering and sorting, with stock numbers linked to each item to prevent over-purchasing. The technologies used in this project include Axios, Redux, Dotenv, React, React-Icons, React-Router-Dom, Stripe, Styled-Components, and Airtable.",
  },
  {
    id: 2,
    icon: project2,
    git: "https://github.com/raphael-devasia/WhisperedLines",
    live: "https://whispered-lines.vercel.app/",
    title: "Whispered Lines",
    text: "This is a full-stack web app with Next.js, utilizing Tailwind CSS for styling. It enabled seamless login and registration via Google accounts using Next Auth. The app allowed users to write, share, and browse poems in a feed section. Authenticated users had CRUD capabilities for their poems. MongoDB and Mongoose ensured efficient data storage and retrieval.",
  },
  {
    id: 3,
    icon: project3,
    git: "https://github.com/raphael-devasia/All_Projects",
    live: "https://jaydee-projects.netlify.app/",
    title: "All Projects",
    text: "The projects showcase section offers a glimpse into the diverse range of web applications I have developed using Various Front end Technologies. Each project demonstrates my ability to leverage these technologies to create dynamic, responsive, and visually appealing websites.All my projects are showcased using Contentful CMS",
  },
];
export const skills1 = [
  {
    id: 1,
    text: "HTML",
    url: html,
  },
  {
    id: 2,
    text: "CSS",
    url: css,
  },

  {
    id: 3,
    text: "JavaScript",
    url: java,
  },
  
  
];
export const skills2 = [
  {
    id: 1,
    text: "React",
    url: react,
  },
  {
    id: 2,
    text: "Next.js",
    url: next,
  },

  {
    id: 3,
    text: "tailwind",
    url: tailwind,
  },
  
];
export const skills3 = [
  {
    id: 1,
    text: "Sass",
    url: sass,
  },
  {
    id: 2,
    text: "API",
    url: api,
  },

  {
    id: 3,
    text: "Git",
    url: git,
  },
  
];
export const skills4 = [
  {
    id: 1,
    text: "Node.js",
    url: node,
  },
  {
    id: 2,
    text: "Express.js",
    url: express,
  },

  {
    id: 3,
    text: "MongoDB",
    url: mongo,
  },
];


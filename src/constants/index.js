import css from "../assets/technologies/css.png";
import figma from "../assets/technologies/figma.png";
import git from "../assets/technologies/git.png";
import html from "../assets/technologies/html.png";
import javascript from "../assets/technologies/javascript.png";
import mongodb from "../assets/technologies/mongodb.png";
import nextjs from "../assets/technologies/nextjs.png";
import nodejs from "../assets/technologies/nodejs.png";
import react from "../assets/technologies/reactjs.png";
import sass from "../assets/technologies/sass.png";
import tailwind from "../assets/technologies/tailwind.png";
import threejs from "../assets/technologies/threejs.svg";

import kasa from "../assets/works/kasaP7.png";
import ohmyfood from "../assets/works/ohmyfoodP3.png";
import kanap from "../assets/works/kanapP5.png";
import booki from "../assets/works/bookiP2.png";
import hottakes from "../assets/works/hottakesP6.png";
import portofolio from "../assets/works/portofolio.png";

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
    name: "React JS",
    icon: react,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const about = [
  {
    name: "Bonjour, Patego Alexandre, Développeur",
    title: "A propos de moi",
    description:
      "Je suis un jeune Développeur Web fraichement diplomé à l'issu d'une formation OpenClassroom, je souhaite désormais continuer à me former et je suis à la recherche d'une alternance en tant que Développeur Front-End. Mes différents projets m'ont permis d'obtenir des compétences en Html, Css et Javascript et plusieurs Frameworks tels que React, Node.js, MongoDb ou encore Express.js. Découvrez mes projets !",
  },
];

const projects = [
  {
    name: "Portofolio",
    description:
      "Mon portofolio avec un dark/light mode ainsi qu'une animation 3d avec threeJs",
    tags: [
      {
        name: "react",
        color: "blueTAG",
      },
      {
        name: "sass",
        color: "pinkTAG",
      },
      {
        name: "threejs",
        color: "text",
      },
    ],
    image: portofolio,
    source_code_link: "https://github.com/alexpatego/Portofolio",
    source_live_demo: "",
  },
  {
    name: "Kasa",
    description: "Le projet 7, site web de reservations immobilières",
    tags: [
      {
        name: "react",
        color: "blueTAG",
      },
      {
        name: "javascript",
        color: "yellowTAG",
      },
      {
        name: "scss",
        color: "pinkTAG",
      },
    ],
    image: kasa,
    source_code_link: "https://github.com/alexpatego/P7-KASA",
    source_live_demo: "https://alexpatego.github.io/kasa2/",
  },
  {
    name: "Oh my food",
    description:
      "Site web de restauration, référencant des restaurant et leurs menus ",
    tags: [
      {
        name: "html",
        color: "orangeTAG",
      },
      {
        name: "css",
        color: "purpleTAG",
      },
      {
        name: "scss",
        color: "pinkTAG",
      },
    ],
    image: ohmyfood,
    source_code_link: "https://github.com/alexpatego/P3-ohmyfood",
    source_live_demo: "https://alexpatego.github.io/P3-ohmyfood/",
  },
  {
    name: "Kanap",
    description:
      "Site web de restauration, référencant des restaurant et leurs menus ",
    tags: [
      {
        name: "javascript",
        color: "orangeTAG",
      },
    ],
    image: kanap,
    source_code_link: "https://github.com/alexpatego/P3-ohmyfood",
  },
  {
    name: "Hot Takes",
    description:
      "Site web de restauration, référencant des restaurant et leurs menus ",
    tags: [
      {
        name: "mongodb",
        color: "orangeTAG",
      },
      {
        name: "javascript",
        color: "purpleTAG",
      },
      {
        name: "nodeJS",
        color: "pinkTAG",
      },
    ],
    image: hottakes,
    source_code_link: "https://github.com/alexpatego/P3-ohmyfood",
  },
  {
    name: "Booki",
    description: "Projet 2, site web de réservation immobilières, CSS et HTML",
    tags: [
      {
        name: "html",
        color: "orangeTAG",
      },
      {
        name: "css",
        color: "purpleTAG",
      },
    ],
    image: booki,
    source_code_link: "https://github.com/alexpatego/P3-ohmyfood",
    source_live_demo: "https://alexpatego.github.io/P3-ohmyfood/",
  },
];

export { technologies, about, projects };

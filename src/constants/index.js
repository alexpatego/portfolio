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
    name: "Bonjour, Alexandre Patego, Développeur",
    title: "A propos de moi",
    description:
      "Je suis un jeune Développeur Web diplômé à l'issue d'une formation avec OpenClassroom, je suis à la recherche d'une alternance en tant que Développeur Front-End ou Full Stack afin de poursuivre ma formation. Les différents projets que j'ai effectués m'ont permis d'obtenir des compétences en HTML, CSS et JavaScript et plusieurs frameworks tels que React ou ThreeJS qui ont d'ailleurs permis de construire ce site. Je vous invite à découvrir mes projets ! ",
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
    source_code_link: "https://github.com/alexpatego/portofolio",
    source_live_demo: "",
  },
  {
    name: "Kasa",
    description:
      "Le projet 7, site web de locations et réservations immobilières en React ",
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
    source_code_link: "https://github.com/alexpatego/P5-KANAP",
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
    source_code_link: "https://github.com/alexpatego/P6-HotTakes-BACKEND",
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
    source_code_link: "https://github.com/alexpatego/P2-Booki",
    source_live_demo: "https://alexpatego.github.io/P2-Booki",
  },
];

export { technologies, about, projects };

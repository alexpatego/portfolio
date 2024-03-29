import css from "../assets/technologies/css.png";
import git from "../assets/technologies/git.png";
import html from "../assets/technologies/html.png";
import javascript from "../assets/technologies/javascript.png";
import mongodb from "../assets/technologies/mongodb.png";
import nodejs from "../assets/technologies/nodejs.png";
import react from "../assets/technologies/reactjs.png";
import sass from "../assets/technologies/sass.png";

// could be used
import tailwind from "../assets/technologies/tailwind.png";
import threejs from "../assets/technologies/threejs.svg";
import figma from "../assets/technologies/figma.png";

// projects
import kasa from "../assets/kasaP7.webp";
import ohmyfood from "../assets/ohmyfoodP3.webp";
import kanap from "../assets/kanapP5.webp";
import booki from "../assets/bookiP2.webp";
import hottakes from "../assets/hottakesP6.webp";
import portofolio from "../assets/portofolio.webp";

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
      "Je suis un jeune Développeur Web diplômé à l'issue d'une formation avec OpenClassroom. Je suis à la recherche d'une alternance en tant que Développeur Front-End ou Full Stack afin de poursuivre ma formation. Les différents projets que j'ai effectués m'ont permis d'obtenir des compétences en HTML, CSS et JavaScript et plusieurs frameworks tels que React ou ThreeJS qui ont d'ailleurs permis de construire ce site. Je vous invite à découvrir mes projets ! ",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Mon portfolio avec un dark/light mode ainsi qu'une animation 3d avec threeJs",
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
    source_code_link: "https://github.com/alexpatego/portfolio",
    source_live_demo: "https://alexandrepatego.netlify.app/",
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
    source_code_link: "https://github.com/alexpatego/p7-kasa",
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
        color: "pinkTAG",
      },
      {
        name: "scss",
        color: "pinkTAG",
      },
    ],
    image: ohmyfood,
    source_code_link: "https://github.com/alexpatego/p3-ohmyfood",
    source_live_demo: "https://alexpatego.github.io/p3-ohmyfood/",
  },
  {
    name: "Kanap",
    description:
      "Projet site web e-commerce, traitement des scripts js ( * Projet sur serveur nodejs en local) ",
    tags: [
      {
        name: "javascript",
        color: "yellowTAG",
      },
      {
        name: "nodeJS",
        color: "greenlightTAG",
      },
    ],
    image: kanap,
    source_code_link: "https://github.com/alexpatego/p5-kanap",
  },
  {
    name: "Hot Takes",
    description:
      "Application de notation, création d'une API, mongodb ( * Projet sur serveur nodejs en local)",
    tags: [
      {
        name: "mongodb",
        color: "greenTAG",
      },
      {
        name: "javascript",
        color: "yellowTAG",
      },
      {
        name: "nodeJS",
        color: "greenlightTAG",
      },
    ],
    image: hottakes,
    source_code_link: "https://github.com/alexpatego/p6-hottakes-backend",
  },
  {
    name: "Booki",
    description:
      "Projet 2, premier projet, site web statique de réservation immobilières, CSS et HTML",
    tags: [
      {
        name: "html",
        color: "orangeTAG",
      },
      {
        name: "css",
        color: "pinkTAG",
      },
    ],
    image: booki,
    source_code_link: "https://github.com/alexpatego/p2-booki",
    source_live_demo: "https://alexpatego.github.io/p2-booki",
  },
];

export { technologies, about, projects };

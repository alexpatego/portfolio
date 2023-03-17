import Tilt from "react-parallax-tilt";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import SectionWrap from "../hoc/SectionWrap";
import github from "../assets/github.png";
import demo from "../assets/demo.svg";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_live_demo,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`project ${
          theme === "dark" ? "project--dark" : "project--light"
        }`}
      >
        <div className="project__content">
          <img src={image} alt={name} className="project__content__image" />
          <div className="project__content__links">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient project__content__links__source"
            >
              <img src={github} alt="source code" />
            </div>
          </div>
        </div>

        <div className="project__description">
          <h3 className="project__description__title text">{name}</h3>
          <p className="project__description__sub text">{description}</p>
        </div>

        <div className="project__description__tags">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`${tag.color} project__description__tags__el`}
            >
              #{tag.name}
            </p>
          ))}
          {source_live_demo && source_live_demo.trim() !== "" && (
            <div
              className="project__description__tags__demo blue-gradient"
              onClick={() => window.open(source_live_demo, "_blank")}
            >
              <img src={demo} alt="source code" />
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="works">
        <h2 className="text project__section--title">Mes projets</h2>
      </motion.div>
      <div className="project__display">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrap(Works, "");

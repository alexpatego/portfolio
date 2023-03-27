import React, { useContext } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionWrap from "../hoc/SectionWrap";
import github from "../assets/github.png";
import demo from "../assets/demo.svg";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
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

  // Links

  const handleCardClick = () => {
    window.open(source_code_link, "_blank");
  };

  const handleDemoClick = () => {
    if (source_live_demo && source_live_demo.trim() !== "") {
      window.open(source_live_demo, "_blank");
    } else {
      window.open(source_code_link, "_blank");
    }
  };

  const transition = {
    duration: 0.6,
    delay: index * 0.2,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={transition}
      className="projectcol"
    >
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div
          className={`project ${
            theme === "dark" ? "project--dark" : "project--light"
          }`}
        >
          <div className="project__content">
            <img
              src={image}
              alt={name}
              className="project__content__image"
              onClick={handleDemoClick}
            />
            <div className="project__content__links">
              <div className="black-gradient project__content__links__source">
                <img src={github} alt="source code" onClick={handleCardClick} />
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
              <div className="project__description__tags__demo blue-gradient">
                <img src={demo} alt="existing demo" />
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const textAnimation = textVariant(0.6);

  return (
    <>
      <motion.div variants={textAnimation}>
        <h2 className="text project__section--title " id="works">
          Mes projets
        </h2>
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

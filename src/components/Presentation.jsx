import dl from "../assets/dl.svg";
import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { about } from "../constants";
import SectionWrap from "../hoc/SectionWrap";
import linkedinDark from "../assets/linkedin_presentation.svg";
import linkedinLight from "../assets/linkedin_light.svg";
import githubDark from "../assets/github_dark.svg";
import githubLight from "../assets/github_light.svg";
import { motion } from "framer-motion";

const Presentation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div className="presentation text" id="a-propos">
      <div className="presentation__column ">
        <h2>{about[0].name}</h2>
        <p className="presentation__paragraph">{about[0].description}</p>
      </div>
      <div className="presentation__links">
        <div className="presentation__links__socials">
          <img
            src={theme === "dark" ? linkedinDark : linkedinLight}
            alt="linkedin"
            width="80px"
            height="80px"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alexandre-patego-07481b198/",
                "_blank"
              )
            }
          />
          <img
            src={theme === "dark" ? githubDark : githubLight}
            alt="github"
            width="80px"
            height="80px"
            onClick={() =>
              window.open("https://github.com/alexpatego", "_blank")
            }
          />
        </div>
        <a
          href={`./cv_alexandre_patego.pdf`}
          download="cv_alexandre_patego.pdf"
        >
          <button>
            Télécharger CV
            <span>
              <img src={dl} alt="téléchargement" width="35px" height="35px" />
            </span>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default SectionWrap(Presentation, "");

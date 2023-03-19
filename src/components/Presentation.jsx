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
import { slideIn } from "../utils/motion";

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
            onClick={() =>
              window.open("https://github.com/alexpatego", "_blank")
            }
          />
        </div>
        <a
          href={`${
            import.meta.env.BASE_URL
          }/src/assets/pdf/cv_alexandre_patego.pdf`}
          download=""
        >
          <button>
            Télécharger CV
            <span>
              <img src={dl} alt="téléchargez" />
            </span>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default SectionWrap(Presentation, "");

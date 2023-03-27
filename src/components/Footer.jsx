import React, { useContext } from "react";
import { Link } from "react-router-dom";
import githubDark from "../assets/github_dark.svg";
import githubLight from "../assets/github_light.svg";
import linkedinDark from "../assets/linkedin_dark.svg";
import linkedinLight from "../assets/linkedin_light.svg";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`text footer ${
        theme === "dark" ? "footer--dark" : "footer--light"
      }`}
    >
      <p>2023 © Alexandre Patego portfolio</p>
      <div className="footer__links">
        <img
          src={theme === "dark" ? githubDark : githubLight}
          alt="github"
          onClick={() => window.open("https://github.com/alexpatego", "_blank")}
        />
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
      </div>
    </div>
  );
}

export default Footer;

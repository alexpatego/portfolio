import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/alexandrie.svg";
import styles from "./navbar.module.scss";
import menu_night from "../assets/menu_night.svg";
import menu_light from "../assets/menu_light.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

export const Navbar = ({ setTheme }) => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [animateThemeChange, setAnimateThemeChange] = useState(false);

  useEffect(() => {
    if (animateThemeChange) {
      setTimeout(() => {
        setAnimateThemeChange(false);
      }, 3000); // Change this value to match the animation duration
    }
  }, [animateThemeChange]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setAnimateThemeChange(true);
  };

  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const [menuBackgroundClass, setMenuBackgroundClass] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setMenuBackgroundClass("light");
    } else {
      setMenuBackgroundClass("dark");
    }
  }, [theme]);

  return (
    <nav className={`${styles.nav} ${theme}`}>
      <div className="nav__container">
        <div className="nav__brand">
          <img src={logo} />
          <h1 className="text">Alexandre Patego</h1>
        </div>
        <ul
          className={`${
            toggle ? "Navbar__links Navbar__links--active" : "Navbar__links"
          } ${menuBackgroundClass} text`}
        >
          <li>
            <Link to="/a-propos" className="text" onClick={toggleMenu}>
              A propos
            </Link>
          </li>
          <li>
            <Link to="/experiences" className="text" onClick={toggleMenu}>
              Expériences
            </Link>
          </li>
          <li>
            <Link to="/works" className="text" onClick={toggleMenu}>
              Works
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="Icons">
          <div className="menu" onClick={toggleMenu}>
            {theme === "dark" ? (
              <img src={menu_night} alt="" className="menu__night" />
            ) : (
              <img src={menu_light} alt="" className="menu__light" />
            )}
          </div>
          <div>
            {theme === "dark" ? (
              <img
                src={sun}
                alt=""
                onClick={handleThemeChange}
                className={`sun ${theme === "dark" && "sun--dark"} ${
                  animateThemeChange && "sun--animate"
                }`}
              />
            ) : (
              <img
                src={moon}
                alt=""
                onClick={handleThemeChange}
                className={`moon ${theme === "light" && "moon--light"} ${
                  animateThemeChange && "moon--animate"
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

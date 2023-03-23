import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Presentation,
  Technologies,
  Works,
  Footer,
  Hero,
  Contact,
} from "./components";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/_main.scss";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={` ${theme}`}>
        <div className="background">
          <Navbar setTheme={setTheme} />
          <Hero />
          <Presentation setTheme={setTheme} />
          <Technologies />
          <Works />
          <Contact />
          <Footer setTheme={setTheme} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

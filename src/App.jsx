import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/_main.scss";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={theme}>
        <Navbar setTheme={setTheme} />
        <div className="background flex">
          <h1 className="text">Hello World!</h1>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

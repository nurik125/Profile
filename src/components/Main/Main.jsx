import React from "react";
import "./Main.css";
import AboutMe from "./Components/About me/AboutMe";
import Greeting from "./Components/Greeting/Greeting";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact-footer/Contact-footer";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-greeting">
        <Greeting />
        <AboutMe />
        <Skills />
        <div className="Contact-footer">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;

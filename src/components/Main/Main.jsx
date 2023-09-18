import React from "react";
import "./Main.css";
import AboutMe from "./Components/About me/AboutMe";
import Greeting from "./Components/Greeting/Greeting";
import Skills from "./Components/Skills/Skills";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-greeting">
        <Greeting />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
};

export default Main;

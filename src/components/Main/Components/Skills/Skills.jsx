import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="empty-block"></div>
      <div id="Skills">My honest reaction: </div>
      <div>
        <img
          loading="lazy"
          className="gun-image lazy"
          src={require("../../../../FirstShot.jpg")}
          alt="gun"
        />
        <img
          loading="lazy"
          className="human lazy"
          src={require("../../../../HumanRun.png")}
          alt="human"
        />
      </div>
    </div>
  );
};

export default Skills;

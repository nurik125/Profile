import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="Skills">
      <div id="Skills">My honest reaction: </div>
      <div>
        <img
          className="gun-image"
          src={require("../../../../FirstShot.jpg")}
          alt="gun"
        />
        <img
          className="human"
          src="https://th.bing.com/th/id/OIP.Q7iL_BN8uiZFc-U18yWhkQHaHa?pid=ImgDet&rs=1"
          alt="human"
        />
      </div>
    </div>
  );
};

export default Skills;

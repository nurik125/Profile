import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="AboutMe-paragraph">
        <span  className="MyDescription letter-spacing">
          I'm 14 y.o.
          <br />
          Newbie in React frontend programming
          <br />
          so don't criticize too seriously
        </span>
      </div>
      <span id="About" className="anchor"></span>
    </div>
  );
};

export default AboutMe;

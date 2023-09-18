import React from "react";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div className="Greeting">
      <div className="Greeting-Hi">
        <span>
          Hello visitor
          <span className="greeting-emoji greeting-emoji-pos">🖐</span>
        </span>
        <span className="Greeting-name">My name is Nurasyl</span>
        <span className="Greeting-d"> and this is my profile</span>
      </div>
      <span className="Main-Pointer">🫵</span>
      <img className="Main-myPfp" src="/Images/JustSelfy.jpg" alt="pfp" />
    </div> ///Images&Vid/JustSelfy.jpg
  );
};

export default Greeting;

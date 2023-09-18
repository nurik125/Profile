import React from "react";
import "./HeaderNav.css";
import Popup from "./Popup/Popup";

const HeaderNav = () => {
  return (
    <div className="Header-nav">
      <a className="Header-nav-a" href="#About">
        About me
      </a>
      <a className="Header-nav-a" href="#Skills">
        Abilities and skills
      </a>
      <a className="Header-nav-a" href="#Contact">
        Contact me
      </a>
      <Popup />
    </div>
  );
};

export default HeaderNav;

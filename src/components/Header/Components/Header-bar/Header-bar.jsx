import React from "react";
import "./Header-bar.css";
import Popup from "../HeaderNav/Popup/Popup";

const HeaderBar = () => {
  return (
    <div className="Header-bar">
      {/* Bar-svg */}
      <div className="Header-phoneBar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input className="Header-barCheck" type="checkbox" name="Bar" />

      <div className="Header-barNav">
        <a href="#About">About me</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact me</a>
        <Popup />
      </div>
    </div>
  );
};

export default HeaderBar;

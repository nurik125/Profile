import React from "react";
import "./Header.css";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import HeaderThemeChanger from "./Components/Header-theme/Header-theme";
import HeaderBar from "./Components/Header-bar/Header-bar";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-components">
        <HeaderNav />
        <HeaderThemeChanger />
        <HeaderBar />
      </div>
    </div>
  );
};

export default Header;

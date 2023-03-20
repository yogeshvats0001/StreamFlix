import React from "react";
import "./Navbar.css";
import logo from "./Resources/logo.png";
import avatar from "./Resources/avatar.png";

function Navbar() {
  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="StreamFlix Logo" />
      <img className="nav__avatar" src={avatar} alt="StreamFlix Logo" />
    </div>
  );
}

export default Navbar;

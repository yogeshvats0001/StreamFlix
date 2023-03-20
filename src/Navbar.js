import React from "react";
import "./Navbar.css";
import logo from "./Resources/logo.png";

function Navbar() {
  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="StreamFlix Logo" />
    </div>
  );
}

export default Navbar;

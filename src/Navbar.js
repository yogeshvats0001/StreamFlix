import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./Resources/logo.png";
import avatar from "./Resources/avatar.png";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="StreamFlix Logo" />
      <img className="nav__avatar" src={avatar} alt="StreamFlix Logo" />
    </div>
  );
}

export default Navbar;

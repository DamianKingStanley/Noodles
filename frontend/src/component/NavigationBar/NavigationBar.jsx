import React, { useState, useRef, useEffect } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
import "./NavigationBar.css";
import logo from "../../assest/kinglogo.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="home" className="navigation-bar">
      <div className="logo">
        <Link to="/">
          <img id="hospitallogo" src={logo} alt="" />
        </Link>
      </div>
      {/* <button className="toggle-button" onClick={toggleNavbar}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <nav className={`nav-items ${isOpen ? "open" : ""}`} ref={navRef}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>About</li>
          <li>Testimonia</li>
        </ul>
      </nav> */}
    </div>
  );
};

export default NavigationBar;

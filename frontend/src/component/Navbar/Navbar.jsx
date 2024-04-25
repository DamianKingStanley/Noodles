import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assest/kinglogo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <section className="navbar1">
        <div className="logo">
          <Link to="/">
            <img id="orekelogo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav1-items">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">PRODUCTS</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">LEGACY</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

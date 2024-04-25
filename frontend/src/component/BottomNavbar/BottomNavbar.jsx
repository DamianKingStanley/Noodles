import React from "react";
import {
  IoHomeOutline,
  IoCubeOutline,
  IoPersonOutline,
  IoFlowerOutline,
} from "react-icons/io5";
import "./BottomNavbar.css";

const BottomNavbar = ({ selectedTab, setSelectedTab }) => {
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    scrollToSection(tab);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bottom-navbar">
      <ul>
        <li
          className={selectedTab === "home" ? "active" : ""}
          onClick={() => handleTabChange("home")}
        >
          <IoHomeOutline />
          <span>Home</span>
        </li>
        <li
          className={selectedTab === "brands" ? "active" : ""}
          onClick={() => handleTabChange("brands")}
        >
          <IoCubeOutline />
          <span>Products</span>
        </li>
        <li
          className={selectedTab === "about" ? "active" : ""}
          onClick={() => handleTabChange("about")}
        >
          <IoPersonOutline />
          <span>About</span>
        </li>
        <li
          className={selectedTab === "testimonial" ? "active" : ""}
          onClick={() => handleTabChange("testimonial")}
        >
          <IoFlowerOutline />
          <span>Legacy</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;

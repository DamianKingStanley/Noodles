import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import HeroSection from "../../component/HeroSection/HeroSection";
import Brands from "../../component/Brands/Brands";
import About from "../../component/About/About";
import Testimonial from "../../component/Testimonial/Testimonial";
import Footer from "../../component/Footer/Footer";
import BottomNavbar from "../../component/BottomNavbar/BottomNavbar";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div className="HomeSection">
      <Navbar />
      <NavigationBar />
      <HeroSection />
      <Brands />
      <About />
      <Testimonial />
      {selectedTab === "home" && <HeroSection />}
      {selectedTab === "brands" && <Brands />}
      {selectedTab === "about" && <About />}
      {selectedTab === "testimonial" && <Testimonial />}
      <BottomNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Footer />
    </div>
  );
};

export default Home;

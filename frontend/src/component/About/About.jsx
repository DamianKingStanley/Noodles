import React from "react";
import "./About.css";
import cartoon from "../../assest/cartoon.png";

const About = () => {
  return (
    <div id="about" className="AboutSection">
      <section className="About">
        <div>
          <h1>About Us</h1>
          <p>
            Indomie is a unique brand of Instant Noodles, loved by a majority of
            Nigerians. It has grown to become a household name in Nigeria owing
            to its delightful taste and wholesomeness.
          </p>
          <p>
            Transcending across all age groups, the brand has managed to win
            over the hearts and taste palates of both the young and the old.
          </p>
          <p>
            Being in Nigeria for the last 31years, Indomie has made a remarkable
            impact on the country’s culinary landscape.
          </p>
        </div>
        <div>
          <img className="cartoon" src={cartoon} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;

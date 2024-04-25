import React from "react";
import "./Brands.css";
import noodle1 from "../../assest/noodle3.png";
import noodle6 from "../../assest/noodle6.png";
import noodle3 from "../../assest/noodle5.png";
import noodle7 from "../../assest/noodle7.png";
import noodle8 from "../../assest/noodle8.png";

const Brands = () => {
  return (
    <div id="brands" className="BrandSection">
      <section>
        <div className="Indomie">
          <h1>Our Products</h1>
          <p>
            Indomie is a unique brand of Instant Noodles, loved by a majority of
            Nigerians. It has grown to become a household name in Nigeria owing
            to its delightful taste and wholesomeness. Transcending across all
            age groups, the brand has managed to win over the hearts and taste
            palates of both the young and the old
          </p>
        </div>
        <section className="goods">
          <div>
            <div>
              <img src={noodle1} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img id="noodle" src={noodle6} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src={noodle3} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img id="noodle" src={noodle7} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img id="noodle8" src={noodle8} alt="" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Brands;

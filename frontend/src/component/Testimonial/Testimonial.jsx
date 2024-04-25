import React from "react";
import "./Testimonial.css";
import testi from "../../assest/testi.png";

const Testimonial = () => {
  return (
    <div id="testimonial" className="TestimonialSection">
      <h1>LEGACY</h1>
      <section className="Testimonial">
        <div className="txt">
          <p>
            Indomie is the Market Leader in the noodles industry in Nigeria. We
            have been feeding households since 1988 and impacting the lives of
            Nigerians from various walks of lives. Without a doubt, Indomie is
            fast replacing the term “noodles” in Nigeria.
          </p>
          <p>
            The brand has grown to be considered synonymous with quality, taste,
            and value. The range of products Indomie offers command a
            substantial degree of brand loyalty and enviable “top of mind’
            status amongst its consumers.
          </p>
          <p>
            Vision: To continue to be the most trusted food brand, leading the
            instant noodles category.
          </p>
        </div>
        <div>
          <img id="testi" src={testi} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

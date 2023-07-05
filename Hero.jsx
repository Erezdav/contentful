import React from "react";
import heroImg from "./src/assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>AIacademic</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            doloribus, praesentium, assumenda doloremque nam perferendis dicta
            explicabo, omnis provident harum architecto deleniti perspiciatis
            tempore delectus amet? Provident voluptates explicabo saepe.
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="woman" className="img" />
        </div>
      </div>{" "}
    </section>
  );
};

export default Hero;

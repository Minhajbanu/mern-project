import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/photo1.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Welcome......</h1>
          <p>
            EcoCycleHub is a smart waste management platform that empowers users to donate
            recyclable materials like plastic, paper, electronics, and more. Our goal is to reduce
            landfill pollution by connecting individuals and communities with trusted recycling
            partners.
          </p>
          <button className="cta-btn">Start free today <span>→</span></button>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Recycling bins" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

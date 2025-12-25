import React from "react";
import "../styles/about.css";
import aboutImg from "../assets/images/photo2.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-box">
        <div className="about-left">
          <img src={aboutImg} alt="about eco bins" />
        </div>
        <div className="about-right">
          <h1>About Us</h1>
          <p>
            At EcoCycleHub, we are on a mission to simplify and encourage responsible waste
            disposal through a smart, user-friendly platform that allows individuals and
            communities to donate recyclable waste like plastics, paper, electronics, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

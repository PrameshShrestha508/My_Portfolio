import React from "react";
import Footer from "../../Component/Footer/Footer";

import Icon from "../../Component/Icon/Icon";
import "./About.css";
function About() {
  return (
    <>
      <div className="aboutImageWrapper">
        <div className="aboutImage"></div>
        <h1>About Me</h1>
        <p>
          I am <span> Pramesh Bandhu Shrestha </span> originally from
          <span> Butwal </span>
          currently living in Kathmandu, Nepal. I am currently working as a
          <span> Software Engineer Trainee </span> and is always interested in a
          challenge.
        </p>
        <p>
          I love my work and enjoy each new project as I get it. Feel free to
          have a look at my portfolio and don't hesitate to contact me if you
          think I can be serve you.
          <br />
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;

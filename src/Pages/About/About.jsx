import React from "react";
import Icon from "../../Component/Icon/Icon";
import "./About.css";
function About() {
  return (
    <>
      <div className="aboutImageWrapper">
        <div className="aboutImage"></div>
        <h1>About Me</h1>
        <p>
          I am Pramesh Bandhu Shrestha originally from Butwal, currently living
          in Kathmandu, Nepal. I am currently working as a Software Engineer
          Trainee and is always interested in a challenge.
        </p>
        <p>
          I love my work and enjoy each new project as I get it. Feel free to
          have a look at my portfolio and don't hesitate to contact me if you
          think I can be serve you.
          <br />
          <span>Thanks for stopping by.</span>
        </p>
      </div>

      <div className="aboutIcon">
        <a
          href="https://www.instagram.com/pramesh.shrestha.566/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="fab fa-instagram" />
        </a>
        <a
          href="https://www.facebook.com/pramesh.shrestha.566"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="fab fa-facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/pramesh-shrestha-249b7b177/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="fab fa-linkedin" />
        </a>
        <a
          href="https://github.com/PrameshShrestha508"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="fab fa-github" />
        </a>
      </div>
    </>
  );
}

export default About;

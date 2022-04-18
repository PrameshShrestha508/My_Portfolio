import React, { useContext } from "react";
import "./Intro.css";
import me from "../../Assets/Images/me.png";
import Github from "../../Assets/Images/github.png";
import LinkedIn from "../../Assets/Images/linkedin.png";
import Instagram from "../../Assets/Images/instagram.png";
import { themeContext } from "../../Context";

import { Link } from "react-scroll";
const Intro = () => {
  // Transition

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Pramesh Shrestha</span>
          <span>
            Reliable Intern studying BSC CSIT doing an internship in Optimum
            Futurist with the aim of expanding skills and gain valuable
            real-world experience
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://github.com/PrameshShrestha508"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/pramesh-shrestha-249b7b177/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://www.instagram.com/pramesh.shrestha.566/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={me} alt="" />
      </div>
    </div>
  );
};

export default Intro;

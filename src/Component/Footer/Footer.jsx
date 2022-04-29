import React from "react";
import "./Footer.css";
import Wave from "../../Assets/Images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>prameshshrestha455@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/pramesh.shrestha.566/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.facebook.com/pramesh.shrestha.566"
            target=""
            rel="noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/PrameshShrestha508"
            target=""
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

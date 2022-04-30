import React from "react";
import "./Footer.css";
import Icon from "../Icon/Icon";
const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <span>prameshshrestha455@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/pramesh.shrestha.566/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="fab fa-instagram icons" />
          </a>
          <a
            href="https://www.facebook.com/pramesh.shrestha.566"
            target=""
            rel="noreferrer"
          >
            <Icon icon="fab fa-facebook icons" />
          </a>
          <a
            href="https://github.com/PrameshShrestha508"
            target=""
            rel="noreferrer"
          >
            <Icon icon="fab fa-github icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

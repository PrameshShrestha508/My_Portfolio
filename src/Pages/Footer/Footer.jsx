import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div id="social">
          <a
            href="https://www.linkedin.com/in/pramesh-shrestha-249b7b177/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/PrameshShrestha508"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-google"></i>
          </a>
          <a
            href="https://www.instagram.com/pramesh.shrestha.566/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div id="footer_about">
          <h2>Useful Links</h2>
          <a href="portfolio">
            <p>Portfolio</p>
          </a>
          <a href="services">
            <p>Service</p>
          </a>
          <a href="contact">
            <p>Contact</p>
          </a>
        </div>
        <div id="elements">
          <h2>Contact Me</h2>
          <i className="fa-solid fa-phone">
            <p>+32 696 69 69 69</p>
          </i>
          <i className="fa-solid fa-at">
            <p>sample@gmail.com</p>
          </i>
          <i className="fa-solid fa-address-book">
            <p>Antwerp , Belgium</p>
          </i>
        </div>
      </div>
    </>
  );
}

export default Footer;

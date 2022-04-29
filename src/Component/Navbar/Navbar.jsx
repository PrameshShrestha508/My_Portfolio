import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

import { Link } from "react-router-dom";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, activeLinkSet] = useState("home");
  return (
    <>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">
            <Link activeClass="active" to="/">
              <p>PBS</p>
            </Link>
          </div>
          <Toggle />
        </div>
        {/* right */}
        <div className="n-right">
          <div className={isMobile ? "nav-links-mobile" : "n-list"}>
            <ul
              style={{ listStyleType: "none" }}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <Link
                  className={activeLink === "home" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("home");
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={activeLink === "about" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("about");
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={activeLink === "services" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("services");
                  }}
                >
                  Serivces
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className={activeLink === "portfolio" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("portfolio");
                  }}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={activeLink === "contact" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

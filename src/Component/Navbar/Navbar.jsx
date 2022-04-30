import React, { useEffect, useContext, useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, activeLinkSet] = useState("/");
  useEffect(() => {
    let path = location.pathname;
    if (path !== activeLink) {
      activeLinkSet(path);
    }
  }, [activeLinkSet, location.pathname, activeLink]);

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
                  className={activeLink === "/" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("/");
                  }}
                  style={{ color: darkMode ? "white" : "" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={activeLink === "/about" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("/about");
                  }}
                  style={{ color: darkMode ? "white" : "" }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className={activeLink === "/portfolio" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("/portfolio");
                  }}
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={activeLink === "/contact" ? "active" : null}
                  onClick={() => {
                    activeLinkSet("/  contact");
                  }}
                  style={{ color: darkMode ? "white" : "" }}
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

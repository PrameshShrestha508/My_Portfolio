import React, { useContext } from "react";
import Portfolio from "./Portfolio";
import { themeContext } from "../../Context";
import "./Portfolio.css";
import Footer from "../../Component/Footer/Footer";
const PortfolioWrapper = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="portfolio" id="portfolio">
        <span style={{ color: darkMode ? "white" : "" }}>Portfolio</span>
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioWrapper;

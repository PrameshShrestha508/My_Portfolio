import React, { useContext } from "react";
import Cards from "./Cards";
import "./Portfolio.css";
import "swiper/css";
import Coffee from "../../Assets/Images/coffee.png";
import Culinary from "../../Assets/Images/culinary.png";
import zodiac from "../../Assets/Images/zodiac.png";
// import TruthDare from "../../Assets/Images/truthdare.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Portfolio</span>
      {/* slider */}
      <div className="port_card">
        <Cards
          sname={"Coffee Templete"}
          imgsrc={Coffee}
          title={"A Coffe Templete Websites from HTML & CSS"}
          link={"https://github.com/PrameshShrestha508/coffee"}
        />
        <Cards
          sname={"Culinary Templete"}
          imgsrc={Culinary}
          title={"A Culinary Templete Websites from HTML & CSS"}
          link={"https://github.com/PrameshShrestha508/culinary"}
        />
        <Cards
          sname={"zodiac Templete"}
          imgsrc={zodiac}
          title={"A zodiac Templete Websites from HTML CSS & JS"}
          link={"https://github.com/PrameshShrestha508/zodiac"}
        />
      </div>
    </div>
  );
};

export default Portfolio;

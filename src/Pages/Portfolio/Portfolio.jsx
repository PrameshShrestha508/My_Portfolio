import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./Portfolio.css";

import "swiper/css";
import Coffee from "../../Assets/Images/coffee.png";
// import Culinary from "../../Assets/Images/culinary.png";
// import zodiac from "../../Assets/Images/zodiac.png";
// import TruthDare from "../../Assets/Images/truthdare.png";
// import { themeContext } from "../../Context";
const Portfolio = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4000/project/3").then((res) => {
      setIsLoading(false);
      setPost(res.data);
    });
  }, []);
  return (
    <>
      {isLoading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading &&
        post.map((curElem) => {
          return (
            <div className="port_card">
              <Cards
                imgsrc={Coffee}
                date={new Date(curElem.projectDate).toDateString()}
                projectTitle={curElem.projectTitle}
                projectLink={curElem.projectLink}
              />
            </div>
          );
        })}
    </>
  );
};

export default Portfolio;

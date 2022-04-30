import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../Component/PortfolioCard/PortfolioCard";
import "./Portfolio.css";

import Coffee from "../../Assets/Images/coffee.png";
import Zodiac from "../../Assets/Images/zodiac.png";
const Portfolio = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4000/project/6").then((res) => {
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
        post.map((curElem, index) => {
          return (
            <div className="port_card">
              <Cards
                imgsrc={index % 2 === 0 ? Coffee : Zodiac}
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

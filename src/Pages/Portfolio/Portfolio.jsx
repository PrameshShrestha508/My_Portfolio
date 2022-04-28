import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../Component/PortfolioCard/PortfolioCard";
import "./Portfolio.css";

import "swiper/css";
import Coffee from "../../Assets/Images/coffee.png";
const Portfolio = () => {
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

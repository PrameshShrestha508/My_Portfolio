import React from "react";
function Card(props) {
  return (
    <>
      <div className="portfolio_cards">
        <div className="portfolio_card">
          <img src={props.imgsrc} alt="myPic" className="portfolio_card_img" />
          <div className="portfolio_card_info">
            <span className="portfolio_card_category">{props.title} </span>
            <h3 className="portfolio_card_title">{props.sname}</h3>
            <a href={props.link} rel="noreferrer" target="_blank">
              <button className="portfolio_button">GOTO Github</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

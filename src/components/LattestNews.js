import React from "react";
import news from "../img/News.png";
import textImg from "../img/textImg.png";

function LattestNews() {
  return (
    <form className="news">
      <div className="news--img">
        <img src={news} alt="" />
      </div>
      <div className="news--litTitle">LATTEST NEWS</div>
      <div className="news--Title">
        Latest news <img src={textImg} alt="" /> New updates
      </div>
      <div className="news--input">
        <input placeholder="Enter your email"></input>
        <button className="news--button">SUBSCRIBE</button>
      </div>
      <div className="news__submit">
        <input novalidate type="checkbox"  /> Sign up for our newsletter
      </div>
    </form>
  );
}

export default LattestNews;

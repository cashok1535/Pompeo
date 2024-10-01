import React from "react";
import headerImg from "../img/headerImage.png";
import textImg from "../img/textImg.png";

function HeaderBottom() {
  return (
    <div className="headerBottom">
      <div className="headerBottom--left">
        <div className="headerBottom--littleTitle">POMPEO POTTEERY</div>
        <div className="headerBottom--largeTitle">
          Unique Porcelain <img src={textImg} alt="" /><br /> Stone Collection
        </div>
        <div className="headerBottom--text">
          Unique & modern pottery made by our master in porcelain & stones
        </div>
        <button className="headerBottom--button">Shop Collection</button>
      </div>
      <div className="headerBottom--right">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
}

export default HeaderBottom;

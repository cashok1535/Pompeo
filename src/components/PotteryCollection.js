import React from "react";
import productOne from "../img/productOne.png"
import productTwo from "../img/productTwo.png"
import productThree from "../img/productThree.png"
import productFour from "../img/productFour.png"
import productFive from "../img/productFive.png"
import productSix from "../img/productSix.png"

function PotteryCollection() {
  return (
    <div className="potteryCollection">
      <div className="potteryCollection--text">PRODUCT COLLECTIONS</div>
      <div className="potteryCollection--title">
        <div className="potteryCollection--titleRed">Our online store</div>
        <div className="potteryCollection--titleBlack">Pottery Collection</div>
      </div>
      <div className="potteryCollection__products">
        <div className="potteryCollection__products__element">
          <img src={productOne} alt="" />
          <div className="productName">Decor Plate</div>
          <div className="productPrice">$ 65.00 USD</div>
        </div>
        <div className="potteryCollection__products__element">
          <img src={productTwo} alt="" />
          <div className="productName">Mint Pottery</div>
          <div className="productPrice">$ 75.00 USD</div>
        </div>
        <div className="potteryCollection__products__element">
          <img src={productThree} alt="" />
          <div className="productName">Set Of Potterys</div>
          <div className="productPrice">$ 125.00 USD</div>
        </div>
        <div className="potteryCollection__products__element">
          <img src={productFour} alt="" />
          <div className="productName">Orange Ceramic</div>
          <div className="productPrice">$ 55.00 USD</div>
        </div>
        <div className="potteryCollection__products__element">
          <img src={productFive} alt="" />
          <div className="productName">Dark Bowl</div>
          <div className="productPrice">$ 115.00 USD</div>
        </div>
        <div className="potteryCollection__products__element">
          <img src={productSix} alt="" />
          <div className="productName">Square Pottery</div>
          <div className="productPrice">$ 75.00 USD</div>
        </div>
      </div>
      <button className="potteryCollection--button">VIEW ALL PRODUCTS</button>
    </div>
  );
}

export default PotteryCollection;

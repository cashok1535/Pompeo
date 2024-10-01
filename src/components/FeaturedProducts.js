import React from "react";
import imgTop from "../img/featuredImgTop.png";
import imgBottom from "../img/featuredImgBottom.png";

function FeaturedProducts() {
  return (
    <div className="featuredProducts">
      <div className="featuredProducts__top">
        <div className="featuredProductsTop__element">
          <div className="featuredProducts__elementBackground">
            <img className="featuredProducts--img" src={imgTop} alt="" />
          </div>
        </div>
        <div className="featuredProductsTop__element">
          <div className="featuredProducts--title">Gold & Black Pottery</div>
          <div className="featuredProducts--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </div>
          <button className="featuredProducts--bottom">View Details</button>
        </div>
      </div>
      <div className="featuredProducts__bottom">
        <div className="featuredProductsTop__element">
          <div className="featuredProducts--title">Orange Ceramic</div>
          <div className="featuredProducts--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </div>
          <button className="featuredProducts--bottom">View Details</button>
        </div>
        <div className="featuredProductsTop__element">
          <div className="featuredProducts__elementBackground">
            <img
              className="featuredProducts--imgSecond"
              src={imgBottom}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="featuredProducts__right--text">FEATURED PRODUCTS</div>
    </div>
  );
}

export default FeaturedProducts;

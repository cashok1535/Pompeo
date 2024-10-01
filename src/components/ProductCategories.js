import React from "react";
import textImg from "../img/textImg.png";
import categoryImageFirst from "../img/categoryImageFirst.png";
import categoryImageSecond from "../img/categoryImageSecond.png";
import categoryImageThird from "../img/categoryImageThird.png";

function ProductCategories() {
  return (
    <div className="productCategories">
        <div className="productCategories__title--first">
          Product Categories
        </div>
        <div className="productCategories__title--second">
          Porcelain <img src={textImg} alt="" /> Pottery
        </div>
      <div className="productCategories__left">HAND CRAFT POTTERY</div>
      <div className="category">
        <div className="category__element__first">
          <img src={categoryImageFirst} alt="" /> Vases
        </div>
        <div className="category__element__second">
          <img src={categoryImageSecond} alt="" /> Mugs
        </div>
        <div className="category__element__third">
          <img src={categoryImageThird} alt="" /> Plates
        </div>
      </div>
      <div className="productCategories--info">
        <div className="productCategories--info--left">
          <div className="info--title">
            Hand Grafted <br /> Pottery since 1990{" "}
          </div>
          <div className="info--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </div>
        </div>
        <div className="productCategories--info--right">
          <div className="info--title">
            We Provide Premium <br /> Pottery Produts
          </div>
          <div className="info--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;

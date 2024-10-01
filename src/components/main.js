import React from "react";
import ProductCategories from "./ProductCategories";
import FeaturedProducts from "./FeaturedProducts";
import PotteryCollection from "./PotteryCollection";
import PompeoPottery from "./PompeoPottery";
import LattestNews from "./LattestNews";
import Footer from "./Footer";

function Main() {
  return (
    <div className="main">
      <ProductCategories />
      <div className="line"></div>
      <FeaturedProducts />
      <div className="line"></div>
      <PotteryCollection />
      <PompeoPottery />
      <LattestNews />
      <Footer />
    </div>
  );
}

export default Main;

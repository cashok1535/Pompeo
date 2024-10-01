import React, { useState } from "react";
import pompeo from "../img/Pompeo.svg";
import cart from "../img/cart.svg";
import Cart from "./Cart";

function HeaderTop() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="headerTop">
      <img className="headerTop--img" src={pompeo} alt="" />
      <div className="headerList">
        <a className="headerList__element" href="1">
          Home
        </a>
        <a className="headerList__element" href="1">
          About
        </a>
        <a className="headerList__element" href="1">
          Shop
        </a>
        <a className="headerList__element" href="1">
          Contact
        </a>
      </div>
      <div className="headerListCard">
        <button className="headerTop--button" onClick={handleClick}>
          <img className="headerListCard--img" src={cart} alt="" />
          Cart
        </button>
        {open && <Cart />}
      </div>
    </div>
  );
}

export default HeaderTop;

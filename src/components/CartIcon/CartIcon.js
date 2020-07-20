import React from "react";
import ShoppingIcon from "../../assets/images/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <img src={ShoppingIcon} className="shopping-icon" alt="shopping-cart" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

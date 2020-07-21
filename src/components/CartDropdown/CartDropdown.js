import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {/* <div className="cart-items" /> */}
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

export default connect(mapStateToProps)(CartDropdown);

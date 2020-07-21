import React from "react";
import ShoppingIcon from "../../assets/images/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";
import { selectCartItemsCount } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img src={ShoppingIcon} className="shopping-icon" alt="shopping-cart" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

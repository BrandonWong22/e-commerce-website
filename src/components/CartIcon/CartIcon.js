import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";
import { selectCartItemsCount } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  ShoppingIconImage,
  ItemCountContainer,
} from "./CartIconStyle";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconImage />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

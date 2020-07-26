import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/CartActions";
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemSpan,
  QuantityContainer,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItemStyles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer src={imageUrl} alt="item" />
      <CheckoutItemSpan>{name}</CheckoutItemSpan>
      <QuantityContainer>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <CheckoutItemSpan>{price}</CheckoutItemSpan>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

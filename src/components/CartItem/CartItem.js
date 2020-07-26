import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  CartText,
} from "./CartItemStyles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <CartText>{name}</CartText>
        <CartText>
          {quantity} x ${price}
        </CartText>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;

import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H7PraGurUUPjyWt1AvRa1KCTQGZ54PW2pejOY2nacitC04Mq5y7c7Tn8hRdcy50joXcYVSvNAVab9g1106kkO5S00uXZ3zOjJ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Clothing"
      billingAddress
      shippingAddress
      description={`The total is $${price}`}
      price={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

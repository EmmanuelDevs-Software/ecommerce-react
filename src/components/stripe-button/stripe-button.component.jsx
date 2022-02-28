import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51KY0aBJdmT4zGBTeC9wDFYB2zBxotOmhd8rccIoIAfuQ1STpmk2jylUMvHI8NzR6ug5wY85z9eY2cWHSNqdH7xn700fkxxv39Y";
  const onToken = (token) => {
    console.log(token);

    Swal.fire("Payment!", "Successfully!", "success");
  };
  return (
    <StripeCheckout
      name="CRWN Cloting Co." // the pop-in header title
      description={`Your total is: ${price}`} // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      // ComponentClass="div"
      label="Payment info" // text inside the Stripe button
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      currency="USD"
      stripeKey={publishablekey}
      locale="es"
      // email="info@vidhub.co"
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      // zipCode={false}
      // alipay // accept Alipay (default false)
      // bitcoin // accept Bitcoins (default false)
      // allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
      // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
      // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      //reconfigureOnUpdate={false}
      // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
      // useful if you're using React-Tap-Event-Plugin
      //triggerEvent="onTouchTap"
    />
  );
};

export default StripeCheckoutButton;

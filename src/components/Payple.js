import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPal = () => {
  const initialOptions = {
    "client-id": "AY8PM58C8cozFv04UVC18InHcITUQiE5mqFJTt37CIHHbpQEBeqWYdxf4Xoi9oqEUsGOl9K0z8RO_ecs", // Replace with your Client ID
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01', // Amount to be charged
              },
            }],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log('Order', order);
          // Handle successful transaction here
        }}
        onError={(err) => {
          console.error('PayPal Checkout onError', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPal;
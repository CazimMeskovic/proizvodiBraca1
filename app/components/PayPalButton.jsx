'use client';
import { useEffect } from 'react';

const PayPalButton = ({ amount, onSuccess }) => {
  useEffect(() => {
    // Provjera da li PayPal SDK postoji
    if (!window.paypal) return;

    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
      },
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toString(), // Npr. "49.99"
              },
            },
          ],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          console.log('Transaction completed by ' + details.payer.name.given_name);
          onSuccess(details); // Callback ka parent komponenti
        });
      },
      onError: function (err) {
        console.error('PayPal error:', err);
      },
    }).render('#paypal-button-container');
  }, [amount]);

  return <div id="paypal-button-container" />;
};

export default PayPalButton;

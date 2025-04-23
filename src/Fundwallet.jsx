import React, { useState } from 'react';

const FundWallet = () => {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');

  const payWithPaystack = (e) => {
    e.preventDefault();

    const handler = window.PaystackPop.setup({
      key: 'pk_live_36ede3add61c5a99b31da28ee6125349f520941a',
      email: email,
      amount: amount * 100, // Paystack uses kobo
      currency: 'NGN',
      callback: function (response) {
        alert('Payment successful. Reference: ' + response.reference);
      },
      onClose: function () {
        alert('Payment window closed.');
      }
    });

    handler.openIframe();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Fund Your Wallet</h2>
      <form onSubmit={payWithPaystack}>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="number"
          placeholder="Amount (₦)"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br /><br />

        <button type="submit">Pay with Paystack</button>
      </form>
    </div>
  );
};

export default FundWallet;

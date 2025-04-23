import React, { useState } from 'react';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [bundle, setBundle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You will manually check your email and send the data
    window.open(`mailto:aakkaura2003@gmail.com?subject=Data Order&body=Email: ${email}%0ABundle: ${bundle}`);

    setSubmitted(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to Aak Data Services</h2>
      <p>Select MTN Data Bundle and follow the payment steps.</p>

      <h3>Available Bundles (₦550 per GB):</h3>
      <ul>
        <li>3GB – ₦1650</li>
        <li>4GB – ₦2200</li>
        <li>5GB – ₦2750</li>
      </ul>

      <p><strong>Pay to:</strong><br />
      Opay – 8142400066<br />
      Abdulrahman Abubakar</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <select
          required
          value={bundle}
          onChange={(e) => setBundle(e.target.value)}
        >
          <option value="">Select Bundle</option>
          <option value="3GB - ₦1650">3GB – ₦1650</option>
          <option value="4GB - ₦2200">4GB – ₦2200</option>
          <option value="5GB - ₦2750">5GB – ₦2750</option>
        </select><br /><br />

        <button type="submit">Submit Order</button>
      </form>

      {submitted && <p>Order sent! You will get your data shortly.</p>}
    </div>
  );
};

export default HomePage;

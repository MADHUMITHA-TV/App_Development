import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../Assets/CSS/order.css';

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = () => {
    alert(`Tracking number ${trackingNumber} entered.`);
  };

  return (
    <div>
      <Navbar />
      <br></br><br></br><br></br><br></br><br></br>
      <div className="tracking-container">
        <h1 className="tracking-title">Track Your Package</h1>
        <p className="tracking-description">
          Enter your tracking number below to get the latest update on your package. Our system provides real-time updates so you can stay informed every step of the way.
        </p>
        <div className="tracking-form">
          <input
            type="text"
            placeholder="Enter order number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="tracking-input"
          />
          <button onClick={handleTrack} className="tracking-button">Track</button>
        </div>
        <div className="tracking-details">
          <h2>How It Works</h2>
          <p>Our advanced logistics network allows you to track your package in real-time. From the moment your package is picked up to the final delivery, you will have full visibility.</p>
        </div>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>How do I track my package?</li>
            <li>What should I do if my package is delayed?</li>
            <li>Can I change the delivery address?</li>
          </ul>
        </div>
        <div className="customer-support">
          <h2>Customer Support</h2>
          <p>If you have any issues or inquiries, please contact our 24/7 support team at <a href="mailto:support@transpomaster.com">support@transpomaster.com</a> or call us at (123) 456-7890.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tracking;
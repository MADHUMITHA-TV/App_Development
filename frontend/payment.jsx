import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/payment.css'; 

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the PaymentDetails page with the form data
    navigate('/paymentDetails', { state: { cardNumber, cardName, expiryDate, cvv, phone, amount } });
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-form">
        <h2>Enter Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              placeholder="John Doe"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="0987654321"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              placeholder="Rs."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

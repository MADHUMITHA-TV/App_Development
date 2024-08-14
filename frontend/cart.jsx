import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../../contexts/CartContext'; // Adjust path as needed
import Navbar from '../../Components/navbar';
import '../../Assets/CSS/cart.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate('/payment'); // Navigate to payment page
  };

  return (
    <div className='cartnav'>
      <Navbar/>
      <div className="cart-page">
        <h6>MY ORDERS</h6>
        <div className="cart-container">
          <div className="cart-items">
            <h2>ITEM LIST</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <span>{item.name}</span>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-summary">
            <h2>ORDER SUMMARY</h2>
            <p>Products ({getTotalItems()}) : $ {getTotalPrice().toFixed(2)}</p>
            <p>Shipping : $30</p>
            <h3>TOTAL AMOUNT: $ {(getTotalPrice() + 30).toFixed(2)}</h3>
            <div className='carta'>
            <button className="checkout-button" onClick={handleCheckout}><Link to='./payment'>Go to checkout</Link></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/navbar.css';
import logo from '../Assets/Images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../contexts/CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <Link to="/">ToyStore</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to='/order'>ORDER TRACKING</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div className="auth-links">
        <input type="text" className="search-bar" placeholder="Search..." />
        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </div>
    </nav>
  );
}

export default Navbar;

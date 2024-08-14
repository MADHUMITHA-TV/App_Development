import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/CSS/home.css'; 
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';
import img1 from '../../Assets/Images/img1.jpg'; 
import icon1 from '../../Assets/Images/icon1.webp'; 
import icon2 from '../../Assets/Images/icon2.png'; 
import icon3 from '../../Assets/Images/icon3.webp'; 
import icon4 from '../../Assets/Images/icon4.webp'; // Add your promotional image
import icon5 from '../../Assets/Images/icon5.jpg';
import sp from '../../Assets/Images/sp.jpg'
function Home() {
  return (
    <div>
      <Navbar />
      <br /><br /><br></br><br></br>
      <div className="home-container">
      <div className="home-header"></div>
      <div className="intro-section">
      <img src={img1} alt="Toy Store" className="intro-image" />
      <div className="intro-text">
      <h1>Creating Smiles with Every Playful Discovery</h1>
      <p>Find all your favorite play sets under same roof </p>
      <p>where every plaything is a gateway to </p>
      <p>adventure and delight!!!</p>
      <br />
      <div className='categ'>
      <button className="intro-button"><Link to="/categories">Explore Now</Link></button>
      </div></div></div>
      <div className="features-section">
      <h2>!!!  Delights and Insights  !!!  Perks and Quirks  !!!</h2>
      <div className="features-container">
      <div className="feature-card">
      <img src={icon1} alt="Feature 1" className="feature-icon" />
      <p>Wide Variety of Products with Age-appropriate toys</p></div>
      <div className="feature-card">
      <img src={icon2} alt="Feature 2" className="feature-icon" />
      <p>Customer Services including Gift Wrapping</p></div>
      <div className="feature-card">
      <img src={icon3} alt="Feature 3" className="feature-icon" />
      <p>Safe and High-quality Products with durable toys</p></div>
      <div className="feature-card">
      <img src={icon4} alt="Feature 4" className="feature-icon" />
      <p>Convenient Shopping Experience with Online Shopping</p></div>
      <div className="feature-card">
      <img src={icon5} alt="Feature 5" className="feature-icon" />
      <p>Special Events and Promotions such as In-store events</p></div></div></div>
      <div className="promo-section">
      <div className="promo-text">
      <h2>Promotions and Special Offers</h2>
      <p>The store owner can run promotional campaigns, offer discounts, and highlight special deals on specific toys or across the entire store.These offers can be showcased prominently on the website or sent to customers via email newsletters.</p></div>
      <img src={sp} alt="Promotions" className="promo-image" />
      </div>
      <Footer />
      </div>
    </div>
  );
}
export default Home;

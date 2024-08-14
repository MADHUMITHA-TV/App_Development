import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import '../Assets/CSS/about.css'; 
import '../Assets/CSS/navbar.css';

import img2 from '../Assets/Images/img2.jpg';
import img3 from '../Assets/Images/img3.jpg';
import img4 from '../Assets/Images/img4.jpeg';

import p1 from '../Assets/Images/p1.jpg';
import p2 from '../Assets/Images/p2.jpg';
import p3 from '../Assets/Images/p3.jpg';
import p4 from '../Assets/Images/p4.jpg';

import a1 from '../Assets/Images/a1.jpg';
import a2 from '../Assets/Images/a2.jpg';
import a3 from '../Assets/Images/a3.jpg';
import a4 from '../Assets/Images/a4.jpg';
import a5 from '../Assets/Images/a5.jpg';
import a6 from '../Assets/Images/a6.jpg';
import a7 from '../Assets/Images/a7.jpg';

import Footer from './footer';

const AboutPage = () => {
  // Example reviews data with images
  const reviews = [
    {
      name: "Jane Doe",
      review: "I love shopping here! The selection of toys is amazing and the customer service is top-notch.",
      rating: 5,
      image: p1 
    },
    {
      name: "John Smith",
      review: "Great store with a variety of toys. The kids are always excited when we visit!",
      rating: 4,
      image: p2 // Replace with actual image path
    },
    {
      name: "Emily Johnson",
      review: "Fantastic service and high-quality toys. Highly recommend to all parents!",
      rating: 5,
      image: p3// Replace with actual image path
    },
    {
      name: "Emily Johnson",
      review: "Fantastic service and high-quality toys. Highly recommend to all parents!",
      rating: 5,
      image: p4 // Replace with actual image path
    },
  ];

  // State for current image index
  const [currentImage, setCurrentImage] = useState(0);
  
  // Array of images for the slideshow
  const images = [img2, img3, img4];

  // Function to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]); // Dependency array with images.length
  

  const topImages = [a1,a2, a3, a4, a5,a6,a7];

  const getStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>&#9733;</span>
    ));
  };

  return (
    <div>
      <Navbar/>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-text">
            Welcome to our Toy Store, where every visit is a journey into a world of wonder and creativity. We take pride in offering a carefully curated selection of toys designed to inspire, educate, and entertain children of all ages. Our store features an extensive range of products, including innovative educational toys that foster learning through play, thrilling board games for family bonding, and action figures that bring favorite characters to life. We also offer a variety of challenging puzzles, timeless dolls, and vibrant outdoor toys for endless adventures. Each item in our inventory is chosen with great care to ensure the highest standards of safety, durability, and quality. 
          </p>
        </div>
        <img src={images[currentImage]} alt="Toy Store" className="hero-image" />
      </section>
      <div className='para'>
      <h1>Where fun and smiles are always in sight, our toy store makes everything right!!!</h1>
      </div>
      <section className="top-images-section">
        <div className="top-images-row">
          {topImages.map((img, index) => (
            <img key={index} src={img} alt={`Top ${index + 1}`} className="top-image" />
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.image} alt={review.name} className="review-image" />
              <h3 className="review-name">{review.name}</h3>
              <p className="review-text">{review.review}</p>
              <div className="review-rating">
                {getStarRating(review.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default AboutPage;

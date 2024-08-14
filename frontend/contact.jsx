import React, { useState } from 'react';
import '../Assets/CSS/contact.css';
import Navbar from './navbar';
import Footer from './footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '', // changed from 'story' to 'message' for clarity
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/contact/submit1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: ''
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error during contact form submission:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <br /><br /><br /><br />
      <div className='pink'>
        <div className="form-and-info">
          <div className="contact-info">
            {/* You can add contact information here if needed */}
          </div>
          <div className="form-container">
            <form className="event-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text" // Changed type to text; 'address' should be a string
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              <textarea
                name="message" // Changed from 'story' to 'message'
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

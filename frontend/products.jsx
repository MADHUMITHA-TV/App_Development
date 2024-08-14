import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../Assets/CSS/products.css';

const Products = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const products = [
    { id: 1, name: 'Educational Toys', description: 'Educational toys are designed to enhance childrens learning and development through play, encouraging skills such as problem-solving, creativity, and critical thinking.', price: '$10.00', stock: 100 },
    { id: 2, name: 'Action Figures', description: 'Action figures are poseable models of characters from various media, popular for play and collecting.', price: '$20.00', stock: 50 },
    { id: 3, name: 'Dolls', description: 'Delightful dolls that spark imagination and create endless playtime adventures.', price: '$30.00', stock: 30 },
    { id: 4, name: 'Puzzles', description: 'Engage young minds with our captivating puzzles, designed to challenge, entertain, and inspire creativity at every turn.', price: '$40.00', stock: 20 },
    { id: 5, name: 'Board Games', description: 'Engage in fun and strategy with our wide selection of board games, perfect for family game nights or friendly competitions.', price: '$50.00', stock: 10 },
  ];

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className="main-container">
        <div className="main-title">
          <h3>PRODUCTS</h3>
        </div>

        <div className="products-content">
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                   
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Products;
import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../Assets/CSS/categorie.css';
 

const Categorie = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const categorie = [
      { id: 1, name: 'Educational Toys', description: 'Educational toys are designed to enhance childrens learning and development through play, encouraging skills such as problem-solving, creativity, and critical thinking.' },
      { id: 2, name: 'Action Figures', description: 'Action figures are poseable models of characters from various media, popular for play and collecting.' },
      { id: 3, name: 'Dolls', description: 'Delightful dolls that spark imagination and create endless playtime adventures.' },
      { id: 4, name: 'Puzzles', description: 'Engage young minds with our captivating puzzles, designed to challenge, entertain, and inspire creativity at every turn.' },
      { id: 5, name: 'Board Games', description: 'Engage in fun and strategy with our wide selection of board games, perfect for family game nights or friendly competitions.' },

    ];
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
  
        <main className='main-container'>
          <div className='main-title'>
            <h3>CATEGORIES</h3>
          </div>
  
          <div className='categories-content'>
            <table className="categories-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categorie.map(category => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                      <button className="edit-btn">Edit</button>
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
  
  export default Categorie;
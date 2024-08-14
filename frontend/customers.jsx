import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../Assets/CSS/customers.css';
 

const Customers = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
      { id: 3, name: 'Michael Johnson', email: 'michael@example.com', phone: '456-789-0123' },
      { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '321-654-9870' },
      { id: 5, name: 'William Brown', email: 'william@example.com', phone: '654-321-0987' },
    ];
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
  
        <main className='main-container'>
          <div className='main-title'>
            <h3>CUSTOMERS</h3>
          </div>
  
          <div className='customers-container'>
            <div className='content'>
              <table className="customers-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Customers;
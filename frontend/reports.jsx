import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../Assets/CSS/reports.css';
 


const Reports = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const reports = [
      { id: 1, title: 'Monthly Sales', date: '2024-07-01', status: 'Completed' },
      { id: 2, title: 'Inventory Summary', date: '2024-07-15', status: 'In Progress' },
      { id: 3, title: 'Customer Feedback', date: '2024-07-20', status: 'Pending' },
      { id: 4, title: 'Quarterly Performance', date: '2024-07-25', status: 'Completed' },
      { id: 5, title: 'Yearly Financials', date: '2024-07-30', status: 'In Progress' },
    ];
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
  
        <main className='main-container'>
          <div className='main-title'>
            <h3>REPORTS</h3>
          </div>
  
          <div className='reports-container'>
            <div className='content'>
              <table className="reports-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map(report => (
                    <tr key={report.id}>
                      <td>{report.id}</td>
                      <td>{report.title}</td>
                      <td>{report.date}</td>
                      <td>{report.status}</td>
                      <td>
                        <button className="view-btn">View</button>
                        <button className="download-btn">Download</button>
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
  
  export default Reports;
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='d-flex'>
            
            <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark" style={{ width:'250px'}}> 
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item"> <a href="#home" className="nav-link active" aria-current="page"> <i className="fa fa-home"></i><span className="ms-2">Home</span> </a> </li>
                    <li> <a href="#home" className="nav-link text-white"> <i className="fa fa-dashboard"></i><span className="ms-2">Dashboard</span> </a> </li>
                    <li> <a href="#home" className="nav-link text-white"> <i className="fa fa-first-order"></i><span className="ms-2">My Orders</span> </a> </li>
                    <li> <a href="#home" className="nav-link text-white"> <i className="fa fa-cog"></i><span className="ms-2">Settings</span> </a> </li>
                    <li> <a href="#home" className="nav-link text-white"> <i className="fa fa-bookmark"></i><span className="ms-2">Bookmarks</span> </a> </li>
                </ul>
                <hr />
                <div className="dropdown"> <a href="#home" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> <strong> John W </strong> </a>

                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#home">New project</a></li>
                        <li><a className="dropdown-item" href="#home">Settings</a></li>
                        <li><a className="dropdown-item" href="#home">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#home">Sign out</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-100'>
                
                <h3>Main</h3>
            </div>
        </div>
    );
};

export default Dashboard;
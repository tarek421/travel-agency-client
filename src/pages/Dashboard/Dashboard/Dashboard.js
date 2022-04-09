import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faFirstOrderAlt } from '@fortawesome/free-brands-svg-icons';
import './Dashboard.css';
import logo from '../../../image/logo.png';
import classes from "./Header.module.css";
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
    const { user, admin } = useAuth();
    console.log(user)

    return (
        <div className='d-flex dashboard'>
            <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark" style={{ width: '250px', position:'fixed', overflowY:'scroll' }}><Link className="mx-auto" to="/home"><img src={logo} alt="" /></Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">

                    {
                        user?.email && admin ? " " : <li>
                        <NavLink to="myOrder" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faFirstOrderAlt} />
                            <span className="ms-2">My Orders</span>
                        </NavLink>
                    </li>
                    }

                    {user?.email && admin ? <li>
                        <NavLink to="orders" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faFirstOrderAlt} />
                            <span className="ms-2">Orders</span>
                        </NavLink>
                    </li> : " "}

                    {user.email && admin ? <li className="nav-item">
                        <NavLink to="addDestination" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            <FontAwesomeIcon className='text-danger' icon={faSquarePlus} />
                            <span className="ms-2">Add Destinations</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email && admin ? <li>
                        <NavLink to="makeAdmin" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faSquarePlus} />
                            <span className="ms-2">Make Admin</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email && admin ? <li>
                        <NavLink to="destinaitonList" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faSquarePlus} />
                            <span className="ms-2">Destinaiton List</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email && admin ? <li>
                        <NavLink to="adminList" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faSquarePlus} />
                            <span className="ms-2">Admin List</span>
                        </NavLink>
                    </li> : ""}

                    {
                        user?.email && admin ? '' : <li>
                        <NavLink to="addRivew" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faSquarePlus} />
                            <span className="ms-2">Add Rivew</span>
                        </NavLink>
                    </li>
                    }

                </ul>
                <hr />
                <div className="dropdown"> <a href="#home" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false"> <img src={user.photoURL} alt="" width="32" height="32" className="rounded-circle me-2" /> <strong> John W </strong> </a>

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
            <div style={{width: '100%', marginLeft: '250px', position:'relative'}}>





                <Outlet />




            </div>
        </div>
    );
};

export default Dashboard;
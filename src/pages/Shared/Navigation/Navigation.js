import React from 'react';
import './Navigation.css';
import logo from '../../../image/logo.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    const handleLogOut = () => {
        logout();
    }
    document.addEventListener("DOMContentLoaded", function () {

        window.addEventListener('scroll', function () {

            if (window.scrollY > 200) {
                document.getElementById('navbar_top').classList.add('stricky-fixed');
                document.getElementById('navbar_top').classList.add('fadeInDown');
                // add padding top to show content behind navbar
                let navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.getElementById('navbar_top').classList.remove('stricky-fixed');
                document.getElementById('navbar_top').classList.remove('fadeInDown');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        });
    });
    return (
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark animated">
            <div className="container">
                <a href="#home" className="navbar-brand"><img src={logo} alt="" /></a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">

                        <NavLink to='/home' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                        <NavLink to="/destination" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Destination</NavLink>

                        <NavLink to="/gallery" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>gallery</NavLink>

                        <NavLink to="/blog" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Blog</NavLink>

                        <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About</NavLink>

                        <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Contact</NavLink>

                        <NavLink to="/dashboard/addDestination" className={(navInfo) => (navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link")} tabIndex="-1">Dashboard</NavLink>

                        {
                            user?.email? <b style={{cursor:'pointer'}} onClick={handleLogOut} className="nav-item nav-link" tabIndex="-1">Log Out</b> : <Link to="/login" className="nav-item nav-link" tabIndex="-1">login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;
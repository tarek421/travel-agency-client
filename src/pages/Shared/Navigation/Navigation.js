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


    // When the user scrolls down 200px from the top of the document, slide down the navbar
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.background = "rgb(107 113 150)";
        } else {
            document.getElementById("navbar").style.top = "transparent";
            document.getElementById("navbar").style.background = "transparent";

        }
    }


    function openNav() {
        document.getElementById("mySidenav").style.width = "50%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }



    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark animated">
            <div className="container">
                <Link to="/home" className="navbar-brand"><img src={logo} alt="" /></Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={()=> openNav()}>&#9776;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">

                        <NavLink to='/home' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                        <NavLink to="/destination" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Destination</NavLink>

                        <NavLink to="/blog" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Blog</NavLink>

                        <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About</NavLink>

                        <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Contact</NavLink>

                        <NavLink to="/dashboard/myOrder" className={(navInfo) => (navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link")} tabIndex="-1">Dashboard</NavLink>

                        {
                            user?.email ? <b style={{ cursor: 'pointer' }} onClick={handleLogOut} className="nav-item nav-link" tabIndex="-1">Log Out</b> : <Link to="/login" className="nav-item nav-link" tabIndex="-1">login</Link>
                        }
                    </div>
                </div>


                <div id="mySidenav" class="sidenav">
                    <b className="closebtn" onClick={() => closeNav()}>&times;</b>
                    <NavLink to='/home' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                        <NavLink to="/destination" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Destination</NavLink>

                        <NavLink to="/blog" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Blog</NavLink>

                        <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About</NavLink>

                        <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Contact</NavLink>

                        <NavLink to="/dashboard/myOrder" className={(navInfo) => (navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link")} tabIndex="-1">Dashboard</NavLink>

                        {
                            user?.email ? <b style={{ cursor: 'pointer' }} onClick={handleLogOut} className="nav-item nav-link" tabIndex="-1">Log Out</b> : <Link to="/login" className="nav-item nav-link" tabIndex="-1">login</Link>
                        }
                </div>
            </div>
        </nav>

    );
};

export default Navigation;
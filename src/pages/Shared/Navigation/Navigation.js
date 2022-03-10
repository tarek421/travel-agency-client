import React from 'react';
import './Navigation.css';
import logo from '../../../image/logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
   document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {
	       
			if (window.scrollY > 600) {
				document.getElementById('navbar_top').classList.add('fixed-top');
				// add padding top to show content behind navbar
				let navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
				 // remove padding top from body
				document.body.style.paddingTop = '0';
			} 
		});
	}); 
   return (
      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a href="#home" className="navbar-brand"><img src={logo} alt="" /></a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <Link to='/home' className="nav-item nav-link active">Home</Link>
                    <Link to="/destination" className="nav-item nav-link">Destination</Link>
                    <Link to="/gallery" className="nav-item nav-link">gallery</Link>
                    <Link to="/about" className="nav-item nav-link" tabIndex="-1">About</Link>
                    <Link to="/contact" className="nav-item nav-link" tabIndex="-1">Contact</Link>
                    <Link to="/dashboard" className="nav-item nav-link" tabIndex="-1">Dashboard</Link>
                </div>
            </div>
        </div>
    </nav>

   );
};

export default Navigation;
import React from 'react';
import './Navigation.css';

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
            <a href="#home" className="navbar-brand">Travel Agency</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <a href="#home" className="nav-item nav-link active">Home</a>
                    <a href="#home" className="nav-item nav-link">Profile</a>
                    <a href="#home" className="nav-item nav-link">Messages</a>
                    <a href="#home" className="nav-item nav-link disabled" tabIndex="-1">Reports</a>
                </div>
            </div>
        </div>
    </nav>

   );
};

export default Navigation;
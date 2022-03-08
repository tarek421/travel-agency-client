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
      <nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a href="#home" class="navbar-brand">Brand</a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto">
                    <a href="#home" class="nav-item nav-link active">Home</a>
                    <a href="#home" class="nav-item nav-link">Profile</a>
                    <a href="#home" class="nav-item nav-link">Messages</a>
                    <a href="#home" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                </div>
                {/* <div class="navbar-nav ms-auto">
                    <a href="#home" class="nav-item nav-link">Login</a>
                </div> */}
            </div>
        </div>
    </nav>

   );
};

export default Navigation;
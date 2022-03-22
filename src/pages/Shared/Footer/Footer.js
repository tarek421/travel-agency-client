import { faFacebook, faGooglePlus, faInstagram, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../image/logo.png';
import './Footer.css';

const Footer = () => {
   return (
      <div id="footer">
         <div className="overly">
            <div className="container">
               <div className="row">
                  <div className="col-md-3 col-sm-12 col-xs-12">
                     <a href='#navbar'><img src={logo} alt="" /></a>
                     <br />
                     <br />
                     <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque bibendum efficitur. Etiam mattis, tortor non tincidunt euismod. Cras et maximus magna. Etiam mattis, tortor non tincidunt euismod.</p>
                     <ul className='social-icon d-flex'>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faVimeo} /></li>
                        <li><FontAwesomeIcon icon={faGooglePlus} /></li>
                     </ul>
                  </div>

                  <div className="col-md-3 col-sm-12 col-xs-12 px-5">
                     <h5>Links</h5>
                     <br />
                     <ul className='links'>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Top Tour</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>New Travel</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>How - To</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Tips and Tricks</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Best Tour</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Top Travel</span></p></li>
                     </ul>
                  </div>

                  <div className="col-md-3 col-sm-12 col-xs-12">
                     <h5>Useful Links</h5>
                     <br />
                     <ul className='links'>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>About Us</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Contact Us</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>New Latest</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Gallery</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Destinations</span></p></li>
                        <li><p><FontAwesomeIcon icon={faChevronRight} /> <span>Company</span></p></li>
                     </ul>
                  </div>

                  <div className="col-md-3 col-sm-12 col-xs-12">
                     <h5>LATEST NEWS</h5>
                     <br />
                     <ul className='links'>
                        <li><p><FontAwesomeIcon icon={faCircle} /> <span>Travel Packages around the World</span></p></li>
                        <li><p><FontAwesomeIcon icon={faCircle} /> <span>Best Destinations in the World</span></p></li>
                        <li><p><FontAwesomeIcon icon={faCircle} /> <span>Lonely Planet: Best in Travel 2016</span></p></li>
                        <li><p><FontAwesomeIcon icon={faCircle} /> <span>25 World's Best Places to Visit</span></p></li>
                        <li><p><FontAwesomeIcon icon={faCircle} /> <span>Destinations</span></p></li>
                        <li><p><FontAwesomeIcon icon={faCircle} /> <span>Top Destinations in the World</span></p></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
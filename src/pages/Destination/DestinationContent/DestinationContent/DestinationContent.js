import React from 'react';
import Cart from '../Cart/Cart';
import './DestinationContent.css';
import './socialIcon.css';

const DestinationContent = ({ item }) => {
    const { title, description, rating, duration, open, img1, img2, img3 } = item;

    return (
        <div id="destination-content">
            <div className="container">
                <div className="destination-header">
                <h3 className='mb-3'>Special {title} Tour</h3>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <img className="w-100" src={img1} alt="" />
                            <div id="social-platforms">
                                <b class="btn btn-icon btn-facebook"><i class="fa fa-facebook"></i><span>Facebook</span></b>

                                <b class="btn btn-icon btn-twitter"><i class="fa fa-twitter"></i><span>Twitter</span></b>

                                <b class="btn btn-icon btn-googleplus"><i class="fa fa-google-plus"></i><span>Google+</span></b>

                                <b class="btn btn-icon btn-pinterest"><i class="fa fa-pinterest"></i><span>Pinterest</span></b>

                                <b class="btn btn-icon btn-linkedin"><i class="fa fa-linkedin"></i><span>LinkedIn</span></b>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationContent;
import React from 'react';
import './AboutContent.css';
import image from '../../../image/about-content.png';
import AboutAccordion from '../AboutAccordion/AboutAccordion';


const AboutContent = () => {
    return (
        <div id="about-content" className="my-5 py-5">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="image-box">
                            <img src={image} alt="" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="about-info ms-5">
                            <h1>WHAT WE DO?</h1>
                            <p>In dapibus feugiat metus vitae maximus. Duis ut neque odio. Fusce non augue congue, mattis est in.</p>
                        <AboutAccordion/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
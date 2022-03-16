import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Banner.css';

const Banner = ({ title }) => {
    return (
        <div id='banner'>
            <div className="overly">
            <Navigation/>
                <div className="content">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
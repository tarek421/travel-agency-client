import React from 'react';
import shape from '../../../image/shape.png'
import Destination from '../Destination/Destination';
import './Destinatons.css';
import { destinations } from '../../../Data/Data';

const Destinations = () => {
    return (
        <div id='destination'>
            <div className="container">
                <h1>POPULAR DESTINATIONS</h1>
                <p>Quisque venenatis porta eleifend. Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate.</p>
                <img src={shape} alt="" />
                <div className="row mt-5">
                    {
                        destinations.map(destination => <Destination destination={destination} key={destination.id}></Destination>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Destinations;
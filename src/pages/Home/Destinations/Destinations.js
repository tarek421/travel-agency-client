import React, { useEffect, useState } from 'react';
import shape from '../../../image/shape.png'
import Loader from '../../Shared/Loader/Loader';
import Destination from '../Destination/Destination';
import './Destinatons.css';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        const url = `https://quiet-citadel-61809.herokuapp.com/destinations`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);
    return (
        <div id='destination'>
            <div className="container">
                <h1>POPULAR DESTINATIONS</h1>
                <p>Quisque venenatis porta eleifend. Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate.</p>
                <img src={shape} alt="" />
                <div className="row mt-5">
                    {
                        destinations ? destinations.map(destination => <Destination destination={destination} key={destination._id}></Destination>) : <Loader/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Destinations;
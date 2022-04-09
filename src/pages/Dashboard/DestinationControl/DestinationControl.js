import { Rating } from '@mui/material';
import React, { useState } from 'react';
import './DestinationControl.css';

const DestinationControl = () => {
    const [allDestinations, setAllDestinations] = useState([]);
    console.log(allDestinations)
    fetch('https://quiet-citadel-61809.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setAllDestinations(data))
    return (
        <div id='destination-control'>
            <h2>This is a destination control</h2>
            <table>
                <tr className="text-center">
                    <th style={{width:'30%'}}>Image</th>
                    <th style={{width:'50%'}}>Details</th>
                    <th style={{width:'20%'}}>Action</th>
                </tr>
                {
                    allDestinations.map((destination) => <tr>
                        <td><img src={destination.image1} alt="" /></td>
                        <td>
                            <h2>{destination.title}</h2>
                            <p>{destination.duration}</p>
                            <p>{destination.opening}</p>
                            <p><Rating name="read-only" value={destination.rating} readOnly /></p>
                        </td>
                        <td><button className="btn btn-primary">delete</button></td>
                    </tr>)
                }


            </table>
        </div>
    );
};

export default DestinationControl;
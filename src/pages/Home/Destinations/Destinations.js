import React from 'react';
import shape from '../../../image/shape.png'
import Destination from '../Destination/Destination';
import './Destinatons.css';
import toronto from '../../../image/torento.jpg';
import mumbai from '../../../image/mumbai.jpg';
import sydney from '../../../image/sydney.jpg';
import newyork from '../../../image/newyork.jpg';
import machupichu from '../../../image/machupichu.jpg';
import parish from '../../../image/parish.jpg';

const Destinations = () => {

    const destinations = [
        {
            id: 1,
            title: 'TORONTO',
            rating: 5,
            duration: 'Duration: 2 Hours',
            open: 'Opening: 8Am - 10Am',
            img: `${toronto}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse optio saepe vitae beatae perspiciatis cum, totam obcaecati ducimus dolorem quia. Atque laudantium maxime laborum mollitia itaque deleniti facilis quos sit eius culpa reiciendis fugiat praesentium quisquam voluptatum in minus, autem nulla! Quia quas consequatur soluta? Quasi ut harum sunt!'
        },
        {
            id: 2,
            title: 'TORONTO',
            rating: 5,
            duration: 'Duration: 2 Hours',
            open: 'Opening: 8Am - 10Am',
            img: `${mumbai}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse optio saepe vitae beatae perspiciatis cum, totam obcaecati ducimus dolorem quia. Atque laudantium maxime laborum mollitia itaque deleniti facilis quos sit eius culpa reiciendis fugiat praesentium quisquam voluptatum in minus, autem nulla! Quia quas consequatur soluta? Quasi ut harum sunt!'
        },
        {
            id: 3,
            title: 'sydney',
            rating: 4,
            duration: 'Duration: 2 Hours',
            open: 'Opening: 8Am - 10Am',
            img: `${sydney}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse optio saepe vitae beatae perspiciatis cum, totam obcaecati ducimus dolorem quia. Atque laudantium maxime laborum mollitia itaque deleniti facilis quos sit eius culpa reiciendis fugiat praesentium quisquam voluptatum in minus, autem nulla! Quia quas consequatur soluta? Quasi ut harum sunt!'
        },
        {
            id: 4,
            title: 'NEWYORK',
            rating: 5,
            duration: 'Duration: 2 Hours',
            open: 'Opening: 8Am - 10Am',
            img: `${newyork}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse optio saepe vitae beatae perspiciatis cum, totam obcaecati ducimus dolorem quia. Atque laudantium maxime laborum mollitia itaque deleniti facilis quos sit eius culpa reiciendis fugiat praesentium quisquam voluptatum in minus, autem nulla! Quia quas consequatur soluta? Quasi ut harum sunt!'
        },
        {
            id: 5,
            title: 'MACHU PICHU',
            rating: 4,
            duration: 'Duration: 2 Hours',
            open: 'Opening: 8Am - 10Am',
            img: `${machupichu}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse optio saepe vitae beatae perspiciatis cum, totam obcaecati ducimus dolorem quia. Atque laudantium maxime laborum mollitia itaque deleniti facilis quos sit eius culpa reiciendis fugiat praesentium quisquam voluptatum in minus, autem nulla! Quia quas consequatur soluta? Quasi ut harum sunt!'
        },
        {
            id: 6,
            title: 'PARISH',
            rating: 5,
            duration: 'Duration: 2 Hours',
            open: 'Opening: 8Am - 10Am',
            img: `${parish}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse optio saepe vitae beatae perspiciatis cum, totam obcaecati ducimus dolorem quia. Atque laudantium maxime laborum mollitia itaque deleniti facilis quos sit eius culpa reiciendis fugiat praesentium quisquam voluptatum in minus, autem nulla! Quia quas consequatur soluta? Quasi ut harum sunt!'
        },
    ]
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
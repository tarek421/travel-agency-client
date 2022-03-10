import React from 'react';
import './Destination.css';
import Ratings from './Rating';
import { Fade } from 'react-reveal';


const Destination = ({ destination }) => {
    const { title, img, duration, rating } = destination;
    return (
        <div class="col-md-4 col-sm-12 mt-3">
            <Fade bottom>
                <div class="main-box">
                    <div class="box">
                        <img src={img} alt="" />
                        <div class="box-content">
                            <h6 class="title">{title}</h6>
                            <span class="post">
                                <a href="#home" class="button">BOOK NOW</a>
                            </span>
                        </div>
                    </div>
                    <div class="content mt-3">
                        <h4>{title}</h4>
                        <h6><Ratings rating={rating} /></h6>
                        <hr />
                        <p>{duration}</p>
                        <p>Opening: 8Am - 10Am</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Destination;
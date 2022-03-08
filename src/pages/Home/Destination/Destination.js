import React from 'react';
import './Destination.css';

const Destination = ({destination}) => {
    const {title, img, duration} = destination;
    return (
        <div class="col-md-4 col-sm-12 mt-3">
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
                    <div class="content">
                        <h4>{title}</h4>
                        <h6>rating</h6>
                        <p>{duration}</p>
                        <p>Opening: 8Am - 10Am</p>
                    </div>
                </div>
            </div>
    );
};

export default Destination;
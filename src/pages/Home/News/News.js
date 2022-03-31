import React from 'react';
import './News.css';
import shape from '../../../image/shape.png';
import image1 from '../../../image/news/sweet-ont-the-beach.png';
import image2 from '../../../image/news/cool-place-visit-full-house.png';
import image3 from '../../../image/news/color-aloft-balloon-festivan.png';


const News = () => {
    return (
        <div id="news" className="my-5 py-3">
            <div className="container">
                <div className="text-center">
                    <h2>LATEST NEWS</h2>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                    <img src={shape} alt="" />
                </div>
                <div className="row mt-5 pt-2">
                    <div className=" col-lg-4 col-sm-12">
                        <div className="card">
                            <img src={image1} alt="" />
                            <div className="card-body">
                                <h3>Sweet Love On The Beach</h3>
                                <span>June 06,2016 | By Angelina Jolie</span>
                                <p>Etiam mattis, tortor non tincidunt euismod, ipsum arcu condimentum ligula, at ornare dolor turpis id massa. Ut sit amet augue lobortis lacus scelerisque volutpat.</p>
                                <a href="#home">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h3>Sweet Love On The Beach</h3>
                                <span>June 06,2016 | By Angelina Jolie</span>
                                <p>Etiam mattis, tortor non tincidunt euismod, ipsum arcu condimentum ligula, at ornare dolor turpis id massa. Ut sit amet augue lobortis lacus scelerisque volutpat.</p>
                                <a href="#home">Read more...</a>
                            </div>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                    <div className=" col-lg-4 col-sm-12">
                        <div className="card">
                            <img src={image3} alt="" />
                            <div className="card-body">
                                <h3>Sweet Love On The Beach</h3>
                                <span>June 06,2016 | By Angelina Jolie</span>
                                <p>Etiam mattis, tortor non tincidunt euismod, ipsum arcu condimentum ligula, at ornare dolor turpis id massa. Ut sit amet augue lobortis lacus scelerisque volutpat.</p>
                                <a href="#home">Read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
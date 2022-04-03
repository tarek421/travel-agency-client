import React from 'react';
import Cart from '../Cart/Cart';
import './DestinationContent.css';
import './socialIcon.css';

const DestinationContent = ({ destination }) => {
    const { title, description, image1, image2, image3 } = destination;

    return (
        <div id="destination-content">
            <div className="container">
                <div className="destination-header">
                    <h3 className='mb-3'>Special {title} Tour</h3>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <img className="w-100" src={image1} alt="" />
                            <div id="social-platforms">
                                <b className="btn btn-icon btn-facebook"><i className="fa fa-facebook"></i><span>Facebook</span></b>

                                <b className="btn btn-icon btn-twitter"><i className="fa fa-twitter"></i><span>Twitter</span></b>

                                <b className="btn btn-icon btn-googleplus"><i className="fa fa-google-plus"></i><span>Google+</span></b>

                                <b className="btn btn-icon btn-pinterest"><i className="fa fa-pinterest"></i><span>Pinterest</span></b>

                                <b className="btn btn-icon btn-linkedin"><i className="fa fa-linkedin"></i><span>LinkedIn</span></b>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Cart title={title} />
                        </div>
                    </div>
                </div>

                <div className="destination-body">
                    <div className="row my-5 py-5">
                        <div className="col-md-7 col-sm-12">
                            <div className="image">
                                <img src={image2} alt="" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="content">
                                <h3 className="mb-3">What to See and Do</h3>
                                <p>{description}</p>
                                <p className="mt-3">Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5 pt-5">
                        <div className="col-md-5 col-sm-12">
                            <div className="content">
                                <h3 className="mb-3">How to Get Around</h3>
                                <p>{description}</p>
                                <p className="mt-3">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum.</p>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <div className="image">
                                <img src={image3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationContent;
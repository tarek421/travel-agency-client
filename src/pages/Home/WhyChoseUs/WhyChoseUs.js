import React from 'react';
import './WhyChoseUs.css';
import divider from '../../../image/shape.png';
import icon1 from '../../../image/icon/big-compass.png';
import icon2 from '../../../image/icon/big-lifesaver.png';
import icon3 from '../../../image/icon/big-flag-waving.png';

const WhyChoseUs = () => {
    
    return (
        <div className='text-center' id='why-chose-us'>
            <div className="container">
                <h1>WHY CHOOSE US</h1>
                <p>Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate</p>
                <img src={divider} alt="" />
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <img className="img-icon" src={icon1} alt="" />
                        <h2 className='my-5'>ADVENTURE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>    
                    </div>

                     <div className="col-md-4 col-sm-12 col-xs-12">
                        <img className="img-icon" src={icon2} alt="" />
                        <h2 className='my-5'>FUN & SAFETY</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>    
                    </div> 

                     <div className="col-md-4 col-sm-12 col-xs-12">
                        <img className="img-icon" src={icon3} alt="" />
                        <h2 className='my-5'>IMPECCABLE SERVICE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>    
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;
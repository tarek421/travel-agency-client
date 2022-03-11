import React from 'react';
import Destinations from '../../Home/Destinations/Destinations';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';

const Destination = () => {
    return (
        <div>
            <Banner title="Destinations"/>
            <Destinations/>
            <Footer/>
        </div>
    );
};

export default Destination;
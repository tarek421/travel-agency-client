import React from 'react';
import { useParams } from 'react-router-dom';
import { destinations } from '../../../Data/Data';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import DestinationContent from '../DestinationContent/DestinationContent/DestinationContent';
// import Banner from '../../Shared/Banner/Banner';
// import Footer from '../../Shared/Footer/Footer';
// import DestinationContent from '../DestinationContent/DestinationContent';

const DestinationDetail = () => {
    const { title } = useParams();
    const item = destinations.find(destination => destination.title === title)
    return (
        <div>
            <Banner title={item.title}/>
            <DestinationContent item={item}/>
            <Footer/>
        </div>
    );
};

export default DestinationDetail;
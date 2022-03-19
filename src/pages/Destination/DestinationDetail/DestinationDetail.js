import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { destinations } from '../../../Data/Data';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import DestinationContent from '../DestinationContent/DestinationContent/DestinationContent';
// import Banner from '../../Shared/Banner/Banner';
// import Footer from '../../Shared/Footer/Footer';
// import DestinationContent from '../DestinationContent/DestinationContent';

const DestinationDetail = () => {
    const [destination, setDestination] = useState([]);
    const { title } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/destination?title=${title}`)
        .then(res => res.json())
        .then(data => setDestination(data[0]))
    },[title])

    return (
        <div>
            <Banner title={destination.title} />
            <DestinationContent destination={destination} />
            <Footer />
        </div>
    );
};

export default DestinationDetail;
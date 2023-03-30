import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import DestinationContent from '../DestinationContent/DestinationContent/DestinationContent';


const DestinationDetail = () => {
    const [destination, setDestination] = useState([]);
    const { title } = useParams();
    useEffect(() => {
        fetch(`https://good-puce-sparrow-veil.cyclic.app/destinations/${title}`)
            .then(res => res.json())
            .then(data => setDestination(data[0]))
    }, [title])

    return (
        <div>
            <Banner title={destination.title} />
            <DestinationContent destination={destination} />
            <Footer />
        </div>
    );
};

export default DestinationDetail;
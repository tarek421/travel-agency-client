import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../../Shared/Banner/Banner';
import Footer from '../../../Shared/Footer/Footer';
import CheckOutContent from '../CheckOutContent/CheckOutContent';

const CheckOut = () => {
 const {title} = useParams();

  return (
    <div>
      <Banner title={"Check Out"} />
      <CheckOutContent title={title} />
      <Footer />
    </div>
  );
};

export default CheckOut;
import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import Footer from '../../../Shared/Footer/Footer';
import CheckOutContent from '../CheckOutContent/CheckOutContent';

const CheckOut = ({ vertical = false }) => {


  return (
    <div>
      <Banner title={"Check Out"} />
      <CheckOutContent/>
      <Footer />
    </div>
  );
};

export default CheckOut;
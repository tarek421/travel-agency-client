import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Destinations from '../Destinations/Destinations';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';

const Home = () => {
   return (
      <div>
         <Header/>
         <WhyChoseUs/>
         <Destinations/>
         <Testimonial/>
         <Footer/>
      </div>
   );
};

export default Home;
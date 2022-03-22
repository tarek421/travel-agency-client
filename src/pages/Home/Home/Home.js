import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Destinations from '../Destinations/Destinations';
import Explore from '../Explore/Explore';
import Header from '../Header/Header';
import News from '../News/News';
import Testimonial from '../Testimonial/Testimonial';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';

const Home = () => {
   return (
      <div>
         <Header/>
         <WhyChoseUs/>
         <Destinations/>
         <Testimonial/>
         <Explore/>
         <News/>
         <Footer/>
      </div>
   );
};

export default Home;
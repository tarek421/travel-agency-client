import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import AboutContent from '../AboutContent/AboutContent';
import AboutHeader from '../AboutHeader/AboutHeader';

const About = () => {
    return (
        <div>
            <Banner title={"About"} />
            <AboutHeader/>
            <AboutContent/>
            <Footer/>
        </div>
    );
};

export default About;
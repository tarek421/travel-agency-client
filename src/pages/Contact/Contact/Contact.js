import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import ContactContent from '../ContactContent/ContactContent';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Banner title={'Contact'}/>
            <ContactContent/>
            <Footer/>
        </div>
    );
};

export default Contact;
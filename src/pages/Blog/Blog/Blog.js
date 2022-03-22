import React from 'react';
import News from '../../Home/News/News';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Banner title={"Blog List"} />
            <News/>
            <Footer/>
        </div>
    );
};

export default Blog;
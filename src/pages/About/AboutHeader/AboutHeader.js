import React from 'react';
import './AboutHeader.css';

const AboutHeader = () => {
    return (
        <div id="about-header" className="text-center w-50 m-auto my-5 py-5">
            <div className="container">
                <h1 className="mb-5">ZONE TOUR AMAZING STORY</h1>
                <p className="tagline">Quisque et est ornare, luctus nunc non, vestibulum lacus. Fusce ultrices molestie elit, sit amet finibus enim finibus ac. Fusce ultrices molestie elit, sit amet finibus enim finibus ac.</p>

                <div className="about-info-content">
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ultrices magna et lobortis imperdiet. Etiam nulla lacus, sodales non nulla id, fermentum auctor tortor. Vestibulum a orci at nisi egestas semper. Proin commodo dolor vitae enim rhoncus, ut hendrerit arcu interdum.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { Fade, Roll } from "react-reveal";
import Navigations from '../../Shared/Navigation/Navigation';


const Slider = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        // navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slider">
          <Navigations/>
            <Fade  top cascade>
            <div className="content">
              <Roll left>
                <h1>TAKE <span>YOUR DREAM</span></h1>
              </Roll>
              <h5>Your travel, your life</h5>
            </div>
            </Fade>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider2">
          <Navigations/>
            <Fade top cascade>
            <div className="content">
              <Fade right>
                <h1>ADVENTURE IS <span>WORTHWHILE</span></h1>
              </Fade>
              <h5>For my part, I travel not to go anywhere, I travel for travel shake. The great affeir is to move.</h5>
            </div>
            </Fade>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;

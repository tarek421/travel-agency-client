import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";


const Slider = () => {

  return (
    <div id="slider">
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
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slider">
            <div className="content">
                <h1>TAKE <span>YOUR DREAM</span></h1>
              <h5>Your travel, your life</h5>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider2">
            <div className="content">
                <h1>ADVENTURE IS <span>WORTHWHILE</span></h1>
                <h5>For my part, I travel not to go anywhere, I travel for travel shake. The great affeir is to move.</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;

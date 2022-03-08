import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import banner1 from '../../../image/banner-1.jpg'
// import banner2 from '../../../image/banner-2.jpg'
// import slider3 from '../../../image/slider-3.jpg'

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {

  // const sliders = [
  //   {
  //     title: 'TAKE YOUR DREAM',
  //     content: 'Your travel, your life',
  //     img: `${banner1}`
  //   },
  //   {
  //     title: 'ADVENTURE IS WORTHWHILE',
  //     content: 'For my part, I travel not to go anywhere, I travel for travel shake. The great affeir is to move.',
  //     img: `${banner2}`
  //   }
  // ]

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
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {/* 
        {
          sliders.map(slider => <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>)
        } */}

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



        {/* <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Slider;

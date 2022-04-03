import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Testimonial.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Testimonial = () => {

  const [rivews, setRivews] = useState([]);


  useEffect(() => {
    fetch(`https://quiet-citadel-61809.herokuapp.com/rivews`)
      .then(res => res.json())
      .then(data => setRivews(data))
  }, [])

  const Ratings = ({ star }) => {
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={star}
          readOnly
        />
      </Box>
    )
  }

  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 1;
    }else{
      return 3;
    }
};


  return (
    <div id="Testimonial">
      <div className="ovarly text-center">
        <div className="container">
          <h1 className="text-center w-50 m-auto mb-5">What Our Happy Customers Say About Us</h1>
          <Swiper
            slidesPerView={deviceType()}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >


            {
              rivews.map(rivew => <SwiperSlide key={rivew.id}>
                <div>

                  <p>{rivew.rivew}</p>
                  <img className="person" src={rivew.photo} alt="photos" />
                  <h6 className='mt-3'>{rivew.name}</h6>
                  <Ratings star={rivew.star} />
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
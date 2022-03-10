import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Testimonial.css';
import person1 from '../../../image/person/person-1.jpg';
import person2 from '../../../image/person/person2.jpg';
import person3 from '../../../image/person/person-3.jpg';
import person4 from '../../../image/person/person-4.jpeg';
import person5 from '../../../image/person/person-5.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// import SwiperSlide from './SwiperSlide';

const Testimonial = () => {

  const testimonials = [
    {
      id: 1,
      name: 'Rohan Rana',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur architecto laborum aut? Corporis!',
      image: `${person1}`
    },
    {
      id: 2,
      name: 'Rohan Rana',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur architecto laborum aut? Corporis!',
      image: `${person2}`
    },
    {
      id: 3,
      name: 'Rohan Rana',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur architecto laborum aut?Corporis!',
      image: `${person3}`
    },
    {
      id: 4,
      name: 'Rohan Rana',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur architecto laborum aut?? Corporis!',
      image: `${person4}`
    },
    {
      id: 5,
      name: 'Rohan Rana',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur architecto laborum aut?? Corporis!',
      image: `${person5}`
    }
  ]
  const [value, setValue] = useState(5);

  const Ratings = () =>{
    return(
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          readOnly
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    )
  }

  return (
    <div id="Testimonial">
      <div className="ovarly text-center">
        <div className="container">
          <h1 className="text-center w-50 m-auto mb-5">What Our Happy Customers Say About Us</h1>
          <Swiper
            slidesPerView={3}
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
              testimonials.map(rivew => <SwiperSlide key={rivew.id}>
                <div>
                  
                  <p>{rivew.content}</p>
                  <img className="person" src={rivew.image} alt="" />
                  <h6 className='mt-3'>{rivew.name}</h6>
                  <Ratings/>
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
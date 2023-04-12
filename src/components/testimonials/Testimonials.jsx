import React from 'react'
import './testimonials.css'
import testimonials from './testimonial-array';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Past Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          testimonials.map(({id, avatar, name, review}) => {
            return(
            <SwiperSlide key={id} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="client headshot" />
              </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
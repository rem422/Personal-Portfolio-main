import React from 'react';
import'./testimonial.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


const data = [
  {
    avatar:AVTR1,
    name: 'Tina Snow',
    review: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.    Labore, nemo soluta aspernatur minima laboriosam tempore eveniet. Numquam est dicta iusto, minus minima vel perspiciatis, alias consequuntur nam illo placeat.',
  },
  {
    avatar:AVTR2,
    name: 'Abrahan Moore',
    review: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nemo soluta aspernatur minima laboriosam tempore eveniet. Numquam est dicta iusto, minus minima vel perspiciatis, alias consequuntur nam illo placeat.',
  },
  {
    avatar:AVTR3,
    name: 'Gabriel Malcomn',
    review: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nemo soluta aspernatur minima laboriosam tempore eveniet. Numquam est dicta iusto, minus minima vel perspiciatis, alias consequuntur nam illo placeat.',
  },
  {
    avatar:AVTR4,
    name: 'Aisha Abdul',
    review: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nemo soluta aspernatur minima laboriosam tempore eveniet. Numquam est dicta iusto, minus minima vel perspiciatis, alias consequuntur nam illo placeat.',
  }
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name}/>
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
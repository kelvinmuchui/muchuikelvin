import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data =[
  {
    avatar: AVTR1,
    name: "Naomy Langat",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aut quasi odit, alias porro odio? Magni consequuntur, ea, facere impedit magnam dolor expedita animi fugiat eius nihil ab, consequatur enim."
  },
  {
    avatar: AVTR2,
    name: "Sarah Wakaba",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aut quasi odit, alias porro odio? Magni consequuntur, ea, facere impedit magnam dolor expedita animi fugiat eius nihil ab, consequatur enim."
  },
  {
    avatar: AVTR3,
    name: "Simon Njoroge",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aut quasi odit, alias porro odio? Magni consequuntur, ea, facere impedit magnam dolor expedita animi fugiat eius nihil ab, consequatur enim."
  },
  {
    avatar: AVTR4,
    name: "Appolo Warui ",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aut quasi odit, alias porro odio? Magni consequuntur, ea, facere impedit magnam dolor expedita animi fugiat eius nihil ab, consequatur enim."
  },

]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>
      <Swiper className ="container testimonials_container"
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      
 >
        {
          data.map(({avatar, name, review}, index)=> {
            return(
              <SwiperSlide key = {index}className ="testimonial">
          <div className ="client__avatar">
            <img src ={avatar} alt =""/>
            
           
          </div>
          <h5 className ="client__name">{name}</h5>
          <small className ="client__review">
            {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react';

import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

const Quote = styled.q`
   font-size: 1.3em;
`;

const Author = styled.p`
   position: absolute;
   bottom: 0;
   right: 0;
`;

const Slider = ({ depoimentos }) => {
   return (
      <Swiper
         modules={[Pagination, Autoplay]}
         autoplay={{disableOnInteraction: false}}
         pagination={{ clickable: true }}
         slidesPerView={1}
         style={{maxWidth: '100%', height: '100%'}}
      >
         {depoimentos.map(depoimento => (
            <SwiperSlide key={depoimento.author.slice(0,3)+depoimento.author.slice(0,3)}>
               <Quote>{depoimento.content}</Quote>
               <Author>{depoimento.author}</Author>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Slider;
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React from 'react';
import About1 from '../pages/AboutSection/About1';
import About2 from '../pages/AboutSection/About2';
import About3 from '../pages/AboutSection/About3';
import About4 from '../pages/AboutSection/About4';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function AboutSlider() {
  return (
    <div className="flex flex-col mx-0 sm:mx-auto w-full sm:w-full sm:px-6 lg:px-8">
      <div className="sm:container mx-0 sm:mx-auto mb-14">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
              pagination: { clickable: true },
              navigation: true,
            },
          }}
        >
          <SwiperSlide>
            <About1 />
          </SwiperSlide>
          <SwiperSlide>
            <About2 />
          </SwiperSlide>
          <SwiperSlide>
            <About3 />
          </SwiperSlide>
          <SwiperSlide>
            <About4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from "react";
import Slider from "react-slick";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";



export default function AboutSlider() {
  const settings = {
    dots: true, // 하단에 슬라이더 점 표시
    infinite: true, // 무한 스크롤
    speed: 500, // 슬라이더 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 3000, // 자동 슬라이드 속도
    arrows: true,
     responsive: [
    {
      breakpoint: 768, // 태블릿 이하의 화면에서 설정
      settings: {
        slidesToShow: 1, // 작은 화면에서는 한 슬라이드씩만 표시
        arrows: false, // 모바일에서는 화살표를 비활성화
        dots: true, // 모바일에서는 슬라이더 점을 유지
      },
    },
  ],

  };

  return (
    <div className="flex flex-col mx-0 sm:mx-auto w-full sm:w-full sm:px-6 lg:px-8 ">
      <div className='sm:container mx-0 sm:mx-auto mb-14'>
      <Slider {...settings}>
        <div>
          <About1 />
        </div>
        <div>
          <About2 />
        </div>
        <div>
          <About3 />
        </div>
        <div>
          <About4 />
        </div>
      </Slider>
      </div>

    </div>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import Header from '../Header';
import IOT from '../services/IOT';
import MLAI from '../services/MLAI';
import CyberSec from '../services/CyberSec';

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

const ServicesPage = () => {
  return (
    <div className='h-full'>
      <Header />
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <div>
            <IOT />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <MLAI />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <CyberSec />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesPage;

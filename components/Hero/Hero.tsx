import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import HeroItem from './HeroItem';

function Hero() {

    const heroItems = [
        {
          label1: 'Evinize Yeni Bir',
          label2: 'Soluk',
          label3: 'Getirin.',
          src: '/images/12.png',
          
        },
        {
          label1: 'Renklerin',
          label2: 'Gücünü ',
          label3: 'Keşfedin.',
          src: '/images/14.png',
          
        },
        {
          label1: 'Evinizi',
          label2: 'Yeniden  ',
          label3: 'Keşfedin.',
          src: '/images/15.png',
          
        },
        {
          label1: 'Duvarlarınıza',
          label2: 'Hayat  ',
          label3: 'Verin.',
          src: '/images/18.png',
         
        },
      ];
      
  return (
    <div className='min-h-[550px] md:min-h-[600px] bg-brandDark 
    justify-center items-center text-light flex'>
      <div className='container'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        {heroItems.map((item, index)=>(

          <SwiperSlide key={index}>
         
         <HeroItem
         label1={item.label1}
         label2={item.label2}
         label3={item.label3}
         src={item.src}
         

         ></HeroItem>


          </SwiperSlide>

        ))}
      
       

      </Swiper>

      </div>
      
      
      
      
    </div>
  )
}

export default Hero
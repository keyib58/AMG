'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const GameSlider: React.FC = () => {
  const desktopSlides = [
    { backgroundImage: 'https://res.cloudinary.com/detatjujs/image/upload/v1724644882/e-invite_lisbon_2024_1920x583_wxy8hv.jpg' },
  ];

  const mobileTabletSlides = [
    { backgroundImage: 'https://res.cloudinary.com/detatjujs/image/upload/v1724644952/e-invite_lisbon_2024_800x800_uukl5n.jpg' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const desktopSwiper = document.querySelector('.desktop-swiper') as HTMLElement;
      const mobileTabletSwiper = document.querySelector('.mobile-tablet-swiper') as HTMLElement;
      if (window.innerWidth <= 768) {
        if (desktopSwiper) desktopSwiper.style.display = 'none';
        if (mobileTabletSwiper) {
          mobileTabletSwiper.style.display = 'block';
          mobileTabletSwiper.style.padding = '20px';
          mobileTabletSwiper.style.borderRadius = '15px';
        }
      } else {
        if (desktopSwiper) desktopSwiper.style.display = 'block';
        if (mobileTabletSwiper) {
          mobileTabletSwiper.style.display = 'none';
          mobileTabletSwiper.style.padding = '0';
          mobileTabletSwiper.style.borderRadius = '0';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     <div className='w-full'> 
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Autoplay]}
        draggable={true}
        className="desktop-swiper"
        style={{
          display: 'block',
        }}
      >
        {desktopSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.backgroundImage}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                aspectRatio: '1920 / 583', // Updated aspect ratio for the desktop banner
              }}
            >
              {/* Content inside the desktop slide can be added here */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper for Mobile and Tablet */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Autoplay]}
        draggable={true}
        className="mobile-tablet-swiper mt-4"
        style={{
          display: 'none',
        }}
      >
        {mobileTabletSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.backgroundImage}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                aspectRatio: '1 / 1',
                borderRadius: '15px', // Border radius applied directly here
              }}
            >
              <h1 className="text-white text-2xl Montserrat md:text-4xl lg:text-6xl font-bold"></h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};

export default GameSlider;

'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const HomeSlider: React.FC = () => {
  const desktopSlides = [
    {
      videoUrl: 'https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/1920x583/WebsiteAssets_Classic-CoinDozer_1920x583_5s.mp4',
    },
    {
      videoUrl: 'https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/1920x583/WebsiteAssets_NextGen-InterstellarRun_1920x583_5s.mp4',
    },
    {
      videoUrl: 'https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/1920x583/WebsiteAssets_Slots-SugarBlast_1920x583_5s.mp4',
    },
  ];

  const mobileTabletSlides = [
    {
      videoUrl: 'https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/800x800/WebsiteAssets_Classic-CoinDozer_800x800_5s.mp4',
    },
    {
      videoUrl: 'https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/800x800/WebsiteAssets_NextGen-InterstellarRun_800x800_5s.mp4',
    },
    {
      videoUrl: 'https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/800x800/WebsiteAssets_Slots-SugarBlast_800x800_5s.mp4',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const desktopSwiper = document.querySelector('.desktop-swiper') as HTMLElement;
      const mobileTabletSwiper = document.querySelector('.mobile-tablet-swiper') as HTMLElement;
      if (window.innerWidth <= 768) {
        if (desktopSwiper) desktopSwiper.style.display = 'none';
        if (mobileTabletSwiper) {
          mobileTabletSwiper.style.display = 'block';
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
    <div className='w-full py-4 px-6 lg:p-0'>
      {/* Swiper for Desktop */}
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
        className="desktop-swiper"
        style={{
          display: 'block',
        }}
      >
        {desktopSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex items-center justify-center">
              <video
                src={slide.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1920 / 583',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper for Mobile and Tablet */}
      <Swiper
        spaceBetween={0}  // No space between slides
        slidesPerView={1}  // One slide at a time, full width
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
        className="mobile-tablet-swiper"
        style={{
          display: 'none',
        }}
      >
        {mobileTabletSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex items-center justify-center">
              <video
                src={slide.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1 / 1',
                  borderRadius: '15px',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;

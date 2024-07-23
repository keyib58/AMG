import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './TopSlider.module.css';

const slides = [
  { title: 'Slide 1', backgroundImage: 'https://res.cloudinary.com/detatjujs/image/upload/v1721633628/banner1_xelpef.png' },
  { title: 'Slide 2', backgroundImage: 'https://res.cloudinary.com/detatjujs/image/upload/v1721633628/banner1_xelpef.png' },
  { title: 'Slide 3', backgroundImage: 'https://res.cloudinary.com/detatjujs/image/upload/v1721633628/banner1_xelpef.png' },
];

const GameSlider = () => {
  return (
    
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
        bulletClass: `swiper-pagination-bullet ${styles.swiperPaginationBullet}`,
        bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperPaginationBulletActive}`,
        el: `.${styles.swiperPagination}`,
      }}
      navigation={false}
      modules={[Pagination, Autoplay]}
      draggable={true}
      className={`w-full ${styles.swiperContainer}`}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div
            className="w-full h-72 md:h-96 lg:h-[583px] flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-white text-2xl Montserrat    md:text-4xl lg:text-6xl font-bold">{slide.title}</h1>
          </div>
        </SwiperSlide>
      ))}
      <div className={styles.swiperPagination}></div>
    </Swiper>
  );
};

export default GameSlider;

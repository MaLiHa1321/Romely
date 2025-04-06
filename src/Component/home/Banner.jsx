import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
 // Your custom styles if any

import img1 from '../../assets/Rectangle 26.png';
import img2 from '../../assets/Rectangle 27.png';
import img3 from '../../assets/Sreemongol.png';
import backimg from '../../assets/sundorbon.png';
import { Link } from 'react-router-dom';


const Banner = () => {
  const images = [
    { src: img1, title: "COX'S BAZAR" },
    { src: img2, title: 'SREEMANGAL' },
    { src: img3, title: 'SUNDARBANS' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${backimg})` }} // set this to a general bg image if needed
    >
      {/* Left Text Content */}
      <div className="text-white max-w-lg">
        <h1 className="text-5xl font-bold mb-4">{images[activeIndex].title}</h1>
        <p className="mb-6">
          Cox’s Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its long
          natural sandy beach.
        </p>
       <Link to='/BannerNext'>
       <button className="btn bg-yellow-500 border-none text-black hover:bg-yellow-600">
          Booking →
        </button>
       </Link> 
      </div>

      {/* Right Swiper */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={true}
          modules={[Navigation]}
          className="swiper-container"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 border-4 ${
                  activeIndex === index ? 'border-yellow-500' : 'border-transparent'
                }`}
              >
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
                <div className="p-4 bg-black bg-opacity-70 text-white text-center font-semibold">
                  {img.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="rounded-xl ">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation
        className="custom-swiper"
      >
        <SwiperSlide>
          <div className="slide-content h-[550px] flex justify-center items-center relative">
            <img className="w-full h-full rounded-xl" src={slide3} alt="Slide 1" />
            <h3 className="absolute top-10 inset-x-0 text-center text-3xl  font-bold text-[#901111] ">
              <TypeAnimation
                sequence={[
                  'Warm Hands, Warmer Hearts.', 2000,
                  'Spread Warmth, Share Love', 2000,
                  'Donate Warmth, Change Lives', 2000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
              />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content h-[550px] flex justify-center items-center relative">
            <img className="w-full h-full rounded-xl" src={slide2} alt="Slide 2" />
            <h3 className="absolute top-10 inset-x-0 text-center text-3xl font-bold text-[#007aff]">
              <TypeAnimation
                sequence={[
                  'Spread Warmth, Share Love', 2000,
                  'Donate Warmth, Change Lives', 2000,
                  'Warm Hands, Warmer Hearts.', 2000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
              />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content h-[550px] flex justify-center items-center relative">
            <img className="w-full h-full rounded-xl" src={slide1} alt="Slide 3" />
            <h3 className="absolute top-10 inset-x-0 text-center text-3xl font-bold text-[#901111] ">
              <TypeAnimation
                sequence={[
                  'Donate Warmth, Change Lives', 2000,
                  'Warm Hands, Warmer Hearts.', 2000,
                  'Spread Warmth, Share Love', 2000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
              />
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

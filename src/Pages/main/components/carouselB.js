import { Tilt } from "react-tilt";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../main.css";
import "../swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Default options for Tilt.js

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function CarouselB() {
  return (
    <div className="carousel-wrapper">
      {/* the swiper and it's options//coult potentially move them as a const */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* swiper slide of the swiper carousel */}
        <SwiperSlide>
          <Tilt style={{ transform: `translateZ(0)` }} options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project-title">PS2</p>
              <p className="project-description">
                Creating a miniature city for the energy transition of Delft
              </p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project-title">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project-title">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project-title">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project-title">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

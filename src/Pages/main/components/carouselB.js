import { Tilt } from "react-tilt";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

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
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap ps2">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

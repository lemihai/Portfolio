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
import { Link } from "react-router-dom";

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
        initialSlide={1}
        scale={1}
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
        {/* <SwiperSlide>
          <Link className="link-none" to="/pages/work/grad">
            <Tilt options={defaultOptions}>
              <div className="project-cards-wrap">
                <div className="project-wrap card-bottoma mrc"></div>{" "}
                <div className="project-wrap card-bottomb ps3d"></div>{" "}
                <div className="project-wrap card-front ps2">
                  <p className="project-title">
                    The impact of AI in the process of empathy
                  </p>
                  <p className="project-description">university project</p>
                </div>{" "}
              </div>
            </Tilt>{" "}
          </Link>
        </SwiperSlide> */}
        <SwiperSlide>
          {" "}
          {/* ***** PS2 PROJECT ***** */}
          <Link className="link-none inactive" to="#">
            <Tilt options={defaultOptions}>
              <div className="project-cards-wrap">
                <div className="project-wrap card-bottoma mrc"></div>{" "}
                <div className="project-wrap card-bottomb ps3d"></div>{" "}
                <div className="project-wrap card-front ps2">
                  <p className="project-title">Making Delft Gas - Free</p>
                  <p className="project-description">
                    communicating the energy transition
                  </p>
                </div>{" "}
              </div>
            </Tilt>{" "}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* ***** GRAD PROJECT ***** */}
          <Link className="link-none" to="/pages/work/grad">
            <Tilt options={defaultOptions}>
              <div className="project-cards-wrap">
                <div className="project-wrap card-bottoma grad-main-picb"></div>{" "}
                <div className="project-wrap card-bottomb grad-main-pica"></div>{" "}
                <div className="project-wrap card-front grad">
                  <p className="project-title">
                    The impact of AI in the process of empathy
                  </p>
                </div>{" "}
              </div>
            </Tilt>{" "}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* ***** GRADDESIGN PROJECT ***** */}
          <Link className="link-none inactive" to="#">
            <Tilt options={defaultOptions}>
              <div className="project-cards-wrap">
                <div className="project-wrap card-bottoma mrc"></div>{" "}
                <div className="project-wrap card-bottomb ps3d"></div>{" "}
                <div className="project-wrap card-front graddesign">
                  <p className="project-title">Graduation Project</p>
                  <p className="project-description">
                    AI assistanc concept Design
                  </p>
                </div>{" "}
              </div>
            </Tilt>{" "}
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Link className="link-none" to="/pages/work/grad">
            <Tilt options={defaultOptions}>
              <div className="project-cards-wrap">
                <div className="project-wrap card-bottoma mrc"></div>{" "}
                <div className="project-wrap card-bottomb ps3d"></div>{" "}
                <div className="project-wrap card-front ps2">
                  <p className="project-title">
                    The impact of AI in the process of empathy
                  </p>
                  <p className="project-description">university project</p>
                </div>{" "}
              </div>
            </Tilt>{" "}
          </Link>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

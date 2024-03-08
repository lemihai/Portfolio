import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Tilt } from "react-tilt";
//IMPORT SplideCSS

import "@splidejs/react-splide/css";

import "../main.css";
//TILT SETUP

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

export default function Carousel() {
  const options = {
    type: "loop",
    perPage: 3,
    focus: "center",
    rewind: true,
  };

  // https://codesandbox.io/p/devbox/swiper-react-effect-coverflow-6pxf4v?file=%2Fsrc%2FApp.jsx
  // ADD THIS INSTEAD
  return (
    <div class="carousel-wrapper">
      {/* <h2 class="carousel-title">Check out my best projects</h2> */}
      <Splide aria-label="Images" options={options}>
        <SplideSlide className="carousel">
          <Tilt options={defaultOptions}>
            <div className="project-wrap">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>
        </SplideSlide>

        <SplideSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>
        </SplideSlide>

        <SplideSlide>
          <Tilt options={defaultOptions}>
            <div className="project-wrap">
              <p className="project ">PS2</p>
              <p className="project-description">university project</p>
            </div>{" "}
          </Tilt>
        </SplideSlide>
        {/* 
        <SplideSlide>
          <Tilt options={defaultOptions}>
            <img src="https://via.placeholder.com/400x400?text=4" alt="1" />
          </Tilt>
        </SplideSlide>

        <SplideSlide>
          <Tilt options={defaultOptions}>
            <img src="https://via.placeholder.com/400x400?text=5" alt="1" />
          </Tilt>
        </SplideSlide> */}
      </Splide>
    </div>
  );
}

// Libraries import
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Tilt } from "react-tilt";

//TILT SETUP

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

// COMPONENTS IMPORT

import Nav from "./components/nav";
import Footer from "./components/footer";

// PAGES import
import Work from "./Pages/work";
import Contact from "./Pages/contact";
import About from "./Pages/about";

import hero from "./Images/hero/me.png";

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

export default function App() {
  return (
    <div className="body background-gradient">
      <BrowserRouter>
        <Nav />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/pages/work" element={<Work />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-text">
        <h1>Designer</h1>
        <h1>Developer</h1>
        <h1>Researcher</h1>
      </div>
      <img src={hero} className="hero-image" alt="Portrait of Mihai" />
    </section>
  );
}

function Carousel() {
  const options = {
    type: "loop",
    perPage: 3,
    focus: "center",
  };

  return (
    <div class="carousel-wrapper">
      <Splide aria-label="Images" options={options}>
        <SplideSlide className="carousel">
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <img src="https://via.placeholder.com/400x400?text=1" alt="1" />
          </Tilt>
        </SplideSlide>

        <SplideSlide>
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <img src="https://via.placeholder.com/400x400?text=2" alt="1" />
          </Tilt>
        </SplideSlide>

        <SplideSlide>
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <img src="https://via.placeholder.com/400x400?text=3" alt="1" />
          </Tilt>
        </SplideSlide>
      </Splide>
    </div>
  );
}

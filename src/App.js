// IMPORT ROUTER
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// COMPONENTS IMPORT

import Nav from "./Global/components/nav";
import Footer from "./Global/components/footer";
import Hero from "./Pages/main/components/hero";
import CarouselB from "./Pages/main/components/carouselB";

// PAGES import
import Work from "./Pages/work/work";
import Contact from "./Pages/contact/contact";
import About from "./Pages/about/about";

// STYLES
import "./gradient.scss";

export default function App() {
  return (
    <div className="body background-gradient">
      <GooFilter />
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      <main>
        <BrowserRouter>
          <Nav />

          <Routes>
            {/* <Route path="" element={<Home />} /> */}
            <Route path="/pages/work" element={<Work />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Hero />
        <CarouselB />
        <Footer />
      </main>
    </div>
  );
}

// background gradient

function GooFilter() {
  return (
    <svg class="svg-background" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
}

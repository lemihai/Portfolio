// IMPORT ROUTER
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";

// SMOOTHSCROLL IMPORT

import SmoothScroll from "./Global/SmoothScroll";

// COMPONENTS IMPORT

import Nav from "./Global/components/nav";
import Footer from "./Global/components/footer";

// PAGES import
import Work from "./Pages/work/work";
import Contact from "./Pages/contact/contact";
import About from "./Pages/about/about";
import Main from "./Pages/main/main";
import Ps2 from "./Pages/work/ps2";
import Grad from "./Pages/work/grad";
import GradDesign from "./Pages/work/grad-design";

// STYLES
import "./gradient.scss";
import "./Global/mediaQueries.css";

export default function App() {
  return (
    // PARALLAX PROVIDER
    // BBY ADDING THE PROVIDER WE ADD ANOTHER DIV
    // SOME DIVS NEED THEIR CSS ADJUSTED TO BE VISIBLE ON THE PAGE

    // SOLVED

    // {/* <ParallaxProvider> */}
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
      <main className="main-page">
        {/* <SmoothScroll> */}
        <BrowserRouter>
          <Nav />

          <Routes>
            tggh
            <Route path="/" element={<Main />} />
            <Route path="/pages/main" element={<Main />} />
            <Route path="/pages/work/*" element={<Work />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/work/ps2" element={<Ps2 />}></Route>
            <Route path="/pages/work/grad" element={<Grad />}></Route>
            <Route
              path="/pages/work/grad-design"
              element={<GradDesign />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* </SmoothScroll> */}
      </main>
    </div>
    // {/* </ParallaxProvider> */}
  );
}

// background gradient

function GooFilter() {
  return (
    <svg className="svg-background" xmlns="http://www.w3.org/2000/svg">
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

function ToggleMode() {}

// IMPORT ROUTER
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

// COMPONENTS IMPORT

import Nav from "./Global/components/nav";
import Footer from "./Global/components/footer";
import Hero from "./Pages/main/components/hero";
import Carousel from "./Pages/main/components/carousel";

// PAGES import
import Work from "./Pages/work/work";
import Contact from "./Pages/contact/contact";
import About from "./Pages/about/about";

export default function App() {
  return (
    <div className="body background-gradient">
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
      <Carousel />
      <Footer />
    </div>
  );
}

import Hero from "./components/hero";
import CarouselB from "./components/carouselB";
import About from "./components/about";

import "../../Global/mediaQueries.css";

export default function Main() {
  return (
    <>
      <Hero />
      <About />
      <CarouselB />
    </>
  );
}

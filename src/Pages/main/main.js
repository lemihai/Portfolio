import Hero from "./components/hero";
import CarouselB from "./components/carouselB";

export default function Main() {
  return (
    <>
      <Hero />
      <About />
      <h2 className="highlighted-projects">Highlighted Projects</h2>
      <CarouselB />
    </>
  );
}

function About() {
  return (
    <div className="main-about">
      <h1 className="main-header">Experience</h1>
      <p className="main-text">3+ years</p>
      <h1 className="main-header">Projects</h1>
      <p className="main-text">6+ </p>
      <h1 className="main-header">One word</h1>
      <p className="main-text">Creative </p>
      <h1 className="main-header">Study</h1>
      <p className="main-text">Bachelor's </p>
    </div>
  );
}

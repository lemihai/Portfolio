import hero from "../../../Images/hero/me.png";
import "../main.css";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useLayoutEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // gsap.to(".hero-text-main", { y: -100, duration: 1 });

  return (
    <section className="hero-wrapper">
      <img src={hero} className="hero-image" alt="Portrait of Mihai" />
      <div className="hero-text">
        <h1 className="hero-text-main">Designer</h1>
        <h1 className="hero-text-secondary">Developer</h1>
        <h1 className="hero-text-tertiary">Researcher</h1>
      </div>
    </section>
  );
}

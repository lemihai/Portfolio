import hero from "../../../Images/hero/me.png";
import "../main.css";
import { useParallax } from "react-scroll-parallax";

export default function Hero() {
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

import hero from "../../../Images/hero/me.png";
import "../main.css";
import { useParallax } from "react-scroll-parallax";

export default function Hero() {
  const { ref } = useParallax({ speed: -20 });
  return (
    <section className="hero-wrapper" ref={ref}>
      <div className="hero-text">
        <h1>Designer</h1>
        <h1>Developer</h1>
        <h1>Researcher</h1>
      </div>
      <img src={hero} className="hero-image" alt="Portrait of Mihai" />
    </section>
  );
}

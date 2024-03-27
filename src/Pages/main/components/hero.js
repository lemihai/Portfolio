import hero from "../../../Images/hero/me.webp";
import "../main.css";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <img src={hero} className="hero-image" alt="Portrait of Mihai" />
      <div className="hero-text">
        <h1 className="hero-text-main" data-speed="0.5" data-lag="0.2">
          Designer
        </h1>
        <h1 className="hero-text-secondary">Developer</h1>
        <h1 className="hero-text-tertiary">Researcher</h1>
      </div>
    </section>
  );
}

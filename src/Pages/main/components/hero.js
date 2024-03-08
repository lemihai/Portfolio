import hero from "../../../Images/hero/me.png";

export default function Hero() {
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

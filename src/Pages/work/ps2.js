import "./work.css";
import ps2image from "../../Images/ps2.jpg";
import { useParallax } from "react-scroll-parallax";

export default function Ps2() {
  const parallaxA = useParallax({ speed: 30 });

  return (
    <div className="project-ps2">
      <img
        src={ps2image}
        alt="placeholder"
        className="project-image"
        ref={parallaxA.ref}
      />
      <h1>PS2</h1>
    </div>
  );
}

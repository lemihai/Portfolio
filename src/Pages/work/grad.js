import "./work.css";
import gradimage from "../../Images/grad.jpg";
import { useParallax } from "react-scroll-parallax";

export default function Grad() {
  const parallaxA = useParallax({ speed: 30 });

  return (
    <div className="project-ps2">
      <img
        src={gradimage}
        alt="placeholder"
        className="project-image"
        ref={parallaxA.ref}
      />
      <h1>PS2</h1>
    </div>
  );
}

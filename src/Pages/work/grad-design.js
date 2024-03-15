import "./work.css";
import gradDesign from "../../Images/grad.jpg";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Ps2() {
  const parallaxA = useParallax({ speed: 30 });

  return (
    <div className="project">
      <header className="project-header-wrap">
        <Parallax translateX={["600px", "-1300px"]} easing="easeInQuad">
          <img
            src={gradDesign}
            alt="placeholder"
            className="project-image"
            ref={parallaxA.ref}
          />
        </Parallax>
        <h1 className="project-header" ref={parallaxA.ref}>
          PS2
        </h1>
      </header>
    </div>
  );
}

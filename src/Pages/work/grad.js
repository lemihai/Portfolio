import "./work.css";
import gradimage from "../../Images/grad.png";
import grad from "../../Content/data.json";
// import { Parallax, useParallax } from "react-scroll-parallax";

export default function Grad() {
  // const parallaxHeaderText = useParallax({ speed: 60 });
  // const parallaxImageTop = useParallax({ speed: 20 });

  return (
    <div className="project">
      <header className="project-header-wrap">
        {/* <Parallax translateX={["600px", "-1300px"]} easing="easeInQuad"> */}
        <img
          src={gradimage}
          alt="placeholder"
          className="project-image"
          // ref={parallaxImageTop.ref}
        />
        {/* </Parallax> */}
        <h1
          className="project-header"
          // ref={parallaxHeaderText.ref}
        >
          The impact of AI in the process of empathy
        </h1>
      </header>
      <article className="project-content">
        <header className="project-details">
          <div className="project-header-line"></div>
          <p>test</p>
        </header>
        <header className="project-showcase"></header>
      </article>
    </div>
  );
}

// create functions for each section

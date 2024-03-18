import "./work.css";
import gradimage from "../../Images/grad.png";
import grad from "../../Content/data.json";
// import { Parallax, useParallax } from "react-scroll-parallax";

export default function Grad() {
  // const parallaxHeaderText = useParallax({ speed: 60 });
  // const parallaxImageTop = useParallax({ speed: 20 });

  return (
    <div className="project">
      <ProjectHeader />
      <article className="project-content">
        <ProjectDetails />
        <ProjectShowcase />
      </article>
    </div>
  );
}

// create functions for each section

function ProjectHeader() {
  return (
    <header className="project-header-wrap">
      <img src={gradimage} alt="placeholder" className="project-image" />
      <h1 className="project-header">
        The impact of AI in the process of empathy
      </h1>
    </header>
  );
}

function ProjectDetails() {
  /* finding the text in the JSON */
  const prjchltxt = grad[0]["project-content"]["About"]["text"];

  return (
    <header className="project-details">
      <div className="project-header-wrap">
        <p className="project-header-text">Role</p>
        <div className="project-header-line"></div>
        <p className="project-header-text">UX Researcher</p>
      </div>
      <div className="project-header-wrap">
        <p className="project-header-text">Duration</p>
        <div className="project-header-line"></div>
        <p className="project-header-text">6 months</p>
      </div>
      <div className="project-header-wrap">
        <p className="project-header-text">Client</p>
        <div className="project-header-line"></div>
        <p className="project-header-text">P&PP</p>
      </div>
      <div className="project-header-wrap">
        <p className="project-header-text">Approach</p>
        <div className="project-header-line"></div>
        <p className="project-header-text">Explorative Research</p>
      </div>
      <p className="project-challenge">{prjchltxt}</p>
    </header>
  );
}

function ProjectShowcase() {
  return (
    <header className="project-showcase">
      {/* add pictures */}
      <p className="project-showcase-text">One app concept</p>
      <p className="project-showcase-text">34 participants</p>
      <p className="project-showcase-text">6 research leads</p>
      <p className="project-showcase-text">8 blog posts</p>
      <p className="project-showcase-text">Research </p>
      <p className="project-showcase-text">1 experiment</p>
      <p className="project-showcase-text">500+ data cards</p>
      <p className="project-showcase-text">20+ insigths</p>
      <p className="project-showcase-text">20+ insigths</p>
      <p className="project-showcase-text">20+ insigths</p>
    </header>
  );
}

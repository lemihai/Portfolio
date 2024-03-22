import "./work.css";
import projectList from "../../Content/data.json";
import { Link, Routes, Route } from "react-router-dom";
import { Tilt } from "react-tilt";

// Images

import grad from "../../Images/grad.jpg";
import graddesign from "../../Images/grad.png";
import hci from "../../Images/p3.jpg";
import ps2 from "../../Images/ps2.jpg";

// Pages import for routing

import Ps2 from "./ps2";
import Grad from "./grad";
import GradDesign from "./grad-design";

const defaultOptions = {
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function Work() {
  return (
    <main className="work">
      <div className="work-header">
        <h1 className="work-title">Check out my work</h1>
        <p className="work-text">
          I have design, reseach and programming projects
        </p>
      </div>
      <div className="work-wrap">
        {/* <div className="work-controls-wrap">
          <ButtonFilterProject text="Design" />
          <ButtonFilterProject text="Programming" />
          <ButtonFilterProject text="Research" />
        </div> */}
        {/* <BrowserRouter> */}
        <ProjectList />

        {/* </BrowserRouter> */}
      </div>
    </main>
  );
}

function ProjectList() {
  const projectsLS = projectList.map((project) =>
    // conditionally render if it's a project type
    project.type === "proj" ? (
      <Project
        key={project.id}
        name={project.project_name}
        description={project.description}
        pagelink={project.pagelink}
        image={project.image}
      />
    ) : (
      ""
    )
  );

  return <div className="work-projects-wrap">{projectsLS}</div>;
}

function Project({ name, description, pagelink, image }) {
  console.log(image);
  return (
    <Link to={pagelink}>
      <div className="work-project">
        <img
          className="work-project-image"
          src={require(`../../Images/${image}.jpg`)}
          alt="project title image5"
        ></img>
        <h2 className="work-project-title">{name}</h2>
        <p className="work-project-text">{description}</p>
      </div>
    </Link>
  );
}

function ButtonFilterProject({ text }) {
  return (
    <Tilt options={defaultOptions}>
      <button className="work-button">{text}</button>
    </Tilt>
  );
}

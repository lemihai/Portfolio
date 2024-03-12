import example from "../../Images/grad.jpg";
import "./work.css";
import projectList from "../../Content/data.json";
import { Link, Routes, Route } from "react-router-dom";

export default function Work() {
  return (
    <main className="work">
      <div className="work-header">
        <h1 className="work-title">Check out my work</h1>
        <p className="work-text">
          I have projects in programming, design and research
        </p>
      </div>
      <div className="work-wrap">
        <div className="work-controls-wrap">
          <ButtonFilterProject text="Design" />
          <ButtonFilterProject text="Programming" />
          <ButtonFilterProject text="Research" />
        </div>
        {/* <BrowserRouter> */}
        <ProjectList />
        <Routes>
          <Route path="ps2" element={<Project key={1} />}></Route>
          <Route path="grad" element={<Project key={2} />}></Route>
          <Route path="grad-design" element={<Project key={3} />}></Route>
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </main>
  );
}

function ProjectList() {
  const projectsLS = projectList.map((project) => (
    <Project
      key={project.id}
      name={project.project_name}
      description={project.description}
      pagelink={project.pagelink}
    />
  ));

  return <div className="work-projects-wrap">{projectsLS}</div>;
}

function Project({ name, description, pagelink }) {
  return (
    <Link to={pagelink}>
      <div className="work-project">
        <img
          className="work-project-image"
          src={example}
          alt="project title image5"
        ></img>
        <h2 className="work-project-title">{name}</h2>
        <p className="work-project-text">{description}</p>
      </div>
    </Link>
  );
}

function ButtonFilterProject({ text }) {
  return <button className="work-button">{text}</button>;
}

import "./work.css";
import projectList from "../../Content/data.json";
import { Link } from "react-router-dom";
// import { Tilt } from "react-tilt";

// Images

// import grad from "../../Images/grad.webp";
// import graddesign from "../../Images/graddesign.webp";
// import hci from "../../Images/grad.webp";
// import ps2 from "../../Images/grad.webp";

// Pages import for routing

// import Ps2 from "./ps2";
// import Grad from "./grad";
// import GradDesign from "./grad-design";

// const defaultOptions = {
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };

export default function Work() {
  return (
    <main className="work">
      <div className="work-header">
        <h1 className="work-title">Check out my work</h1>
        <p className="work-text">
          Most of my work consists of UX Design and UX research projects.
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
        active={project.active}
      />
    ) : (
      ""
    )
  );

  return <div className={`work-projects-wrap`}>{projectsLS}</div>;
}

function Project({ name, description, pagelink, image, active }) {
  // console.log(image);

  return (
    <Link to={pagelink}>
      <div className={`work-project ${active === false ? "inactive" : ""}`}>
        <img
          className="work-project-image"
          src={require(`../../Images/${image}.webp`)}
          alt="project title image5"
        ></img>
        <h2 className="work-project-title">
          {name}
          {active === false ? " (COMING SOON)" : ""}
        </h2>
        <p className="work-project-text">{description}</p>
      </div>
    </Link>
  );
}

// function ButtonFilterProject({ text }) {
//   return (
//     <Tilt options={defaultOptions}>
//       <button className="work-button">{text}</button>
//     </Tilt>
//   );
// }

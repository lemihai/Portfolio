import example from "../../Images/grad.jpg";
import "./work.css";

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
        <div className="work-projects-wrap">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </main>
  );
}

function Project() {
  return (
    <div className="work-project">
      <img
        className="work-project-image"
        src={example}
        alt="project title image5"
      ></img>
      <h2 className="work-project-title">Title</h2>
      <p className="work-project-text">Example</p>
    </div>
  );
}

function ButtonFilterProject({ text }) {
  return <button className="work-button">{text}</button>;
}

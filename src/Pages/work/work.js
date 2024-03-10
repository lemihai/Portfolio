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
          <button className="work-button">design</button>
          <button className="work-button">programming</button>
          <button className="work-button">research</button>
          <button className="work-button">Personal</button>
        </div>
        <div className="work-projects-wrap">
          <div className="work-project">test</div>
          <div className="work-project">test</div>
          <div className="work-project">test</div>
          <div className="work-project">test</div>
          <div className="work-project">test</div>
          <div className="work-project">test</div>
        </div>
      </div>
    </main>
  );
}

import placeholder from "../../Images/grad.jpg";
import "./about.css";

export default function About() {
  return (
    <main className="about">
      <header className="about-wrap">
        <img
          className="about-image"
          src={placeholder}
          alt="palceholder image for now"
        ></img>
        <div classname="about-text-wrap">
          <h1 className="about-title">About me</h1>
          <p className="about-text">
            Hi, I am Mihai, an UX designer from Romania with 3 years of
            experience. I love new challenges and I always take on a new project
            with energy and drive. I enjoy exploring people’s behaviour and
            creating experiences that will fit their needs.
          </p>
          <p className="about-text">
            Growing up, I always found myself influenced by both art at
            technology. At one point or another, I was surrounded by one of
            them. Let it be painting when I was in middle school or gaming right
            at the beginning of high school, only to start acting later. I think
            this blending of the two worlds led to my wide range of skills as a
            designer right now.
          </p>
        </div>
      </header>
      <div className="skills-wrap">
        <div className="roles-header">
          <div className="role">UX Designer</div>
          <div className="role">Programmer</div>
          <div className="role">Researcher</div>
        </div>

        <div className="skills-header">
          <div className="skill">Wireframing</div>
          <div className="skill">Prototyping</div>
          <div className="skill">User Testing</div>
          <div className="skill">HTML/CSS</div>
          <div className="skill">Javascript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">Figma</div>
          <div className="skill">Adobe XD</div>
          <div className="skill">Photoshop</div>
        </div>
      </div>
    </main>
  );
}

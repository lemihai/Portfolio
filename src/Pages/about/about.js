import me from "../../Images/about/me (1).png";
import mea from "../../Images/about/me-collage.png";
import meb from "../../Images/about/me (3).jpg";
import mec from "../../Images/about/me (4).jpg";
import med from "../../Images/about/me (5).jpg";
import mee from "../../Images/about/me (1).jpg";
import mef from "../../Images/about/me (8).jpg";
import "./about.css";

export default function About() {
  return (
    <main className="about">
      <header className="about-wrap">
        <div className="image-wrap">
          <img className=" img--grid-a" src={me} alt="me during standup"></img>
          <img className=" img--grid-b" src={mea} alt="me during standup"></img>
          <img className=" img--grid-c" src={meb} alt="me during standup"></img>
          <p className="about-text">
            Hi, I am Mihai, an UX designer from Romania with 3 years of
            experience. I love new challenges and I always take on a new project
            with energy and drive. I enjoy exploring people’s behaviour and
            creating experiences that will fit their needs.
          </p>
          <img
            className=" img--grid-d"
            src={mec}
            alt="me durin</div>g standup"
          ></img>
          <img className=" img--grid-e" src={med} alt="me during standup"></img>
          <img className=" img--grid-f" src={mee} alt="me during standup"></img>
          <img className=" img--grid-g" src={mef} alt="me during standup"></img>
        </div>
      </header>
      <div className="skills-wrap">
        <h2 className="roles-title">Roles</h2>
        <div className="roles-header">
          <h2 className="role">UX Designer</h2>
          <h2 className="role">Developer</h2>
          <h2 className="role">Researcher</h2>
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

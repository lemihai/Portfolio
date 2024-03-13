import me from "../../Images/about/me (1).png";
import mea from "../../Images/about/me-collage.png";
import meb from "../../Images/about/me (3).jpg";
import mec from "../../Images/about/me (4).jpg";
import med from "../../Images/about/me (5).jpg";
import mee from "../../Images/about/me (1).jpg";
import mef from "../../Images/about/me (8).jpg";
import "./about.css";
import { useParallax } from "react-scroll-parallax";

export default function About() {
  const parallaxA = useParallax({ speed: -20 });
  const parallaxB = useParallax({ speed: 15 });
  const parallaxC = useParallax({ speed: -15 });
  const parallaxD = useParallax({ speed: 6 });
  const parallaxE = useParallax({ speed: 10 });
  const parallaxF = useParallax({ speed: 10 });
  const parallaxG = useParallax({ speed: -5 });
  const parallaxH = useParallax({ speed: -10 });

  return (
    <main className="about">
      <header className="about-wrap">
        <div className="image-wrap">
          <img
            className=" img--grid-a"
            src={me}
            alt="me during standup"
            ref={parallaxB.ref}
          ></img>
          <img
            className=" img--grid-b"
            src={mea}
            alt="me during standup"
            ref={parallaxC.ref}
          ></img>
          <img
            className=" img--grid-c"
            src={meb}
            alt="me during standup"
            ref={parallaxD.ref}
          ></img>
          <p className="about-text" ref={parallaxA.ref}>
            Hi, I am Mihai, an UX designer from Romania with 3 years of
            experience. I love new challenges and I always take on a new project
            with energy and drive. I enjoy exploring people’s behaviour and
            creating experiences that will fit their needs.
          </p>
          <img
            className=" img--grid-d"
            src={mec}
            alt="me durin</div>g standup"
            ref={parallaxE.ref}
          ></img>
          <img
            className=" img--grid-e"
            src={med}
            alt="me during standup"
            ref={parallaxF.ref}
          ></img>
          <img
            className=" img--grid-f"
            src={mee}
            alt="me during standup"
            ref={parallaxG.ref}
          ></img>
          <img
            className=" img--grid-g"
            src={mef}
            alt="me during standup"
            ref={parallaxH.ref}
          ></img>
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
          <h3 className="skills-title">Skill list</h3>
          <div className="skills-section">
            <div className="skill">Wireframing</div>
            <div className="skill">Prototyping</div>
            <div className="skill">User Testing</div>
          </div>
          <h3 className="skills-title">Software</h3>
          <div className="skills-section">
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
      </div>
    </main>
  );
}

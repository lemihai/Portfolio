import "./work.css";
import project from "../../Content/data.json";

// IMPORT IMAGES
import gradimage from "../../Images/gradresearch.png";
import gradinterviewa from "../../Images/grad/gra-ph1a (2).jpg";
import gradinterviewb from "../../Images/grad/gra-ph1a (3).jpg";
import gradinterviewc from "../../Images/grad/gra-ph1a (5).jpg";
import gradinterviewd from "../../Images/grad/gra-ph1a (7).jpg";
import gradresearch from "../../Images/grad/grad-deskresearch.png";
import gradresearchques from "../../Images/grad/grad-researchquestions.png";
import gradexperimenta from "../../Images/grad/grad-experimenta.png";

// import { Parallax, useParallax } from "react-scroll-parallax";

export default function Grad() {
  // const parallaxHeaderText = useParallax({ speed: 60 });
  // const parallaxImageTop = useParallax({ speed: 20 });
  const about = project[0]["project-content"]["About"]["text"];
  const challenge = project[0]["project-content"]["Challenge"]["text"];
  const solution = project[0]["project-content"]["Solution"]["text"];
  const deskresearch = project[0]["project-content"]["Desk research"]["text"];
  const focustext = project[0]["project-content"]["Focus"]["text"];
  const focus = project[0]["project-content"]["Focus"]["focus"];
  const rqtext = project[0]["project-content"]["RQ"]["text"];
  const targetg = project[0]["project-content"]["Phase 1"]["targetgroup"];

  // Phase 1 content
  const title = project[0]["project-content"]["Phase 1"]["title"];
  const text = project[0]["project-content"]["Phase 1"]["text"];
  const methoda = project[0]["project-content"]["Phase 1"]["methoda"];
  const methodb = project[0]["project-content"]["Phase 1"]["methodb"];
  const methodc = project[0]["project-content"]["Phase 1"]["methodc"];

  const interviews = project[0]["project-content"]["Interviews"]["text"];

  return (
    <div className="project">
      <ProjectHeader image={gradimage} />
      <article className="project-content">
        {/* header */}
        <ProjectDetails
          role="UX designer"
          duration="6 months"
          client="P&PP"
          approach="Exploratory research"
          about={about}
          challenge={challenge}
          solution={solution}
        />
        {/*  */}
        <h1 className="project-heading-section">Achievements</h1>
        <ProjectShowcase />
        {/* Desk research Section */}
        <TextImage content={deskresearch} image={gradresearch} />
        <ProjectTextVariationA contentA={focustext} contentB={focus} />
        {/* RQ Section */}
        <ProjectText content={rqtext} />
        <img
          src={gradresearchques}
          className="project-researchQuestions-image"
          alt="research questions of graduation project"
        />
        <ProjectText content={targetg} />
        {/* Phase 2 section */}
        <SectionHeader
          title={title}
          text={text}
          methoda={methoda}
          methodb={methodb}
          methodc={methodc}
        />
        <ParallaxImages
          content={interviews}
          imagea={gradinterviewa}
          imageb={gradinterviewb}
          imagec={gradinterviewc}
          imaged={gradinterviewd}
        />
      </article>
    </div>
  );
}

// create functions for each section

function ProjectHeader({ image }) {
  return (
    <header className="project-header-wrap">
      <img src={image} alt="placeholder" className="project-image" />
      <h1 className="project-header">
        The impact of AI in the process of empathy
      </h1>
    </header>
  );
}

function ProjectDetails({
  role,
  duration,
  client,
  approach,
  about,
  challenge,
  solution,
}) {
  /* finding the text in the JSON */
  // add about the company, challenge, solution and context in here

  return (
    <header className="project-details">
      <div className="project-details-wrap-top">
        <div className="project-details-wrap">
          <p className="project-details-title">Role</p>{" "}
          <p className="project-details-text">{role}</p>
        </div>
        <div className="project-details-wrap">
          <p className="project-details-title">Duration</p>{" "}
          <p className="project-details-text">{duration}</p>
        </div>
        <div className="project-details-wrap">
          <p className="project-details-title">Client</p>{" "}
          <p className="project-details-text">{client}</p>
        </div>
        <div className="project-details-wrap">
          <p className="project-details-title">Approach</p>{" "}
          <p className="project-details-text">{approach}</p>
        </div>
      </div>
      <div className="project-header-challenge-wrap">
        <p className="project-details-challenge-text margin-right">{about}</p>
        <p className="project-details-challenge">{challenge}</p>
        <p className="project-details-challenge-text margin-left">{solution}</p>
      </div>
    </header>
  );
}

function ProjectShowcase() {
  return (
    <header className="project-showcase">
      {/* add pictures */}
      {/* MAKE THE STRONG ELEMENT MOVE IN THE PARRALAX FASTER THAN THE REST
      TO GIVE A FEELING OF 3D */}
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color-a">
          ONE{" "}
        </strong>{" "}
        app concept
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color">
          34{" "}
        </strong>
        participants
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color-c">
          6
        </strong>{" "}
        new research leads
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color">
          8{" "}
        </strong>{" "}
        blog posts
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color">
          First{" "}
        </strong>{" "}
        of it's kind research{" "}
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color-b">
          20+{" "}
        </strong>{" "}
        data graphics
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight strong-different-color-b">
          500+{" "}
        </strong>{" "}
        data cards
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight">9 </strong>{" "}
        interviews
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight">900+ </strong>{" "}
        minutes of recorded material
      </p>
      <p className="project-showcase-text">
        <strong className="project-showcase-text-highlight">10+ </strong>{" "}
        insigths
      </p>
    </header>
  );
}

function ProjectText({ content }) {
  return (
    <div className="project-text">
      <p>{content}</p>
    </div>
  );
}

function ProjectTextVariationA({ contentA, contentB }) {
  return (
    <div className="project-text-wrap">
      <p className="project-text-a">{contentA}</p>
      <p className="project-text-aBis">{contentB}</p>
    </div>
  );
}

function HalfPage({ layout, content, image, alt }) {
  return (
    <div className="project-page-split">
      <img
        src={image}
        className={`project-page-image ${
          layout === "right" ? "right" : "left"
        }`}
        alt={alt}
      />
      <p className="project-page-split-text">{content}</p>
    </div>
  );
}

function TextImage({ content, image }) {
  return (
    <div className="project-textimage-wrap">
      <img
        src={image}
        alt="graduation mockup"
        className="project-textimage-image"
      ></img>
      <p className="project-textimage-a">{content}</p>
    </div>
  );
}

function ParallaxImages(props) {
  return (
    <div className="parallax-images-grid">
      <img
        src={props.imagea}
        alt="graduation mockup"
        className="parallax-image imagea"
      ></img>
      <img
        src={props.imageb}
        alt="graduation mockup"
        className="parallax-image imageb"
      ></img>
      <p className="parallax-text">{props.content}</p>
      <img
        src={props.imagec}
        alt="graduation mockup"
        className="parallax-image imagec"
      ></img>
      <img
        src={props.imaged}
        alt="graduation mockup"
        className="parallax-image imaged"
      ></img>
    </div>
  );
}

function SectionHeader(props) {
  return (
    <div className="section-header">
      <p className="section-header-text margin-right">{props.text}</p>
      <h3 className="section-header-title">{props.title}</h3>
      <p className="section-header-text margin-left ">
        Mthodology of this section: <strong>{props.methoda}, </strong>
        <strong>{props.methodb}, </strong> <strong>{props.methodc}</strong>
      </p>
    </div>
  );
}

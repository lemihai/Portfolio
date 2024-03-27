import "./work.css";
import project from "../../Content/data.json";

// IMPORT IMAGES
import gradimage from "../../Images//gradresearch.webp";
import gradinterviewa from "../../Images/grad/gra-ph1a (2).webp";
import gradinterviewb from "../../Images/grad/gra-ph1a (3).webp";
import gradinterviewc from "../../Images/grad/gra-ph1a (5).webp";
import gradinterviewd from "../../Images/grad/gra-ph1a (7).webp";
import gradresearch from "../../Images/grad/grad-deskresearch.webp";
import gradresearchques from "../../Images/grad/grad-researchquestions.png";
import gradexperimenta from "../../Images/grad/grad-experimenta.webp";
import gradsurvey from "../../Images/grad/survey.png";
import usesofAI from "../../Images/grad/usesofai.webp";

// EXP Parallax

import gradExpa from "../../Images/grad/grad-expa.webp";
import gradExpb from "../../Images/grad/grad-expb.webp";
import gradExpc from "../../Images/grad/grad-expc.webp";
import gradExpd from "../../Images/grad/grad-expd.webp";
import gradExpe from "../../Images/grad/grad-expe.webp";
import gradExpf from "../../Images/grad/grad-expf.webp";
import gradExpg from "../../Images/grad/grad-expg.webp";

// IMG analysis

import analysis from "../../Images/grad/gradanalysis.webp";

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
  const titlePhase1 = project[0]["project-content"]["Phase 1"]["title"];
  const textPhase1 = project[0]["project-content"]["Phase 1"]["text"];
  const methoda = project[0]["project-content"]["Phase 1"]["methoda"];
  const methodb = project[0]["project-content"]["Phase 1"]["methodb"];
  const methodc = project[0]["project-content"]["Phase 1"]["methodc"];

  const phase1intro = project[0]["project-content"]["Phase 1"]["intro"];

  const surveys = project[0]["project-content"]["Surveys"]["text"];
  const interviews = project[0]["project-content"]["Interviews"]["text"];
  const aiuse = project[0]["project-content"]["AiUse"]["text"];
  // const surveysTitle = project[0]["project-content"]["Surveys"]["title"];
  // const interviewsTitle = project[0]["project-content"]["Interviews"]["title"];
  // const aiuseTitle = project[0]["project-content"]["AiUse"]["title"];

  const phase1conclusion =
    project[0]["project-content"]["Phase 1"]["conclusion"];

  //Phase 2 content
  const titlePhase2 = project[0]["project-content"]["Phase 2"]["title"];
  const textPhase2 = project[0]["project-content"]["Phase 2"]["text"];
  const methoda2 = project[0]["project-content"]["Phase 2"]["methoda"];

  const phase2intro = project[0]["project-content"]["Phase 2"]["intro"];
  const experiment = project[0]["project-content"]["Experiment"]["text"];
  // const experimentTitle = project[0]["project-content"]["Experiment"]["title"];

  const phase2conclusion =
    project[0]["project-content"]["Phase 2"]["conclusion"];

  // Analysis
  const analysistexta = project[0]["project-content"]["Analysis"]["text-a"];
  const conclusion = project[0]["project-content"]["Conclusion"]["text"];
  // const analysistextc = project[0]["project-content"]["Analysis"]["text-phase2"];

  const insight1 = project[0]["project-content"]["Insights"]["insight1"];
  const insight2 = project[0]["project-content"]["Insights"]["insight2"];
  const insight3 = project[0]["project-content"]["Insights"]["insight3"];
  const insight4 = project[0]["project-content"]["Insights"]["insight4"];
  const insight5 = project[0]["project-content"]["Insights"]["insight5"];
  const insight6 = project[0]["project-content"]["Insights"]["insight6"];
  //Conclusion

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
        {/* Phase 1 section */}
        <SectionHeader
          title={titlePhase1}
          text={textPhase1}
          methoda={methoda}
          methodb={methodb}
          methodc={methodc}
        />
        <ProjectText content={phase1intro} />
        <HalfPage
          layout="right"
          small="yes"
          content={surveys}
          image={gradsurvey}
        />
        <ParallaxImages
          content={interviews}
          imagea={gradinterviewa}
          imageb={gradinterviewb}
          imagec={gradinterviewc}
          imaged={gradinterviewd}
        />
        <HalfPage layout="left" content={aiuse} image={usesofAI} />
        <ProjectText content={phase1conclusion} />
        {/* Phase 2 section */}
        <SectionHeader
          title={titlePhase2}
          text={textPhase2}
          methoda={methoda2}
        />
        <h3 className="quote">
          “A machine can make you feel. But can never understand how you feel”
        </h3>
        <ProjectText content={phase2intro} />

        <ExperimentParallax
          content={experiment}
          imagea={gradExpa}
          imageb={gradExpb}
          imagec={gradExpc}
          imaged={gradExpd}
          imagee={gradExpe}
          imagef={gradExpf}
          imageg={gradExpg}
        />
        <ProjectText content={phase2conclusion} />
        <HalfPage layout="left" content={analysistexta} image={analysis} />
        <h3 className="grad-project-heading-extra">Insights</h3>

        <Insights
          insight1={insight1}
          insight2={insight2}
          insight3={insight3}
          insight4={insight4}
          insight5={insight5}
          insight6={insight6}
        />
        {/* Ending section */}
        <ProjectText content={conclusion} />
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
        <h3 className="project-details-challenge">{challenge}</h3>
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

function HalfPage({ layout, content, image, alt, small }) {
  return (
    <div
      className={`project-page-split ${small === "yes" ? "split-small" : ""}`}
    >
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
        Methodology: <strong>{props.methoda} </strong>
        <strong>{props.methodb}</strong> <strong>{props.methodc}</strong>
      </p>
    </div>
  );
}

function ExperimentParallax(props) {
  return (
    <div className="experiment-parallax">
      <img
        src={props.imagea}
        alt="graduation mockup"
        className="experiment-parallax-image imagea"
      ></img>
      <img
        src={props.imageb}
        alt="graduation mockup"
        className="experiment-parallax-image imageb"
      ></img>
      <img
        src={props.imagec}
        alt="graduation mockup"
        className="experiment-parallax-image imagec"
      ></img>
      <p className="experiment-parallax-text">{props.content}</p>
      <img
        src={props.imaged}
        alt="graduation mockup"
        className="experiment-parallax-image imaged imaged-bis"
      ></img>
      <img
        src={props.imagee}
        alt="graduation mockup"
        className="experiment-parallax-image imagee"
      ></img>
      <img
        src={props.imagef}
        alt="graduation mockup"
        className="experiment-parallax-image imagef"
      ></img>
    </div>
  );
}

function Insights(props) {
  return (
    <div className="insights">
      <p className="insights-text">{props.insight1}</p>
      <p className="insights-text">{props.insight2}</p>
      <p className="insights-text">{props.insight3}</p>
      <p className="insights-text">{props.insight4}</p>
      <p className="insights-text">{props.insight5}</p>
      <p className="insights-text">{props.insight6}</p>
    </div>
  );
}

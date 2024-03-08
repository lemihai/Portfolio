import { ReactComponent as InstaSvg } from "../../Images/icons/instagram.svg";
import { ReactComponent as LinkedInSvg } from "../../Images/icons/linkedin.svg";
import { ReactComponent as MediumSvg } from "../../Images/icons/medium.svg";

export default function Footer() {
  return (
    // work on the footer
    // add the instagram icon and the link to the instagram page
    // the link should open in a new tab
    <footer>
      <a href="https://www.instagram.com/le_mihai/?hl=en">
        <InstaSvg />
        Instagram
      </a>
      <a href="https://www.linkedin.com/in/mihai-butnariu/">
        <LinkedInSvg />
        Linkedin
      </a>
      <a href="https://medium.com/@mihai.alex.butnariu">
        <MediumSvg />
        Medium
      </a>
    </footer>
  );
}

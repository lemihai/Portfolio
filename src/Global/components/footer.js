import insta from "../../Images/icons/instagram.png";
import linkedin from "../../Images/icons/linkedin.png";
import medium from "../../Images/icons/medium.png";

export default function Footer() {
  return (
    // work on the footer
    // add the instagram icon and the link to the instagram page
    // the link should open in a new tab
    <footer>
      <a href="https://www.instagram.com/le_mihai/?hl=en">
        <img src={insta} className="footer-icon" alt="instagram logo" />
        Instagram
      </a>
      <a href="https://www.instagram.com/le_mihai/?hl=en">
        <img src={linkedin} className="footer-icon" alt="instagram logo" />
        Linkedin
      </a>
      <a href="https://medium.com/@mihai.alex.butnariu">
        <img src={medium} className="footer-icon" alt="Medium logo" />
        Medium
      </a>
    </footer>
  );
}

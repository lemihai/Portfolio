export default function App() {
  return (
    <div className="body background-gradient">
      <Nav />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <div>
        <a href="#">home</a>
        <a href="#">work</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    // work on the footer
    // add the instagram icon and the link to the instagram page
    // the link should open in a new tab
    <footer>
      <a href="https://www.instagram.com/le_mihai/?hl=en">
        <img
          height="20px"
          src="../images/icons/instagram.png"
          alt="instagram"
        />
        instagram
      </a>
      <a href="https://www.instagram.com/le_mihai/?hl=en">
        <img height="20px" src="../images/icons/instagram.png" alt="Linkedin" />
        instagram
      </a>
      <a href="https://www.instagram.com/le_mihai/?hl=en">
        <img
          height="20px"
          src="../images/icons/instagram.png"
          alt="instagram"
        />
        instagram
      </a>
    </footer>
  );
}

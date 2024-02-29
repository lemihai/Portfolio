export default function App() {
  return (
    <div className="body background-gradient">
      <Nav />
      <Footer />
    </div>
  );
}

function Nav() {
  return <nav>nav</nav>;
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
    </footer>
  );
}

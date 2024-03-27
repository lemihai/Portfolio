import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import logo from "../../Images/icons/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(true);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <nav className={`${navOpen === true ? "nav-open" : ""}`}>
      <Link to="/pages/main">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      {/* conditionally render with ternary operator the nav open */}
      <div className="nav-flex ">
        <div className="nav-link">
          <Tilt>
            <Link className="nav-btn" to="/pages/main">
              home
            </Link>
          </Tilt>
        </div>
        <div className="nav-link">
          <Tilt>
            <Link className="nav-btn" to="/pages/work">
              work
            </Link>
          </Tilt>
        </div>
        <div className="nav-link">
          <Tilt>
            <Link className="nav-btn" to="/pages/about">
              about
            </Link>
          </Tilt>
        </div>
        <div className="nav-link">
          <Tilt>
            <Link className="nav-btn" to="/pages/contact">
              contact
            </Link>
          </Tilt>
        </div>
      </div>

      <button className="mobile-nav-btn">
        <IoMenu className="icon-menu" onClick={handleNavOpen} name="menu" />
        <IoMdClose
          className="icon-menu"
          onClick={handleNavClose}
          name="close"
        />
      </button>
    </nav>
  );
}

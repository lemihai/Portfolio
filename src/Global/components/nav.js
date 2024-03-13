import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import logo from "../../Images/icons/Logo.png";

export default function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <div className="nav-flex">
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
    </nav>
  );
}

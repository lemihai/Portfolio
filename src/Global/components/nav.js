import { Link } from "react-router-dom";
import logo from "../../Images/icons/Logo.png";

export default function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <div>
        <Link to="/">home</Link>
        <Link to="/pages/work">work</Link>
        <Link to="/pages/about">about</Link>
        <Link to="/pages/contact">contact</Link>
      </div>
    </nav>
  );
}

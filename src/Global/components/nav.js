import { Link } from "react-router-dom";
import { ReactComponent as Svg } from "../../Images/icons/Logo.svg";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="../../Images/icons/Logo.png" alt="logo" />
      </div>
      <div>
        <Link to="/">home</Link>
        <Link to="/pages/work">work</Link>
        <Link to="/pages/about">about</Link>
        <Link to="/pages/contact">contact</Link>
      </div>
    </nav>
  );
}

import Nav from "./components/nav";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Work from "./Pages/work";
import Contact from "./Pages/contact";
import About from "./Pages/about";

export default function App() {
  return (
    <div className="body background-gradient">
      <BrowserRouter>
        <Nav />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/pages/work" element={<Work />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

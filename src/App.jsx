import "./index.css";
import "animate.css/animate.compat.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Exp from "./Components/Exp";
import Head from "./Components/Head";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import All from "./Components/All";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Works from "./Components/Works";

export default function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Now inside Router, so no error

  return (
    <>
      {location.pathname !== "/portfolio/works" && (
        <>
          <Nav />
          <Head />
          <About />
          <Skills />
          <Service />
          <Exp />
          <Contact />
          <All />
        </>
      )}
      <Routes>
        <Route path="/portfolio/works" element={<Works />} />
      </Routes>
    </>
  );
}

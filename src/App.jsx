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
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Works from "./Components/Works";
import { useMouseMove, useValue, animate } from "react-ui-animate";
import ToTop from "./Components/ToTop.jsx";

const CURSOR_SIZE = 40;
export default function App() {
  const x = useValue(0);
  const y = useValue(0);

  useMouseMove(({ mouseX, mouseY }) => {
    x.value = mouseX - CURSOR_SIZE / 2;
    y.value = mouseY - CURSOR_SIZE / 2;
  });
  return (
    <Router>
      <animate.div
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        backgroundColor: "#333",
        borderRadius: "50%",
        translateX: x.value,
        translateY: y.value,
        zIndex: 9999,
        position: "fixed",
        pointerEvents: "none",
        mixBlendMode: "difference",
        
      }}
    />
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
          <ToTop />
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

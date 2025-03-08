import "./index.css";
import "animate.css/animate.compat.css"
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Exp from "./Components/Exp";
import Head from "./Components/Head";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import All from "./Components/All";
export default function App() {
  return (
    <div id="page-top">
      <Nav />
      <Head />
      <About />
      <Skills />
      <Service/>
      <Exp /> 
      <Contact/>
      <All/>
    </div>
  );
}

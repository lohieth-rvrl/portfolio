import { faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ReactTyped } from "react-typed";
// import loki from "/img/lohieth1.jpg";
import loki from "../assets/lohieth1.jpg"
import "../css/orbit.css"

import {
  faPython,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faNodeJs,
  faMdb,
} from "@fortawesome/free-brands-svg-icons";
import { fa0 } from "@fortawesome/free-solid-svg-icons";


// import {hed} from "/img/pro1.png";
export default function Head() {
  return (
    <>
      <div className="container-fluid" id="con">
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          <FontAwesomeIcon icon={faNodeJs} size="2x"/>
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
          <FontAwesomeIcon icon={faReact} size="2x"/>
          </div>
          <div class="snowflake">
            ❄
          </div>
          <div class="snowflake">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>

          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
          <FontAwesomeIcon icon={faHtml5} size="2x"/>
            
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
          <FontAwesomeIcon icon={faCss3} size="2x"/>
            
          </div>

        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 mt-4 px-5" id="he">
            <div className="hee mt-5">
              <div className="name">
                <h1>
                  <o>|</o>Hi I'm
                  <br />
                  <o>|</o>Lohieth Rangasamy
                </h1>
              </div>
              <p>
                
                <b>I'm a <ReactTyped strings={[
                    "FULL STACK DEVELOPER.",
                    "WEB DESIGNER.",
                    "CODER.",
                  ]} typeSpeed={40}
                  backSpeed={50}
                  loop /></b>
                <p>Step into my world of ideas and innovation. Let's create something amazing together!</p>
              </p>
            </div>

          </div>
          <div id="himg" className="mt-5 pt-5">
            {/* <div className="rotating-icons mt-4">
              <i className="icon">|</i>
              <i className="icon"></i>
              <i className="icon">__</i>

              <i className="icon"></i>
              <i className="icon">|</i>

              <i className="icon"></i>
              <i className="icon">__</i>

              <i className="icon"></i>
            </div> */}
            <img src={loki} className="img img-fluid headimg" width="400" alt="Lohieth Rangasamy, Front End Developer & Web Designer" />
          </div>
        </div>
      </div>
    </>
  );
}

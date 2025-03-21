// import { faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { ReactTyped } from "react-typed";
// // import loki from "/img/lohieth1.jpg";
// import loki from "../assets/loki3.png"
// import ScrollAnimation from 'react-animate-on-scroll';
// import "../css/orbit.css"

// import {
//   faPython,
//   faHtml5,
//   faCss3,
//   faJs,
//   faBootstrap,
//   faReact,
//   faNodeJs,
//   faMdb,
// } from "@fortawesome/free-brands-svg-icons";
// import { fa0 } from "@fortawesome/free-solid-svg-icons";


// // import {hed} from "/img/pro1.png";
// export default function Head() {
//   return (
//     <>
//       <div className="container-fluid" id="con">
//         <div class="snowflakes" aria-hidden="true">
//           <div class="snowflake">
//             <FontAwesomeIcon icon={faNodeJs} size="2x" />
//           </div>
//           <div class="snowflake">
//             ❅
//           </div>
//           <div class="snowflake">
//             <FontAwesomeIcon icon={faReact} size="2x" />
//           </div>
//           <div class="snowflake">
//             ❄
//           </div>
//           <div class="snowflake">
//             <FontAwesomeIcon icon={faLinkedin} size="2x" />

//           </div>
//           <div class="snowflake">
//             ❆
//           </div>
//           <div class="snowflake">
//             <FontAwesomeIcon icon={faHtml5} size="2x" />

//           </div>
//           <div class="snowflake">
//             ❅
//           </div>
//           <div class="snowflake">
//             <FontAwesomeIcon icon={faCss3} size="2x" />

//           </div>

//         </div>

//         <div className="row justify-content-center">
//           <div className="col-md-6 mt-4 px-5" id="he">
//             <div className="hee mt-5">
//               <div className="name">
//               <ScrollAnimation animateIn='fadeIn' animateOnce={false}>
//                 <h1>
//                   <o className="blink">|</o>Hi I'm
//                   <br />
//                   <o className="blink">|</o>Lohieth Rangasamy
//                 </h1>
//               </ScrollAnimation>
                
//               </div>
//               <ScrollAnimation animateIn='fadeIn' animateOnce={false}>
//                 <p>
//                 <b>I'm a <ReactTyped strings={[
//                   "FULL STACK DEVELOPER.",
//                   "WEB DESIGNER.",
//                   "CODER.",
//                 ]} typeSpeed={40}
//                   backSpeed={50}
//                   loop /></b>
//                 <p>Step into my world of ideas and innovation. Let's create something amazing together!</p>
//               </p>
//               </ScrollAnimation>
              
//             </div>

//           </div>
//           <div id="himg" className="mt-5 pt-5">
//             <div className="rotating-icons mt-4">
//                 <i className="icon blink"><ScrollAnimation animateIn=' bounceInDown' animateOnce={false}>☺</ScrollAnimation></i>
              
//               <i className="icon"></i>
//               <i className="icon blink"><ScrollAnimation animateIn='bounceInRight' animateOnce={false}>__</ScrollAnimation></i>

//               <i className="icon"></i>
//               <i className="icon blink">|</i>

//               <i className="icon"></i>
//               <i className="icon blink"><ScrollAnimation animateIn='bounceInLeft' animateOnce={false}>__</ScrollAnimation></i>

//               <i className="icon"></i>
//             </div>
//             <img src={loki} className="img img-fluid headimg" width="500" alt="Lohieth Rangasamy, Front End Developer & Web Designer" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





import { faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ReactTyped } from "react-typed";
import loki from "../assets/loki3.webp";
import ScrollAnimation from 'react-animate-on-scroll';
import "../css/orbit.css";

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

export default function Head() {
  return (
    <>
      <div className="container-fluid p-5" id="con">
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
          <div className="snowflake">❅</div>

            <FontAwesomeIcon icon={faNodeJs} size="2x" />
          </div>
          <div className="snowflake">❅</div>
          <div className="snowflake">
            <FontAwesomeIcon icon={faCss3} size="2x" />
          </div>
          <div className="snowflake">
            <FontAwesomeIcon icon={faReact} size="2x" />
          </div>
          <div className="snowflake">❄</div>
          <div className="snowflake">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
          <div className="snowflake">❆</div>
          <div className="snowflake">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
          </div>
          <div className="snowflake">❅</div>
          
          
        </div>

        <div className="row d-flex align-items-center justify-content-center flex-wrap flex-column-reverse flex-md-row">
          <div className="col-md-6 text-center text-md-start pl-5 mt-5" id="he">
            <div className="name">
              <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                <h1>
                  <span className="blink">|</span>Hi I'm
                  <br />
                  <span className="blink">|</span>Lohieth Rangasamy
                </h1>
              </ScrollAnimation>
            </div><br />
            {/* <ScrollAnimation animateIn="none" animateOnce={false}> */}
              <p>
                <b>
                  I'm a <ReactTyped strings={["FULL STACK DEVELOPER.", "WEB DESIGNER.", "CODER."]} typeSpeed={40} backSpeed={50} loop />
                </b>
              </p>
              <p class="d-none d-sm-block">Step into my world of ideas and innovation. Let's create something amazing together!</p>
            {/* </ScrollAnimation> */}
          </div>
          <div id="himg" className="col-md-5 text-center pt-5 m-0">
            <div className="rotating-icons mt-4 d-flex justify-content-evenly">
              <i className="icon blink">
                <ScrollAnimation animateIn="bounceInDown" animateOnce={false}>☺</ScrollAnimation>
              </i>
              <i className="icon"></i>
              <i className="icon blink">
                <ScrollAnimation animateIn="bounceInRight" animateOnce={false}>__</ScrollAnimation>
              </i>
              <i className="icon"></i>
              <i className="icon blink">|</i>
              <i className="icon"></i>
              <i className="icon blink">
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={false}>__</ScrollAnimation>
              </i>
              <i className="icon"></i>
            </div>
            <img src={loki} className="img img-fluid headimg" width="500" alt="Lohieth Rangasamy, Front End Developer & Web Designer" style={{ width: "100%", maxWidth: "500px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

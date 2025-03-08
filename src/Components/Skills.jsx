import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollAnimation from 'react-animate-on-scroll';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
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
import { faC } from "@fortawesome/free-solid-svg-icons/faC";
// import "../index.css";
export default function Skills() {
  return (
    <>
      <div className="container-fluid" id="body2">
        <div className="row">
          <div className="col-lg-12">
            <div
              class="container bg-light pt-5 d-flex justify-content-center "
              id="con2"
            >
              <div class="row align-content-start my-5">
                <div class="col-md-12 d-flex my-4" id="test1">
                  <span className="blink">---- My Shills ----</span>
                  <ScrollAnimation animateIn="bounceInLeft">
                    <div class="box">
                      <h1><ScrollAnimation animateIn=' bounce' animateOnce={false} className="bounce-infinite">
                        <FontAwesomeIcon icon={faCircle} style={{ color: "#2b2b24", }} /></ScrollAnimation>
                        Programming Skills:
                      </h1>
                      <p>
                        "Skilled programmer proficient in a wide array of
                        programming languages and frameworks."
                      </p>
                    </div>
                  </ScrollAnimation>

                </div>
                <div class="col-md-12 px-2" id="test2">
                  <div class="icons d-flex justify-content-center flex-wrap">
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faPython} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">Python</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faC} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">C-Prog</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faHtml5} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">HTML</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faCss3} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">CSS</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faJs} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">
                          Javascript
                        </p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faBootstrap} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">Bootstrap</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faReact} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">React</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faNodeJs} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">Django</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='flipInY'
                      animateOut='flipOutY'>
                      <div className="p-3 rounded-lg shadow">
                        <span className="p-5">
                          <FontAwesomeIcon icon={faMdb} size="4x" />
                        </span>
                        <p className="d-flex justify-content-center">MongoDB</p>
                      </div>
                    </ScrollAnimation>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import "../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from 'react-animate-on-scroll';
import resume from "/img/lohieth (4).pdf";


let sections
export default function About() {
  return (
    <>
      <section id="sec1">
        <div className="container-fluid" id="body1">
          <div className="row">
            <div className="col-lg-12">
              <div
                class="container bg-light d-flex justify-content-center "
                id="con1"
              >
                <div class="row align-content-start g-2 ">
                  <div class="col-lg-6 col-sm-6 d-flex my-5" id="test1">
                    <span className="blink">---- About Me ----</span>
                    <ScrollAnimation animateIn="bounceInLeft">
                      <div class="box">
                        <h1><ScrollAnimation animateIn=' bounce' animateOnce={false} className="bounce-infinite">
                          <FontAwesomeIcon icon={faCircle} style={{ color: "#2b2b24", }} /></ScrollAnimation>Who I Am ?
                        </h1>
                        <p>
                          "Passionate front-end developer dedicated to crafting
                          seamless user experiences and bringing designs to life
                          through code."
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>

                  <div class="col-lg-6 col-sm-6 px-4 py-3 my-5 ab" id="test2">
                    <ScrollAnimation animateIn="fadeInUp">
                      <p>
                        Hi there! I'm Lohieth, a Full-Stack Developer who loves
                        turning design ideas into awesome websites. I'm all about
                        making things look great and work smoothly. From creating
                        user-friendly layouts to adding cool features, I enjoy
                        bringing websites to life. Let's team up and make
                        something amazing together!
                      </p>
                      <ScrollAnimation animateIn='wobble'
                        initiallyVisible={true}>
                        <button class="btn border-2">
                          <a href={resume}>Download CV</a>
                        </button>
                      </ScrollAnimation>

                    </ScrollAnimation>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

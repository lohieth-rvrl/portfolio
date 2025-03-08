import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from 'react-animate-on-scroll';
export default function Service() {
  return (
    <>
      <div className="container-fluid" id="body3">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="container bg-light d-flex justify-content-center py-5" id="con6">
              <div className="row align-content-center-start ">
                <div className="col-md-12 d-flex" id="test1">
                  <span className="blink">---- Service ----</span>
                  <ScrollAnimation animateIn="bounceInLeft">
                    <div className="box">
                      <h1><ScrollAnimation animateIn=' bounce' animateOnce={false} className="bounce-infinite">
                        <FontAwesomeIcon icon={faCircle} style={{ color: "#2b2b24", }} /></ScrollAnimation>
                        Service I Provide:</h1>
                      <p>"Passionate front-end developer dedicated to craftingseamless user experiences and bringing designs to life  through code."</p>
                    </div>
                  </ScrollAnimation>

                </div>
                <div className="col-md-12" id="test2">
                  <div className="d-flex flex-wrap ">
                    <div className="row">
                      <div class=" col-md-6 px-3 py-3">
                        <ScrollAnimation animateIn='fadeIn'>
                          <div className="s1 p-4 shadow">
                            <h6 className="d-flex align-items-center">
                              <div className="rotatein">
                                <FontAwesomeIcon
                                  icon={faCirclePlus}
                                  style={{ color: "#3f4031" }}
                                  size="3x"
                                />{" "}
                              </div>

                              &nbsp;Web Design
                            </h6>
                            <p>
                              "Crafting captivating websites tailored to elevate
                              your online presence and engage your audience
                              effectively."
                            </p>
                          </div>
                        </ScrollAnimation>
                      </div>

                      <div class=" col-md-6 px-3 py-3">
                        <ScrollAnimation animateIn='fadeIn'>
                          <div className="s1 p-4 shadow">
                            <h6 className="d-flex align-items-center">
                              <div className="rotatein">
                                <FontAwesomeIcon
                                  icon={faCirclePlus}
                                  style={{ color: "#3f4031" }}
                                  size="3x"
                                />{" "}
                              </div>
                              &nbsp;Web Development
                            </h6>
                            <p>"Building dynamic websites to boost your online presence and engage your audience seamlessly."
                            </p>
                          </div>
                        </ScrollAnimation>

                      </div>

                      <div class=" col-md-6 px-3 py-3">
                        <ScrollAnimation animateIn='fadeIn'>
                          <div className="s1 p-4 shadow">
                            <h6 className="d-flex align-items-center">
                              <div className="rotatein">
                                <FontAwesomeIcon
                                  icon={faCirclePlus}
                                  style={{ color: "#3f4031" }}
                                  size="3x"
                                />{" "}
                              </div>
                              &nbsp;UI/UX Design
                            </h6>
                            <p>
                              "Designing user-centric interfaces that elevate digital interactions and captivate audiences with seamless experiences."
                            </p>
                          </div>
                        </ScrollAnimation>

                      </div>
                      <div class=" col-md-6 px-3 py-3">
                        <ScrollAnimation animateIn='fadeIn'>
                          <div className="s1 p-4 shadow ">
                            <h6 className="d-flex align-items-center">
                              <div className="rotatein">
                                <FontAwesomeIcon
                                  icon={faCirclePlus}
                                  style={{ color: "#3f4031" }}
                                  size="3x"
                                />{" "}
                              </div>
                              &nbsp;Web &nbsp;Application
                            </h6>
                            <p>
                              "Creating robust web applications to streamline operations and deliver seamless user experiences effortlessly."
                            </p>
                          </div>
                        </ScrollAnimation>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
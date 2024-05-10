import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faPaperPlane,
  faGlobe,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
// import "../Components/newFile.js"
export default function Contact() {
  return (
    <>
      <div className="container-fluid" id="body5">
        <div className="row">
          <div className="col-lg-12">
            <div className="container py-5 bg-light " id="con5">
              <div className="row gap-4">
                <div class="col-md-12 d-flex float-lg-start" id="test1">
                  <span>---- Contact Me ----</span>
                  <div class="box">
                    <h1>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "#2b2b24" }}
                      />{" "}
                      Lets Connect :{")"}
                    </h1>
                    <p>
                      "Contributed to various web development projects,
                      showcasing proficiency in creating <br /> dynamic
                      platforms and innovative digital experiences."
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <form action="#" class=" p-md-5 contact-form" id="contact-form">
                      <div class="row">
                        <div class="col-md-12 d-flex justify-content-between">
                          <div class="col-md-5 form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Your Name"
                              fdprocessedid="mpdmc9"
                            />
                          </div>
                          <div class="col-md-5 form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Your Email"
                              fdprocessedid="om9v4c"
                            />
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Subject"
                              fdprocessedid="d4gtxq"
                            />
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="7"
                              class="ms form-control"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="col-md-12">
                          <div class="form-group d-flex justify-content-center">
                            <input
                              type="submit"
                              value="Send Message"
                              class="tb btn py-3 px-5"
                              fdprocessedid="a73baa"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-6 d-flex p-3">
                    <div class="row">
                      <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center px-2">
                          <FontAwesomeIcon icon={faLocationDot} size="3x" />
                        </div>
                        <div class="text d-flex justify-content-center align-items-center px-2">
                          <p>
                            <span>Address:</span>Bommampatti,<br />namakkal, 637212.
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center px-2">
                          <FontAwesomeIcon icon={faPhone} size="2x" />
                        </div>
                        <div class="text d-flex justify-content-center align-items-center px-2">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">9384931628</a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center px-2">
                          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                        </div>
                        <div class="text d-flex justify-content-center align-items-center px-2">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              lohiethrangasamy@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center px-2">
                          <FontAwesomeIcon icon={faGlobe} size="2x" />
                        </div>
                        <div class="text d-flex align-items-center justify-content-center px-2">
                          <p>
                            <span>Website</span> <a href="#">lohieth.netlify.app</a>
                          </p>
                        </div>
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
  );
}

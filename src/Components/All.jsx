import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function All() {
  return (
    <>
      <div className="container-fluid" id="con7">
        <div className="row">
          <div className="col-md-12">
            <div className="container p-5" id="con71">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 d-flex flex-column p-2">
                  <h3 className="text-center">Links</h3>
                  <br />
                  <ul className="list-unstyled">
                    <li className="p-2">
                      <a href="#head"><FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                        &nbsp;Home</a>
                        
                    </li>
                    <li className="p-2">
                      <a href="#head"><FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                      &nbsp;About</a>
                    </li>
                    <li className="p-2">
                      <a href="#head"><FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                    &nbsp;Skills</a>
                    </li>
                    <li className="p-2">
                      <a href="#head"><FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                      &nbsp;Service</a>
                    </li>
                    <li className="p-2">
                      <a href="#head"><FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                      &nbsp;Projects</a>
                    </li>
                    <li className="p-2">
                      <a href="#head"><FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                    &nbsp;Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex flex-column p-2">
                  <h3 className="text-center">Services</h3>
                  <br />
                  <ul className="list-unstyled">
                    <li className="p-2">
                        <FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                        &nbsp;Web Design
                    </li>
                    <li className="p-2">
                        <FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                        &nbsp;Web Development
                    </li>
                    <li className="p-2">
                        <FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                        &nbsp;Web Aplication
                    </li>
                    <li className="p-2">
                        <FontAwesomeIcon icon={faCircleChevronRight} />{" "}
                        &nbsp;UI/UX Design
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex align-items-center text-center flex-column p-2" id="conall">
                  <h3>Feel Free To Connect !</h3>
                  <br />
                  <p>"Feel free to connect with me if you have any questions, project inquiries, or just want to say hello! I'm always open to new opportunities and collaborations."</p>
                  <br />

                  <span id="none">
                    <a href="https://www.instagram.com/503_lohieth/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://wa.me/9384931628" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x"/></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/lohieth-r/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/lohieth-rvrl"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <p className="my-4 p-2 mb-0 slo">"Rooted in Creativity, Driven by Results."</p>
                </div>
                <div className="col-md-12 d-flex justify-content-center mt-5">
                <p>&copy; {new Date().getFullYear().get} Lohieth Rangasamy. All rights reserved.</p>
                  {/* <p>Copyright &copy;2024 All rights reserved</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

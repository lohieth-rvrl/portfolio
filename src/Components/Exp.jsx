import imgf1 from "/img/pro1.png";
import imgf2 from "/img/pro2.png";
import imgf3 from "/img/pro3.png";
import imgf4 from "/img/Edtech.png";
import fuck from "../assets/fu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons"
export default function Exp() {
  return (
    <>
      <div className="container-fluid" id="body4">
        <div className="row">
          <div className="col-lg-12">
            <div
              class="container bg-light py-5 d-flex justify-content-start "
              id="con3"
            >
              <div class="row align-content-start g-5">
                <div class="col-md-4 d-flex float-lg-start" id="test1">
                  <span className="blink">---- My Works ----</span>
                  <div class="box">
                    <h1><FontAwesomeIcon icon={faCircle} style={{color: "#2b2b24",}} /> See My works:</h1>
                    <p>
                      "Contributed to various web development projects,
                      showcasing proficiency in creating dynamic platforms and
                      innovative digital experiences."
                    </p>
                  </div>
                </div>
                <div class="col-md-8" id="test2">
                  <div class="row">
                    <div class="proj d-flex flex-wrap px-2 py-2">
                      <div class="i1 col-md-6 p-3">
                        <a href="https://www.linkedin.com/posts/lohieth-r_vintagecars-vinthub-classiccarenthusiast-activity-7128222452295340033-L3ME?utm_source=share&utm_medium=member_desktop">
                          <img src={imgf1} className="img img-fluid" alt="" />
                        </a>
                        
                      </div>
                      <div class="i1 col-md-6 p-3">
                        <a href="">
                          <img
                          class="card-img"
                          src={imgf2}
                          className="img img-fluid"
                          alt=""
                        />
                        </a>
                        
                      </div>
                      <div class="i1 col-md-6 p-3">
                        <a href="">
                          <img src={imgf3} className="img img-fluid" alt="" />
                        </a>
                        
                      </div>
                      <div class="i1 col-md-6 p-3">
                      <a href="https://www.linkedin.com/posts/lohieth-r_fullstack-python-vercel-activity-7289626972714897408-mP1B?utm_source=share&utm_medium=member_desktop">
                          <img src={imgf4} className="img img-fluid" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-12" id="con4">
            <div className="contaniner">
              <div className="row">
                <div className="col-lg-8 p-5">
                  <h2>Have A Work</h2><br />
                  <p>"Feel free to connect with me regarding any potential collaborations or opportunities. I'm always open to new projects and partnerships, and I'd love to discuss how we can work together to achieve our goals. Don't hesitate to reach out—I'm just a message away!"</p><br />
                  <button className="btn"><a href="#body5">Contact</a></button>
                </div>
                <div className="col-lg-4 d-flex justify-content-center pb-5" id="con41">
                  <img className="w-50" src={fuck} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

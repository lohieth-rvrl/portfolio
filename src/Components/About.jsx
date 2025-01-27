// import "../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
                    <span>---- About Me ----</span>
                    <div class="box">
                      <h1>
                        <FontAwesomeIcon
                          icon={faCircle}
                          style={{ color: "#2b2b24" }}
                        />{" "}
                        Who I Am?
                      </h1>
                      <p>
                        "Passionate front-end developer dedicated to crafting
                        seamless user experiences and bringing designs to life
                        through code."
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 px-4 my-5" id="test2">
                    <p>
                      Hi there! I'm Lohieth, a front-end developer who loves
                      turning design ideas into awesome websites. I'm all about
                      making things look great and work smoothly. From creating
                      user-friendly layouts to adding cool features, I enjoy
                      bringing websites to life. Let's team up and make
                      something amazing together!
                    </p>
                    <button class="btn border-2">
                      <a href="/src/assets/lohieth.pdf">Download CV</a>
                    </button>
                  </div>
                  {/* <div className="col-lg-12">
                    <motion.div
                      animate={{ x: 500 }}
                      transition={{ duration: Infinity }}
                      onScroll={() => {
                        set;
                      }}
                    >
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nihil dignissimos voluptates neque nam ducimus
                        dolor debitis impedit repudiandae dolore. Rerum fugiat
                        quidem dolorem pariatur asperiores perferendis numquam
                        nisi? Consectetur, soluta!
                      </p>
                    </motion.div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

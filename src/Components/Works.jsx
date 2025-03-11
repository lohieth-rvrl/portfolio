import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.compat.css";
import "../css/Works.css"; // External CSS for additional styling
import imgf1 from "/img/pro1.png";
import imgf2 from "/img/pro2.png";
import imgf3 from "/img/DrawHub.png";
import imgf4 from "/img/Edtech.png";
import imgf5 from "/img/Bmi-calculator.png";
import imgf6 from "/img/subway.png";

export default function Works() {
  const projects = [
    {
      // VINTHUB
      img: imgf1,
      demo: "https://vinthub.netlify.app/",
      github: "https://github.com/lohieth-rvrl/vinthub.com",
      title: "Vinthub - Vintage Car Platform",
    },
    {
      // BrandCycle
      img: imgf2,
      demo: "#",
      github: "https://github.com/lohieth-rvrl/BrandCycle",
      title: "BrandCycle - E-commerce Platform",
    },
    {
      // DrawHub
      img: imgf3,
      demo: "https://drawhub.netlify.app/",
      github: "https://github.com/lohieth-rvrl/",
      title: "DrawHub",
    },
    {
      // Edtech Platform
      img: imgf4,
      demo: "https://ed-tech-alpha-eight.vercel.app/",
      github: "#",
      title: "Edtech Platform",
    },
    {
      // BMI Calculator
      img: imgf5,
      demo: "https://lohieth-rvrl.github.io/BMI_calculator/",
      github: "https://github.com/lohieth-rvrl/BMI_calculator",
      title: "BMI Calculator",
    },
    {
      // Subway
      img: imgf6,
      demo: "https://lohieth-rvrl.github.io/Subway_passanger_count/",
      github: "https://github.com/lohieth-rvrl/Subway_passanger_count",
      title: "Subway-passanger-count",
    },
  ];

  return (
    <div className="container text-center py-5 vh-100">
      <h1>My Works</h1>
      <div className="row">
        <div className="col-md-12 pb-5">
          <p>
            "Here are some of the projects I've worked on. Click on the buttons
            to view the demo or the code."
          </p>
        </div>
        {projects.map((project, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="box p grid-item">
              <ScrollAnimation animateIn="bounce">
              <img src={project.img} alt={project.title} className="work-img" />
              <div className="overlay">
                <h3>{project.title}</h3>
                <div className="buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning d-flex align-items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGlobe} /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark d-flex align-items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faCode} /> GitHub
                  </a>
                </div>

              </div>
            </ScrollAnimation>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

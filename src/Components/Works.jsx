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

export default function Works() {
  alert("still under development !!");
  const projects = [
    {
      img: imgf1,
      demo: "https://vinthub.netlify.app/",
      github: "https://github.com/lohieth-rvrl/vinthub.com",
      title: "Vinthub - Vintage Car Platform",
    },
    {
      img: imgf2,
      demo: "#",
      github: "https://github.com/lohieth-rvrl/BrandCycle",
      title: "Project 2",
    },
    {
      img: imgf3,
      demo: "https://drawhub.netlify.app/",
      github: "#",
      title: "Project 3",
    },
    {
      img: imgf4,
      demo: "https://www.linkedin.com/posts/lohieth-r_fullstack-python-vercel-activity-7289626972714897408-mP1B?utm_source=share&utm_medium=member_desktop",
      github: "#",
      title: "Full-Stack AI Project",
    },
    {
      img: imgf4,
      demo: "https://www.linkedin.com/posts/lohieth-r_fullstack-python-vercel-activity-7289626972714897408-mP1B?utm_source=share&utm_medium=member_desktop",
      github: "#",
      title: "Full-Stack AI Project",
    },
  ];

  return (
    <div className="works-container vh-100">
      <h2 className="section-title">My Works</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="grid-item" key={index}>
            <ScrollAnimation animateIn="fadeIn">
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
        ))}
      </div>
    </div>
  );
}

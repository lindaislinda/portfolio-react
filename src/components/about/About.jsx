import React from "react";
import "./about.css";
import CHAMAELEON from "../../assets/chamaeleon.png";
import ME2 from "../../assets/waving doorway.png";
import ME from "../../assets/space diorama.png";
import { FaGraduationCap } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <h4>
            Hello! I'm Linda Nguyen, a passionate Software Enginner with
            hands-on experience in{" "}
            <span className="purple">
              {" "}
              Cloud Orchestration & Infrastructure{" "}
            </span>
            at <span className="purple_background">
              Dell Technologies
            </span> <span className="purple">Full-Stack Development </span>{" "}
            at <span className="purple_background">Apple</span>{" "}
            and <span className="purple">Cloud & AI, Datacenter Builout </span>{" "}
            at <span className="purple_background">Microsoft.</span>
          </h4>
          <br />
          <h4>
            When I'm not coding, you'll find me pioneering tech workshops with
            SHPE and leading innovative projects with Google's Developer Groups.
          </h4>
          <br />
          <h4>
            I'm also an avid matcha enthusiast and love sharing my passion for
            this delightful beverage! 🍵💚
          </h4>
          <br />
          <div className="about__cards">
            <article className="about__card div1">
              <div className="about__name">
                <FaGraduationCap className="about__icon" />
                <h4>Education</h4>
              </div>
              <h6>Computer Science</h6>
              <h6>University of South Florida</h6>
              <h6>Graduate: May 2025</h6>
              <h6>GPA: 3.97/4.0</h6>
            </article>

            <article className="about__card div2">
              <div className="about__name">
                <BsCodeSlash className="about__icon" />
                <h4>Skills</h4>
              </div>
              <h6>Full-Stack Development</h6>
              <h6>DevOps & Infrastructure</h6>
              <h6>OOP & DSA</h6>
              <h6>Cloud Computing</h6>
            </article>

            {/* <article className='about__card div3'>
              <div className="about__name">
                <FaAward className='about__icon'/>
                <h4>Experience</h4>
              </div>
              <h6>Software Engineer Intern - Dell Technologies</h6>
              <h6>Computer Assistant - Student Government</h6>
              <h6>Tech Lead - Google Developer Student Club</h6>
              <h6>Software Director - Society of Hispanic Professional Engineers</h6>
              <h6>Marketing Director - Society of Hispanic Professional Engineers</h6>
            </article> */}
          </div>
          <br />
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

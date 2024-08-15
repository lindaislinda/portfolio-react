import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="skill_experience">
          <h3>Technical Skills</h3>

          <article className="experience__details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Web Development</h4>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Object-Oriented Programming</h4>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Data Structures & Algorithms</h4>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Development & Operations</h4>
          </article>
        </div>

        <div className="tech_experience">
          <h3>Web & Database</h3>
          <div className="experience__content2">
            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>HTML/CSS</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>REST API</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>SQL & noSQL</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>GraphQL</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Flask</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Bootstrap</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Node.js</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Express.js</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>React</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Angular</h4>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3 className="white">Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>C/C++/C#</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Java</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>TypeScript</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>JavaScript</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Python</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Swift</h4>
            </article>
          </div>
        </div>
        {/* End of Programming Languages */}

        <div className="experience__backend">
          <h3>DevOps & System</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Docker</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Kubernetes</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>RabbitMQ</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>VM</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>Linux</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="icons" />
              <h4>AWS/Azure</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

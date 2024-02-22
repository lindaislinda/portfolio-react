import React from "react";
import "./portfolio.css";
import IMAGE1 from "../../assets/image1.png";
import IMAGE2 from "../../assets/ai-nomad-shellhacks.png";
import IMAGE3 from "../../assets/image3.png";
import IMAGE4 from "../../assets/hackabull2024.png";
import IMAGE5 from "../../assets/image5.png";

const data = [
  {
    id: 4,
    image: IMAGE4,
    title: "Tampa's Largest Hackathon",
    github: "https://github.com/berichonq/hackabull",
    demo: "https://www.hackabull.org/",
  },
  {
    id: 1,
    image: IMAGE1,
    title: "Personal Blog Website",
    github: "https://github.com/lindaislinda/Personal-Blog",
    demo: "https://linda-s-personal-blog.herokuapp.com/",
  },
  {
    id: 2,
    image: IMAGE2,
    title: "AI Nomad Navigator",
    github: "https://github.com/moyo-ayy/trip-planner",
    demo: "https://drive.google.com/file/d/1jpr5QIKTDHtXke0m9EK2IQe1I9WWLib3/view?usp=sharing",
  },
  {
    id: 3,
    image: IMAGE2,
    title: "Coffee Shop Landing Page",
    github: "https://github.com/lindaislinda/Coffee-shop-Landing-Page",
    demo: "https://lindaislinda.github.io/Coffee-shop-Landing-Page/",
  },

  {
    id: 5,
    image: IMAGE5,
    title: "Drum Kit",
    github: "https://github.com/lindaislinda/Drum-Kit",
    demo: "https://lindaislinda.github.io/Drum-Kit/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://circuitdigest.com/sites/default/files/projectimage_mic/Obstacle%20Avoiding-Robot-using-Arduino-and-Ultrasonic-Sensor.jpg" />
          </div>
          <h3>Arduino Obstacle-Avoiding Robot Project</h3>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

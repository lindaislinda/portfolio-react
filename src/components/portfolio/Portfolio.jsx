import React from 'react'
import './portfolio.css'
import IMAGE1 from "../../assets/image1.png"
import IMAGE2 from "../../assets/image2.png"
import IMAGE3 from "../../assets/image3.png"
import IMAGE4 from "../../assets/image4.png"
import IMAGE5 from "../../assets/image5.png"


const data = [
  {
    id: 4,
    image: IMAGE4,
    title: "USF Course Tracking",
    github: "https://github.com/lindaislinda/",
    demo: "https://bullscourses.com/"
  },
  {
    id: 1,
    image: IMAGE1,
    title: "Personal Blog Website",
    github: "https://github.com/lindaislinda/Personal-Blog",
    demo: "https://linda-s-personal-blog.herokuapp.com/"
  },
  {
    id: 2,
    image: IMAGE2,
    title: "Coffee Shop Landing Page",
    github: "https://github.com/lindaislinda/Coffee-shop-Landing-Page",
    demo: "https://lindaislinda.github.io/Coffee-shop-Landing-Page/"
  },
  {
    id: 3,
    image: IMAGE3,
    title: "Dice Game",
    github: "https://github.com/lindaislinda/Dice-Game",
    demo: "https://lindaislinda.github.io/Dice-Game/"
  },
  
  {
    id: 5,
    image: IMAGE5,
    title: "Drum Kit",
    github: "https://github.com/lindaislinda/Drum-Kit",
    demo: "https://lindaislinda.github.io/Drum-Kit/"
  },
  
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src= {image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target = '_blank'>Github</a>
                  <a href={demo} className='btn btn-primary'target = '_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src= "https://circuitdigest.com/sites/default/files/projectimage_mic/Obstacle%20Avoiding-Robot-using-Arduino-and-Ultrasonic-Sensor.jpg" />
          </div>
          <h3>Arduino Obstacle-Avoiding Robot Project</h3>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio
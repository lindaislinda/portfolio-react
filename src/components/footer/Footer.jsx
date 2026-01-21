import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import WAVE from '../../assets/wave_footer.svg'

const Footer = () => {
  return (
    <footer>
    <div className='flex__container'>
      <div>
        <embed src={WAVE}></embed>
      </div>
      <div>
        <a href="#" className='footer__logo'>LINDA NGUYEN</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Leadership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/lindaislinda/"><BsLinkedin/></a>
          <a href="https://github.com/lindaislinda"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
          <small>Copyright © Linda Nguyen. All rights reserved.</small>
        </div>
      </div>
    </div>
      
    </footer>
  )
}

export default Footer
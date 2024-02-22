import React from 'react'
import './header.css'
import CTA from './CTA'
import CHAMAELEON from '../../assets/chamaeleon.png'
import ME from '../../assets/hi.png'
import ME2 from '../../assets/heart shaped planet.png'
import WAVE from '../../assets/wave (4).svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='grid__container'>
          <div>
            <h5>Hello I'm</h5>
            <h1>Linda Nguyen</h1>
            <p className='text-light' contenteditable="true">Software Engineer</p>
            <CTA/>
          </div>
          <div>
            <img className='me' src={ME2} alt="" />
          </div>
        </div>
        <HeaderSocials/>
        <a href="#about" className='scroll__down'>Scroll Down</a>
        
      </div>
      <embed src={WAVE}></embed>
    </header>
  
  )
}

export default Header
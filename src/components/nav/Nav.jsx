import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiCodeBlock} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {useState, useEffect} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const home = document.querySelector('#home');
      const about = document.querySelector('#about');
      const experience = document.querySelector('#experience');
      const services = document.querySelector('#portfolio');
      const testimonials = document.querySelector('#testimonials');

      if (testimonials.getBoundingClientRect().top <= window.innerHeight) {
        setActiveNav('#testimonials');
      } else if (services.getBoundingClientRect().top <= window.innerHeight) {
        setActiveNav('#portfolio');
      } else if (experience.getBoundingClientRect().top <= window.innerHeight) {
        setActiveNav('#experience');
      } else if (about.getBoundingClientRect().top <= window.innerHeight) {
        setActiveNav('#about');
      } else if (home.getBoundingClientRect().top <= window.innerHeight) {
        setActiveNav('#');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BiCodeBlock/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#testimonials" onClick = {() => setActiveNav('#testimonials')} className = {activeNav === '#testimonials' ? 'active' : ''}><MdWorkOutline/></a>
    </nav>
  )
}

export default Nav
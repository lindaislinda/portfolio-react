import './header.css'
import CTA from './CTA'
import ME2 from '../../assets/heart shaped planet.png'
import WAVE from '../../assets/wave (4).svg'
import HeaderSocials from './HeaderSocials'
import TypingEffect from './TypeEffect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='grid__container'>
          <div>
            <h4>Hello World! I'm</h4>
            <h1>Linda Nguyen</h1>
            <TypingEffect/>
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
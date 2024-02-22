import React from 'react'
import Resume from '../../assets/Linda-Resume.pdf'
import {FiDownload} from 'react-icons/fi'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className='btn'><FiDownload/>  Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
    </div>
  )
}

export default CTA

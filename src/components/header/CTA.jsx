import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download class='btn'>Download CV</a>
        <a href='#contact' class='btn btn-primary' >Let's Connect</a>
    </div>
  )
}

export default CTA
import React from 'react'
import CV from '../../assets/CV.pdf'

// Define a functional component CTA (Call-to-Action)
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download class='btn'>Download CV</a>
        <a href='#contact' class='btn btn-primary' >Let's Connect</a>
    </div>
  )
}

export default CTA
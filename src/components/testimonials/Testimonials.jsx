import React from 'react'
import './testimonials.css'
import avatar00 from '../../assets/images/avatar00.JPG'
import avatar01 from '../../assets/images/avatar01.JPG'
import avatar02 from '../../assets/images/avatar02.JPG'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Past Client</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={avatar00} alt="client headshot" />
            <h5 className='client__name'>Scott</h5>
            <small className="client__review">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, quas.</small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
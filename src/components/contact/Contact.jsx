import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {AiFillMessage} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>test@test.com</h5>
            <a href="mailto:test@test.com">Send An Email</a>
          </article>
          <article className="contact__option">
            <AiFillMessage className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/eliterkeurst" target='_blank'>Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+19047750496</h5>
            <a href="https://api.whatsapp.com/send?phone=+19047750496" target='_blank'>Send A Text</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
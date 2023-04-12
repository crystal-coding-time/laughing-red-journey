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
            <TfiEmail />
            <h4>Email</h4>
            <h5>test@test.com</h5>
            <a href="mailto:test@test.com">Send An Email</a>
          </article>
          <article className="contact__option">
            <AiFillMessage />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/eliterkeurst" target='_blank'>Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+19047750496</h5>
            <a href="https://api.whatsapp.com/send?phone=+19047750496">Send A Text</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
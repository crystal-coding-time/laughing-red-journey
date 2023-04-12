import React from 'react';
import './contact.css';
import { TfiEmail } from 'react-icons/tfi';
import { AiFillMessage } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';  // Importing the useRef hook
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();  // Creating a ref for the form

  // Function to send an email
  const sendEmail = (e) => {
    e.preventDefault();  // Preventing the default form submission

    // Using EmailJS to send the form data as an email - this prevents the user from inputting a invalid email address
    emailjs.sendForm('service_j0md2q7', 'template_wmqxrpj', form.current, '8m2StiBjqeQZ0EZ4Z')
      .then((result) => {
          console.log(result.text);  // Logging the result of the email sending process
      }, (error) => {
          console.log(error.text);  // Logging the error, if any
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Contact options section */}
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
            <a href="https://m.me/eliterkeurst" target='_blank' rel="noopener noreferrer">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+19047750496</h5>
            <a href="https://api.whatsapp.com/send?phone=+19047750496" target='_blank' rel="noopener noreferrer">Send A Text</a>
          </article>
        </div>
        {/* End of contact options section */}

        {/* Contact form section */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {/* End of contact form section */}
      </div>
    </section>
  )
}

export default Contact;

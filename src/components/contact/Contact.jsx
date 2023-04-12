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
  
    if (!form.current.checkValidity()) {
      alert('Please fill in all required fields');
      return;
    }
  
    // Using EmailJS to send the form data as an email - this prevents the user from inputting an invalid email address
    emailjs.sendForm('service_j0md2q7', 'template_wmqxrpj', form.current, '8m2StiBjqeQZ0EZ4Z')
      .then((result) => {
          console.log(result.text);  // Logging the result of the email sending process
      }, (error) => {
          console.log(error.text);  // Logging the error, if any
      });
  
    // Resetting the form
    e.target.reset();
  
  };

  // Function to validate the form fields
  const validateField = (e) => {
    if (e.target.value === '') {
      e.target.setCustomValidity('This field is required');
    } else {
      e.target.setCustomValidity('');
    }
  }

  // Function to validate the email field
  const validateEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      e.target.setCustomValidity('Please enter a valid email address');
    } else {
      e.target.setCustomValidity('');
    }
  }
  
  
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
          <input type="text" name='name' placeholder='Your Full Name' onBlur={validateField} required/>
          <input type="email" name='email' placeholder='Your Email' onBlur={validateField} required/>
          <textarea name="message" rows="7" placeholder='Your Message' onBlur={validateField} required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {/* End of contact form section */}
      </div>
    </section>
  )
}

export default Contact;

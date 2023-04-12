import React from 'react'
import './footer.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><AiTwotoneHome /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/eli-ter-keurst-bb406b139' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/crystal-coding-time' target='_blank'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Eli Ter Keurst</small>
      </div>
    </footer>
  )
}

export default Footer
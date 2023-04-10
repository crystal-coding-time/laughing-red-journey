import React from 'react'
import './about.css'
import ME from '../../assets/images/selfie02.jpg'
import {BsCheckCircle} from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
import {AiOutlineFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>All About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="Image of developer" />
          </div>  
        </div>

        {/* Below are the about section cards */}
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsCheckCircle className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>
            <article className='about__card'>
              <BiWorld className='about__icon'/>
              <h5>Clients</h5>
              <small>Served Within US, UK, & EU</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>Participated In 30+ Collaborative Projects</small>
            </article>
          </div>

          <p>As an experienced full-stack web developer, I am dedicated to producing high-quality, efficient, and user-friendly software solutions. With a proven track record of delivering outstanding work, I am confident in my ability to excel in any project or role I undertake. I am excited about the opportunity to work in a challenging and dynamic environment, leveraging my skills to develop cutting-edge solutions and drive your organization's growth.</p>

          <a href="#contact" className='btn btn-prim'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About
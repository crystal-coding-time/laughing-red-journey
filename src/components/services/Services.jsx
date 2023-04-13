import React from 'react'
import './services.css'
import {FaCheck} from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Below is for the UI/UX Design section */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Creating wireframes and mockups for websites or mobile apps</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Conducting user research and usability testing to inform design decisions</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Collaborating with developers to ensure that designs are feasible and optimized for performance</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Creating wireframes and mockups for websites or mobile apps</p>
            </li>
          </ul>
        </article>
        {/* Below is for the Web Development section */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Building websites and web applications using HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Developing front-end features such as forms, modals, and carousels using libraries such as React or Vue</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Integrating third-party APIs, such as payment gateways or social media platforms, into a website or web application</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Debugging and troubleshooting issues that arise during development</p>
            </li>
          </ul>
        </article>
        {/* Below is for the Content Creation section */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Writing blog posts, articles, or other types of content that engage and inform audiences</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Creating social media posts that drive engagement and promote a brand's message</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Analyzing and reporting on the performance of content using tools such as Google Analytics</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Conducting keyword research and optimizing content for search engine optimization (SEO)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/quizz.jpeg'
import IMG2 from '../../assets/images/password.jpeg'
import IMG3 from '../../assets/images/amature.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Image of quizz project" />
          </div>
          <h3>JavaScript Quizz</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crystal-coding-time" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/crystal-coding-time" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Image of Random Password Generator" />
          </div>
          <h3>Random Password Generator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crystal-coding-time" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/crystal-coding-time" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="A simple educational search tool" />
          </div>
          <h3>The Curious Amateur</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crystal-coding-time" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/crystal-coding-time" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crystal-coding-time" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/crystal-coding-time" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Image of quizz project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crystal-coding-time" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/crystal-coding-time" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Image of quizz project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/crystal-coding-time" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/crystal-coding-time" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
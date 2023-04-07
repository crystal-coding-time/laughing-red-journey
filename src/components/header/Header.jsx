import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/images/selfie01.png';
import HeaderSocials from './HeaderSocials';

// Define a functional component called Header
const Header = () => {
  return (
    // Render a header element
    <header>
      {/* Render a div with class "container" and "header__container" */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eli Ter Keurst</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        {/* Render the CTA component */}
        <CTA />
        {/* Render the HeaderSocials component */}
        <HeaderSocials />

        {/* Render a div with class "me", containing an image of the developer */}
        <div className="me">
          <img src={ME} alt='Developer Selfie' />
        </div>

        {/* Render an anchor tag with a link to the contact section of the page, with a class of "scroll__down" */}
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header;

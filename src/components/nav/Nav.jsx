import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import{MdDesignServices} from 'react-icons/md'
import {RiChatSmile2Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiTwotoneHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiServiceFill /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiChatSmile2Fill /></a>
    </nav>
  )
}

export default Nav
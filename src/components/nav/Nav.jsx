import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import{MdDesignServices} from 'react-icons/md'
import {RiChatSmile2Fill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiTwotoneHome /></a>
      <a href='#about'><BsFillPersonFill /></a>
      <a href='#experience'><RiServiceFill /></a>
      <a href='#services'><MdDesignServices /></a>
      <a href='#contact'><RiChatSmile2Fill /></a>
    </nav>
  )
}

export default Nav
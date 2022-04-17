import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className ="header__socials">
        <a href="https://www.linkedin.com/in/kelvin-muchui-6779b8a6/"><BsLinkedin/></a>
        <a href="https://github.com/kelvinmuchui"><BsGithub/></a>

        <a href="https://dribble.com"><BsDribbble/></a>

    </div>
  )
}

export default HeaderSocial
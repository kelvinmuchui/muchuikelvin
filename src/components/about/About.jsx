import React from 'react'
import './about.css'

import ME from '../../assets/me3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className ="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>
          </div>

          <div className="about__content">

            <div className="about__cards">
              <article className ="about__card">
                <FaAward className="about__icon"/>
                <h5> Experience</h5>
                <small>3+ Year Working Experience</small>

              </article>
              <article className ="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5> Projects</h5>
                <small>40+ Completed Project</small>

              </article>
              <article className ="about__card">
                <FiUsers className="about__icon"/>
                <h5> Clients</h5>
                <small>100 + Client World</small>

              </article>
            </div>
            <p>
              I am a Full Stack Developer with a background in Business Administration. I have a passion for building web applications and solving problems. I am currently working on a project that will allow me to create a platform for people to connect with each other. 

            </p>
            <a href ="#contact" className ="btn btn-primary">Let's Talk</a>
          </div>
        
      </div>
    </section>
  )
}

import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id ="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className ="contact__options">
          <article className ="contact__option">
            <MdOutlineEmail className ="contact__option-icon"/>
            <h4>Email</h4>
            <h5>muchuikelvin423@gmail.com</h5>
            <a href="mailto:muchuikelvin423@gmail.com"> Send a Message </a>
          </article>
          <article className ="contact__option">
            <RiMessengerLine className ="contact__option-icon"/>
            <h4>Messager</h4>

            <a href="https://m.me/kelvin.muchui.944"> Send a Message </a>
          </article>
          <article className ="contact__option">
            <BsWhatsapp className ="contact__option-icon"/>
            <h4>WhatsApp</h4>

            <a href="https://api.whatsapp.com/send?phone=+254713786292"> Send a Message </a>
          </article>
        </div>
        {/* End of option */}
        <form action ="">
            <input type ="text" name= "name" placeholder='You name' required/>
            <input type ="email" name= "email" placeholder='You email' required/>
            <textarea name ="message" rows="7" placeholder =" Enter you message" required></textarea>
            <button className="btn btn-primary" type ="submit">Send Message</button>

        </form>
      </div>
    </section>

  )
}

export default Contact
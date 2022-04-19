import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/airbnb.png'
import IMG2 from '../../assets/nft.png'
import IMG3 from '../../assets/Amazonclone.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className ="container portfolio__container">
        <article className ="portfolio__item">
          <div className ="portfolio__item-image">
            <img src={IMG1} alt="airbnb"/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className ="profile__item-cta">
          <a className ="btn " href ="https://github.com/kelvinmuchui"  target='_blank' >GitHub</a>
          <a  className ="btn btn-primary"href ="https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/" target='_blank' >Live Demo</a>

          </div>
          
          </article>
          <article className ="portfolio__item">
          <div className ="portfolio__item-image">
            <img src={IMG3} alt="airbnb"/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className ="profile__item-cta">
          <a className ="btn " href ="https://github.com/kelvinmuchui"  target='_blank' >GitHub</a>
          <a  className ="btn btn-primary"href ="https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/" target='_blank' >Live Demo</a>

          </div>
          </article>
          <article className ="portfolio__item">
          <div className ="portfolio__item-image">
            <img src={IMG1} alt="airbnb"/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className ="profile__item-cta">
          <a className ="btn " href ="https://github.com/kelvinmuchui"  target='_blank' >GitHub</a>
          <a  className ="btn btn-primary"href ="https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/" target='_blank' >Live Demo</a>

          </div>
          </article>
          <article className ="portfolio__item">
          <div className ="portfolio__item-image">
            <img src={IMG2} alt="airbnb"/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className ="profile__item-cta">
          <a className ="btn " href ="https://github.com/kelvinmuchui"  target='_blank' >GitHub</a>
          <a  className ="btn btn-primary"href ="https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/" target='_blank' >Live Demo</a>

          </div>
          </article>
          <article className ="portfolio__item">
          <div className ="portfolio__item-image">
            <img src={IMG1} alt="airbnb"/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className ="profile__item-cta">
          <a className ="btn " href ="https://github.com/kelvinmuchui"  target='_blank' >GitHub</a>
          <a  className ="btn btn-primary"href ="https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/" target='_blank' >Live Demo</a>

          </div>
          </article>
          <article className ="portfolio__item">
          <div className ="portfolio__item-image">
            <img src={IMG2} alt="airbnb"/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className ="profile__item-cta">
          <a className ="btn " href ="https://github.com/kelvinmuchui"  target='_blank' >GitHub</a>
          <a  className ="btn btn-primary"href ="https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/" target='_blank' >Live Demo</a>

          </div>
          </article>
          </div>
    </section>
  )
}

export default Portfolio
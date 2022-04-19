import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/airbnb.png'
import IMG2 from '../../assets/nft.png'
import IMG3 from '../../assets/Amazonclone.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Airbnb Clone ",
    github: "https://github.com/kelvinmuchui",
    demo: "https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/"
  },
  {
    id: 1,
    image: IMG2,
    title: "Airbnb Clone ",
    github: "https://github.com/kelvinmuchui",
    demo: "https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/"
  },
  {
    id: 1,
    image: IMG1,
    title: "Airbnb Clone ",
    github: "https://github.com/kelvinmuchui",
    demo: "https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/"
  },
  {
    id: 1,
    image: IMG3,
    title: " Ecommerce website like amazon",
    github: "https://github.com/kelvinmuchui",
    demo: "https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/"
  },
  {
    id: 1,
    image: IMG2,
    title: "BlockChain NFt Website Using Sanity ",
    github: "https://github.com/kelvinmuchui",
    demo: "https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/"
  },
  {
    id: 1,
    image: IMG1,
    title: "Airbnb Clone ",
    github: "https://github.com/kelvinmuchui",
    demo: "https://nftm-arket-place-ppgpce9wx-kelvinmuchui.vercel.app/"
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className ="container portfolio__container">
       {
         data.map(({id, image, title,github,demo})=>{
           return(
            <article key={id} className ="portfolio__item">
            <div className ="portfolio__item-image">
              <img src={image} alt="airbnb"/>
            </div>
            <h3>{title}</h3>
            <div className ="profile__item-cta">
            <a className ="btn " href ={github}  target='_blank' >GitHub</a>
            <a  className ="btn btn-primary"href ={demo} target='_blank' >Live Demo</a>
  
            </div> 
            </article>
           )
         })
       }
          </div>
    </section>
  )
}

export default Portfolio
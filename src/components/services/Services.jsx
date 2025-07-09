import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        {/* === UI/UX Design === */}
        <article className="service__article">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing intuitive user interfaces that improve user engagement and satisfaction.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating wireframes and prototypes using Figma and Adobe XD.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conducting UX research to align design with user needs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Improving usability and accessibility across web and mobile platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborating with developers to implement clean and functional designs.</p>
            </li>
          </ul>
        </article>

        {/* === Web Development === */}
        <article className="service__article">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building responsive websites using React, HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating fast and secure backend systems with Node.js, Express, and Firebase.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating APIs, databases (MongoDB, MySQL), and payment gateways.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploying and managing web applications on platforms like Vercel and Netlify.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimizing site performance, SEO, and accessibility standards.</p>
            </li>
          </ul>
        </article>

        {/* === Blockchain Development === */}
        <article className="service__article">
          <div className="service__head">
            <h3>Blockchain Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building and deploying smart contracts using Solidity and Ethereum.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing dApps with Web3.js and MetaMask integration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using blockchain in real estate use cases like asset tokenization and secure ownership records.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and auditing smart contracts for security and gas optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Staying up-to-date with DeFi trends and NFT applications.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services

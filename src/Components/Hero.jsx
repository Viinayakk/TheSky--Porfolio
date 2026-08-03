import React from 'react'
import './Hero.css'
import bhopinder from '/Images/bhopiner.jpg'
import { ReactTyped } from "react-typed";
import AnchorLink from 'react-anchor-link-smooth-scroll'





function Hero() {
  return (
    <div id='hero' data-aos="fade" className='hero'>
        <div className="hero-img-wrapper" data-aos="fade-up">
          <div className="hero-img-glow"></div>
          <div className="hero-img-border-ring"></div>
          <img className='bhupi' src={bhopinder} alt="Bhupendra Prajapati" />
        </div>
        <h1> <span >I'm Bhupendra Prajapati</span>, <br />A  <ReactTyped  data-aos="fade-up" strings={[
                " Editor",
                " Designer",
                " FreeLancer",
                "Graphic Designer ",
                " YouTuber"
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop/></h1>
        <p>I am a Graphic Designer & Editor from Mumbai, Having 3+ years of Experience With Multiple Cleints(Online & Offline)</p>
        <div className='Hero-cta'>
          <AnchorLink offset={50} href='#contact' className='hero-btn hero-btn-primary'> 
            Connect With Me
          </AnchorLink>
          <a
            href="/public/Bhupendra Resume.pdf"
            download="Bhupendra Resume.pdf"
            className='hero-btn hero-btn-secondary'
          >
            Download Resume
          </a>
        </div>
    </div>
  )
}

export default Hero
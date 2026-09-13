import React from 'react'
import './Hero.css'
import { ReactTyped } from "react-typed";
import AnchorLink from 'react-anchor-link-smooth-scroll'





function Hero() {
  return (
    <div id='hero' data-aos="fade" className='hero'>
      <div className="hero-video-wrapper" data-aos="fade-up">
        <div className="hero-img-glow"></div>
        <video
          className="hero-video"
          src="/FINAL PORTFOLIO video.mp4"
          controls
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <h1> <span >I'm Bhupendra Prajapati</span>, <br />A  <ReactTyped data-aos="fade-up" strings={[
        " Editor",
        " FreeLancer",
        "Photographer",
        " YouTuber"
      ]}
        typeSpeed={60}
        backSpeed={40}
        loop /></h1>
      <p>I am a Editor & Photographer from Mumbai, Having 3+ years of Experience With Multiple Cleints(Online & Offline)</p>
      <div className='Hero-cta'>
        <AnchorLink offset={50} href='#contact' className='hero-btn hero-btn-primary'>
          Get In Touch
        </AnchorLink>
        <a
          href="/Bhupendra_Prajapati_Resume.pdf"
          download="Bhupendra_Prajapati_Resume.pdf"
          className='hero-btn hero-btn-secondary'
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
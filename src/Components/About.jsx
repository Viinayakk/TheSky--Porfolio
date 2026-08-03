import React from 'react'
import './About.css'
import theme_pattern from '/Images/theme_pattern.svg'
import bhopinder_side from '/Images/bhopinder-side.jpg'
import AboutMe from '/Images/AboutMe.png'

function About() {
  return (
    <div id='about' data-aos="fade" className='about flex justify-center items-center gap-10 flex-col  '>
      <div className="section-header">
        <span className="section-ghost-text">ABOUT ME</span>
        <div className="section-tag-badge">
          <span className="section-tag-dot"></span> DISCOVER MY STORY
        </div>
        <h2 className="section-main-heading">
          About <span>Me</span>
        </h2>
        <div className="section-accent-line">
          <span className="section-line-glow"></span>
        </div>
      </div>
      <div className="about-sec flex gap-10 items-stretch">
        <div className="about-left">
          <img className='bhopinder-side' src={bhopinder_side} alt="bhu-image" />
        </div>

        <div className='about-right flex flex-col gap-6 justify-between'>
          <div className='flex flex-col gap-5 text-xl'>
          <p>My Design and Editing Approach Goes beyond visual appeal I focus on storytelling that connects with audience and drives meaningful engagement. 
          </p>
          <p> I specialise in crafting content for social media that not only captures attention but Strengthens brand identity and supports overall growth.  </p>
          </div>
        
          <div className="experience-timeline flex flex-col gap-6">
            <p className="exp-label">EXPERIENCE</p>

            <div className="exp-card">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <span className="exp-role">Graphic Designer &amp; Video Editor</span>
                  <span className="exp-date">2023 — PRESENT</span>
                </div>
                <p className="exp-desc">3+ years of experience in the freelance market as a Video Editor and Graphic Designer, crafting compelling visual content that drives engagement and builds brand identity.</p>
              </div>
            </div>

            <div className="exp-card">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <span className="exp-role">Social Media Manager &amp; Digital Comm Director</span>
                  <span className="exp-date">MAR 2024 — MAR 2025</span>
                </div>
                <a
                  href="https://www.instagram.com/rc_bhs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-org"
                  title="Visit Rotaract Club of Bombay Hills South on Instagram"
                >
                  Rotaract Club of Bombay Hills South <span className="exp-org-icon">↗</span>
                </a>
                <p className="exp-desc">Volunteered to manage the social media presence for the Rotaract Club, leveraging video editing and graphic design skills to create engaging content that amplified the club's reach and community impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Software & Tools Section */}
      <div className="tools-section flex flex-col items-center w-full">
        <div className="section-tag-badge mb-6">
          <span className="section-tag-dot"></span> SOFTWARE &amp; TOOLS I USE FOR MY WORKS
        </div>
        
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon-wrapper tool-pr">Pr</div>
            <h3>Premiere Pro</h3>
            <p>Video Editing &amp; Timeline Assembly</p>
          </div>

          <div className="tool-card">
            <div className="tool-icon-wrapper tool-ae">Ae</div>
            <h3>After Effects</h3>
            <p>Motion Graphics &amp; Visual Effects</p>
          </div>

          <div className="tool-card">
            <div className="tool-icon-wrapper tool-dvr">
              <img src="/Images/davinci_logo.svg" alt="DaVinci Resolve" className="davinci-icon-img" />
            </div>
            <h3>DaVinci Resolve</h3>
            <p>Cinematic Color Grading &amp; Finishing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
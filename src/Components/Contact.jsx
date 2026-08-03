import React from 'react'
import './Contact.css'
import theme_pattern from '/Images/theme_pattern.svg'
import mail_icon from '/Images/mail_icon.svg'
import location_icon from '/Images/location_icon.svg'
import call_icon from '/Images/call_icon.svg'
import { toast } from 'react-toastify'
import GetInTouch from '/Images/GetInTouch.png'


function Contact() {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c6ea1178-332a-4bf2-bc86-760de0c71578");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Submitted Successfully")
      event.target.reset();
    }

  };

  return (
    <div id='contact' data-aos="fade" className='contact-sec relative flex flex-col justify-center items-center gap-20'>
      <div className="section-header">
        <span className="section-ghost-text">CONTACT</span>
        <div className="section-tag-badge">
          <span className="section-tag-dot"></span> LET'S CONNECT
        </div>
        <h2 className="section-main-heading">
          Get In <span>Touch</span>
        </h2>
        <div className="section-accent-line">
          <span className="section-line-glow"></span>
        </div>
      </div>

      <div className="mainContactSec flex justify-between items-start gap-12 w-full">
        {/* Left Info Column */}
        <div className="contact-left flex flex-col gap-6 flex-1">
          <h1 className="contact-subheading text-5xl font-bold">Let's talk</h1>
          <p className="contact-desc leading-8 text-[18px] text-gray-300">
            I am currently available to take new Projects. Feel free to message me about anything that you want me to work on, you can contact me anytime.
          </p>

          <div className="contact-details flex flex-col gap-5 text-[18px]">
            <div className="contact-detail flex gap-4 items-center">
              <img src={mail_icon} alt="mail icon" className="w-6 h-6" />
              <a href="mailto:bp783453@gmail.com" className="hover:text-[#015DFD] transition-colors">bp783453@gmail.com</a>
            </div>
            <div className="contact-detail flex gap-4 items-center">
              <img src={call_icon} alt="call icon" className="w-6 h-6" />
              <p>+91 9321120345</p>
            </div>
            <div className="contact-detail flex gap-4 items-center">
              <img src={location_icon} alt="location icon" className="w-6 h-6" />
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Separator Line between Info & Form */}
        <div className="contact-divider"></div>

        {/* Right Form Column */}
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-5 flex-1 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[18px] font-semibold text-gray-200">Name</label>
            <input className="contact-input" type="text" placeholder="Enter your name" name="name" required />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[18px] font-semibold text-gray-200">E-mail</label>
            <input className="contact-input" type="email" placeholder="Enter your E-mail" name="email" required />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[18px] font-semibold text-gray-200">Message</label>
            <textarea className="contact-input" name="message" rows={6} placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="contact-submit mt-2">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
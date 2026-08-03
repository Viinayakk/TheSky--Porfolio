import React from 'react'
import './Services.css'
import Services_data from '../data/Services_data.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Services() {
  return (
    <div id='services' data-aos="fade" className='services flex flex-col items-center justify-center gap-20'>
      <div className="section-header">
        <span className="section-ghost-text">SERVICES</span>
        <div className="section-tag-badge">
          <span className="section-tag-dot"></span> WHAT I OFFER
        </div>
        <h2 className="section-main-heading">
          My <span>Services</span>
        </h2>
        <div className="section-accent-line">
          <span className="section-line-glow"></span>
        </div>
      </div>

    <div className="services-container grid grid-cols-3 gap-10 mb-20">
{Services_data.map((service,index)=>{
    return <div key={service.s_no} className='services-format flex flex-col justify-between gap-6 rounded-[13px] cursor-pointer'>
        <h1 className='text-3xl font-bold text-[#015DFD]'>{service.s_no}</h1>
        <h1 className='servicename text-3xl font-semibold'>{service.s_name}</h1>
        <p className='text-base text-gray-300 leading-relaxed'>{service.s_desc}</p>
        <div className='services-readmore mt-4'>
          <AnchorLink offset={50} href='#contact' className='contactmorepara text-lg font-semibold'>
            Contact for More <i className="fa-solid fa-arrow-right"></i>
          </AnchorLink>
        </div>
    </div>
})}
    </div>
    </div>
  )
}

export default Services
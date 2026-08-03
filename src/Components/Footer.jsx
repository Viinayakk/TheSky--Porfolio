import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {ArrowDownRight} from 'lucide-react'




function Footer() {
  return ( <>
    <div className='footer rounded-tr-4xl rounded-tl-4xl bg-[#05060a] border-t border-[#015DFD]/20 flex justify-between'>
      <div className="footer-left flex flex-col justify-center items-center">
       <h1 className=' flex items-center justify-center  gap-20 text-[19px]' >
      &copy;
      THE SKY &nbsp;2026 &nbsp;| &nbsp;All Rights Reserved.</h1> 

        
       
      </div>

      <div className="footer-right flex flex-col ">
        <div className='navigations flex gap-10'>
          <a href="https://www.linkedin.com/in/bhupendra-prajapati-4502a1273/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="icons fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/skyeditz.1/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="icons fa-brands fa-instagram"></i></a>  
          <a href="https://www.youtube.com/@The_Sky.1" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="icons fa-brands fa-youtube"></i></a> 
          <a href="https://x.com/skyeditzonig?t=gMZEjFo6aWi6QiHyVJzCKQ&s=09" target="_blank" rel="noopener noreferrer" title="X (Twitter)"><i className="icons fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    </div>

    <div className='flex justify-center bg-[#05060a]'>
    <div className=' divider  w-[80%] h-[1px] bg-[#015DFD]/30'></div>
   </div>
    
    <div className='foot flex justify-center p-10 bg-[#05060a]'>  
      <h1>Made with ❤️ by <a className='hover:text-[#015DFD] transition-colors' href="https://viinayakk.vercel.app/" target="_blank" rel="noopener noreferrer">Vinayak</a> </h1>
    </div>

    
    </>
    
  )
}

export default Footer
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Scroller from './Components/Scroller'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '/src/Components/Toast.css'


function App() {


useEffect(() => {
    Aos.init({
      duration: 800,   // animation speed (ms)
      once: true,      // animate only once
      easing: 'ease-in-out',
    })
  }, [])



  return (
    <div>

       <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
      />
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      
      <Footer/>

      <div className='fixed bottom-7 right-5'>
        <Scroller/>
      </div>
    </div>
  )
}

export default App
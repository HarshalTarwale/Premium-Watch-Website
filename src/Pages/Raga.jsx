import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Watchs from '../Components/Raga Components/Watchs'
import Footer from '../Components/Footer'

const Raga = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Video */}
      <Video 
        src={`${import.meta.env.BASE_URL}Raga/Rolex Day-Date – Decorative Stone Dials.mp4`}
      />

      {/* Watches */}
      <Watchs />

      {/* Footer with custom heading */}
      <Footer headingText="RAGA" />
    </div>
  )
}

export default Raga

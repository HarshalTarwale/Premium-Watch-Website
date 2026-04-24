import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Watchs from '../Components/Nebula Components/Watchs'
import Footer from '../Components/Footer'

const Nebula = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* video */}
      <Video
        src={`${import.meta.env.BASE_URL}Nebula/Hero-section-video.mp4`}/>

      {/* Watches */}
      <Watchs />

      {/* Footer with custom heading */}
      <Footer headingText="NEBULA" />

    </div>
  )
}

export default Nebula

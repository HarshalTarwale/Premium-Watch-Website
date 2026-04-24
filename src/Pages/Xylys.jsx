import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Watchs from '../Components/Xylys Components/Watchs'
import Footer from '../Components/Footer'

const Xylys = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Video */}
      <Video 
        src={`${import.meta.env.BASE_URL}Xylys/Cinematic Watch Commercial.mp4`}
      />

      {/* Watches */}
      <Watchs />

      {/* Footer with custom heading */}
      <Footer headingText="XYLYS" />
    </div>
  )
}

export default Xylys

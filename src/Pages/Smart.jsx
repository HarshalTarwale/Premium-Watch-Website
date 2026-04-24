import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Watchs from '../Components/Smart Components/Watchs'
import Footer from '../Components/Footer'

const Smart = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Video */}
      <Video 
        src={`${import.meta.env.BASE_URL}Smart/From KlickPin CF Pin on Smart Watches.mp4`}
      />

      {/* Watches */}
      <Watchs />

      {/* Footer with custom heading */}
      <Footer headingText="SMART" />
    </div>
  )
}

export default Smart

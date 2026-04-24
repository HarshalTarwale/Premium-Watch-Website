import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Watchs from '../Components/Fastract Components/Watchs'
import Footer from '../Components/Footer'

const Fastract = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Video */}
      <Video 
        src={`${import.meta.env.BASE_URL}Fastract/Luxury Watch Ad.mp4`}
      />

      {/* Watches */}
      <Watchs />

      {/* Footer with custom heading */}
      <Footer 
        headingText="FASTRACT" 
        headingStyle={{
          fontSize: '120px',
          letterSpacing: '30px',
          marginRight: '-40px',
          marginTop: '8vh'
        }}
      />
    </div>
  )
}

export default Fastract

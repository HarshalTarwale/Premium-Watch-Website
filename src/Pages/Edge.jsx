import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Heading3 from '../Components/Heading3'
import WatchCatalog from '../Components/Watchcatelog'
import Watchs from '../Components/Edge Components/Watchs'
import Footer from '../Components/Footer'

const Edge = () => {
  return (
    <div className=' w-full min-h-[100vh]'>
        {/* Navbar */}
        <Navbar/>

        {/* Videos */}
        <Video 
          src={`${import.meta.env.BASE_URL}Edge/Edge video.mp4`}
        />

        {/* Watches */}
        <Watchs />

        {/* Footer with custom heading */}
        <Footer headingText="EDGE" />
      
    </div>
  )
}

export default Edge

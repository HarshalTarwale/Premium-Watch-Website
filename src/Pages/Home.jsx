import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Heading1 from '../Components/Heading1.jsx'
import Video from '../Components/Video.jsx'
import HomeGrid from '../Components/Home Components/HomeGrid.jsx'
import NewArrival from '../Components/Home Components/NewArrival.jsx'
import WatchCard from '../Components/WatchCard.jsx'
import BestSeller from '../Components/Home Components/BestSeller.jsx'
import Titantext from '../Components/Home Components/Titantext.jsx'
import FAQ from '../Components/Home Components/FAQ.jsx'
import LoginTab from '../Components/Home Components/LoginTab.jsx'
import Footer from '../Components/Footer.jsx'


const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full overflow-x-hidden'>
        <Navbar/>
        <Video 
          src={`${import.meta.env.BASE_URL}Home/Presenting Titan Edge Mechanical.mp4`}
        />
        
        {/* Explore Section */}
        <div className='Explore text-white mt-[30vh]'>
             <Heading1 text="Explore" style={{ WebkitTextStroke: '0.5px white' }} />
             <HomeGrid />
        </div>

        {/* New Arrival Section */}
        <div className='NewArrival text-white mt-[30vh]'>
             <NewArrival />
        </div>

        {/* Best Sellers Section */}
        <BestSeller />

        {/* Titan effect sectiobn */}
        <Titantext />

        {/* FAQ Section */}
        <div className='FAQ text-white mt-[18vh] mb-[10vh]'>
             <Heading1 text="FAQ" style={{ WebkitTextStroke: '0.5px white', marginBottom: '4vh' }} />
             <FAQ />
        </div>

        {/* Login tab */}
        <LoginTab />

        {/* Footer */}
        <Footer />
      
    </div>
  )
}

export default Home

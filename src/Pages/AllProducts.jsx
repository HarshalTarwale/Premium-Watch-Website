import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Heading3 from '../Components/Heading3.jsx'
import WatchCard from '../Components/WatchCard.jsx'
import Button1 from '../Components/Buttons/Button1.jsx'
import SmartWatchs from '../Components/Smart Components/Watchs.jsx'
import NebulaWatchs from '../Components/Nebula Components/Watchs.jsx'
import RagaWatchs from '../Components/Raga Components/Watchs.jsx'
import XylysWatchs from '../Components/Xylys Components/Watchs.jsx'
import FastractWatchs from '../Components/Fastract Components/Watchs.jsx'
import EdgeWatchs from '../Components/Edge Components/Watchs.jsx'
import Footer from '../Components/Footer.jsx'
import Backtotop from '../Components/Buttons/Backtotop.jsx'

const AllProducts = () => {
  // Best Seller watches data - 12 watches (2 rows x 6 cards)
  const bestSellerWatches = [
    // Row 1
    { id: 1, imageSrc: 'Edge/Watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 2, imageSrc: 'Edge/Watches/download (14).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 3, imageSrc: 'Edge/Watches/Product Photography.jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 4, imageSrc: 'Edge/Watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 5, imageSrc: 'Edge/Watches/IWC Pilot Watch Chronograph.jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 6, imageSrc: 'Edge/Watches/download (17).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    // Row 2
    { id: 7, imageSrc: 'Edge/Watches/download (16).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 8, imageSrc: 'Edge/Watches/download (15).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 9, imageSrc: 'Edge/Watches/download (13).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 10, imageSrc: 'Edge/Watches/download (12).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 11, imageSrc: 'Edge/Watches/download (11).jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
    { id: 12, imageSrc: 'Edge/Watches/Rolex Milgauss.jpg', title: 'Titan | Neo Splash Blue Dial Quartz', description: 'Steel Strap watch for Men Watch', price: '₹ 7,195.00', rating: '4.4' },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='bg-black min-h-screen w-full'>
      <Navbar/>

      <Backtotop />

      {/* Buttons */}
      <div className='Buttons w-full flex justify-center gap-[2vh] mt-[15vh] pt-[3vh] text-white'>
        <div onClick={() => scrollToSection('smart-section')}><Button1 text="Smart" /></div>
        <div onClick={() => scrollToSection('raga-section')}><Button1 text="Raga" /></div>
        <div onClick={() => scrollToSection('nebula-section')}><Button1 text="Nebula" /></div>
        <div onClick={() => scrollToSection('xylys-section')}><Button1 text="Xylys" /></div>
        <div onClick={() => scrollToSection('fastract-section')}><Button1 text="Fastract" /></div>
        <div onClick={() => scrollToSection('edge-section')}><Button1 text="Edge" /></div>
      </div>
      
      {/* Best Seller Section with TITAN background */}
      <div className='w-full relative pt-[10vh] mt-[8vh]'>
        {/* Background TITAN Heading */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 text="TITAN" />
        </div>
        
        {/* Watch Catalog - 6 columns grid */}
        <div className='relative z-10 mt-[10vh] w-full flex justify-center px-4'>
          <div className='grid grid-cols-6 gap-x-[1.5vw] gap-y-[6vh] max-w-[95vw]'>
            {bestSellerWatches.map((watch) => (
              <WatchCard
                key={watch.id}
                imageSrc={watch.imageSrc}
                title={watch.title}
                description={watch.description}
                price={watch.price}
                rating={watch.rating}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Watch Sections */}
      <div id="smart-section">
        <SmartWatchs />
      </div>
      
      <div id="nebula-section">
        <NebulaWatchs />
      </div>
      
      <div id="raga-section">
        <RagaWatchs />
      </div>
      
      <div id="xylys-section">
        <XylysWatchs />
      </div>
      
      <div id="fastract-section">
        <FastractWatchs />
      </div>
      
      <div id="edge-section">
        <EdgeWatchs />
      </div>

      <Footer/>
      
    </div>
  )
}

export default AllProducts

import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeGrid = () => {
  const navigate = useNavigate()
  const baseUrl = import.meta.env.BASE_URL

  // Navigation handler for collection cards
  const handleNavigate = (collection) => {
    navigate(`/${collection.toLowerCase()}`)
  }

  return (
    /* Grid Container - Displays Titan's watch collections in a masonry-style grid */
    <div className='Grid-container flex justify-center w-full mt-[12vh]'>
        {/* 
            *** EDIT GRID SIZE HERE ***
            Grid wrapper: Change 'h-[100vh]' to adjust overall grid height
            Change 'w-[100vh]' to adjust overall grid width
            Current aspect ratio: 1:1 (square grid)
            All child elements use percentages relative to this container
        */}
        <div className='relative w-[90vh] h-[90vh]'>
            
            {/* Nebula - Tall vertical card (top-left) */}
            {/* Position: left-0 top-0 | Size: 40.6% width × 63.4% height */}
            {/* *** HOVER EFFECT SETTINGS *** 
                Scale: hover:scale-102 (adjust number: 102 = 2% larger, 105 = 5% larger)
                Glow color: shadow-[0_0_15px_rgba(134,136,137,0.7)] - edit RGBA values (R,G,B,opacity)
                Transition: duration-300 (adjust ms: 200, 400, 500 etc.)
            */}
            <div 
                className='nebula absolute rounded-[1.3vh] left-0 top-0 w-[40.6%] h-[63.4%] cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(134,136,137,0.7)]'
                onClick={() => handleNavigate('nebula')}
            >
                <img 
                    src={`${baseUrl}Home/Grid Images/nebula.jpg`}
                    alt='Nebula Collection' 
                    className='w-full h-full object-cover rounded-[1.3vh]'
                />
                <p className='absolute bottom-[1.7vh] left-1/2 -translate-x-1/2 font-["Zen_Dots"] text-[3.2vh] text-white text-center'>
                    Nebula
                </p>
            </div>
            
            {/* Smart - Small square card (top-center) */}
            {/* Position: left-42.4% top-0 | Size: 28.3% width × 28.5% height */}
            <div 
                className='smart absolute rounded-[1.3vh] left-[42.4%] top-0 w-[28.3%] h-[28.5%] cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(134,136,137,0.7)]'
                onClick={() => handleNavigate('smart')}
            >
                <img 
                    src={`${baseUrl}Home/Grid Images/smart.jpg`}
                    alt='Smart Collection' 
                    className='w-full h-full object-cover rounded-[1.3vh]'
                />
                <p className='absolute bottom-[1.7vh] left-1/2 -translate-x-1/2 font-["Zen_Dots"] text-[2.3vh] text-white text-center'>
                    Smart
                </p>
            </div>
            
            {/* fastract - Small rectangular card (top-right) */}
            {/* Position: left-72.5% top-0 | Size: 27.9% width × 28.4% height */}
            <div 
                className='fastract absolute rounded-[1.3vh] left-[72.5%] top-0 w-[27.9%] h-[28.4%] cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(134,136,137,0.7)]'
                onClick={() => handleNavigate('fastract')}
            >
                <img 
                    src={`${baseUrl}Home/Grid Images/fastract.jpg`}
                    alt='Fastract Collection' 
                    className='w-full h-full object-cover rounded-[1.3vh]'
                />
                <p className='absolute bottom-[1.7vh] left-1/2 -translate-x-1/2 font-["Zen_Dots"] text-[2.3vh] text-white text-center'>
                    fastract
                </p>
            </div>
            
            {/* xylys - Wide horizontal card (middle-right) */}
            {/* Position: left-42.4% top-30.2% | Size: 57.6% width × 33.1% height */}
            <div 
                className='xylys absolute rounded-[1.3vh] left-[42.4%] top-[30.2%] w-[57.6%] h-[33.1%] cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(134,136,137,0.7)]'
                onClick={() => handleNavigate('xylys')}
            >
                <img 
                    src={`${baseUrl}Home/Grid Images/xylys.jpg`}
                    alt='Xylys Collection' 
                    className='w-full h-full object-cover rounded-[1.3vh]'
                />
                <p className='absolute top-[1.7vh] left-[6.6%] font-["Zen_Dots"] text-[3.2vh] text-white text-center'>
                    xylys
                </p>
            </div>
            
            {/* Edge - Wide horizontal card (bottom-left) */}
            {/* Position: left-0 top-65.2% | Size: 40.6% width × 34.9% height */}
            <div 
                className='edge absolute rounded-[1.3vh] left-0 top-[65.2%] w-[40.6%] h-[34.9%] cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(134,136,137,0.7)]'
                onClick={() => handleNavigate('edge')}
            >
                <img 
                    src={`${baseUrl}Home/Grid Images/edge.jpg`}
                    alt='Edge Collection' 
                    className='w-full h-full object-cover rounded-[1.3vh]'
                />
                <p className='absolute top-[1.7vh] left-1/2 -translate-x-1/2 font-["Zen_Dots"] text-[3.2vh] text-white text-center'>
                    Edge
                </p>
            </div>
            
            {/* Raga - Wide horizontal card (bottom-right) */}
            {/* Position: left-42.4% top-65.2% | Size: 57.6% width × 34.9% height */}
            <div 
                className='raga absolute rounded-[1.3vh] left-[42.4%] top-[65.2%] w-[57.6%] h-[34.9%] cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(134,136,137,0.7)]'
                onClick={() => handleNavigate('raga')}
            >
                <img 
                    src={`${baseUrl}Home/Grid Images/raga.jpg`}
                    alt='Raga Collection' 
                    className='w-full h-full object-cover rounded-[1.3vh]'
                />
                <p className='absolute top-[1.7vh] left-[5.9%] font-["Zen_Dots"] text-[3.2vh] text-white text-center'>
                    Raga
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default HomeGrid

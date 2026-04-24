import React from 'react'

/**
 * Titantext Component
 * Displays a large "TITAN" text with gradient effect and a centered video animation
 * 
 * 🎨 CUSTOMIZATION GUIDE:
 * ----------------------
 * Text Size: Adjust 'text-[11vw]' for TITAN text size
 * Text Gradient: Modify gradient colors in 'from-[rgba(255,255,255,0.4)]' and 'to-[rgba(0,0,0,0.4)]'
 * Text Opacity: Change 'opacity-50' (0-100) for text visibility
 * Letter Spacing: Adjust 'tracking-[7.7vw]' for text spacing
 * Text Position: Modify 'top-[50%]' to move text vertically
 * 
 * Video Container: 'w-[18vw] h-[75vh]' for video frame size
 * Video Border: Change 'border-white' for frame color
 * Video Border Radius: Adjust 'rounded-[0.9vw]' for corner roundness
 * Video Shadow: Modify 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' for depth
 * Video Position: Adjust 'top-[50%]' to move video vertically
 */

const Titantext = () => {
  return (
    <div className='w-full flex justify-center mt-[8vh] mb-[8vh]'>
      {/* 🎨 EFFECT CONTAINER - Main wrapper for text and video animation */}
      <div className='Effect-container relative w-full h-[90vh] flex items-center justify-center'>
        
        {/* 🔤 TITAN TEXT - Large background text with gradient effect */}
        <p 
          className='zen absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 
                     text-[11vw] text-center leading-normal tracking-[6.5vw] 
                     w-[70vw] whitespace-pre-wrap opacity-50 not-italic
                     bg-gradient-to-b from-[rgba(255,255,255,0.54)] from-[46.002%] 
                     to-[rgba(0,0,0,0.45)] to-[76.157%] bg-clip-text'
          style={{ WebkitTextFillColor: "transparent" }}
        >
          {/* 🎨 EDIT: Change text content here */}
          TITAN
        </p>
        
        {/* 📹 VIDEO CONTAINER - Vertical video frame with border and shadow */}
        <div 
          className='absolute left-[48.4%] -translate-x-1/2 top-[50%] -translate-y-1/2
                     w-[25vw] h-[40vh] 
                     
                     '
        >
          {/* 🎬 VIDEO ELEMENT - Exploded watch animation */}
          <video 
            autoPlay 
            loop 
            muted
            playsInline
            controlsList="nodownload"
            className='w-full h-auto max-h-full '
          >
            {/* 🎨 EDIT: Video source path */}
            <source src={`${import.meta.env.BASE_URL}Home/VN20260208_020042.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Titantext

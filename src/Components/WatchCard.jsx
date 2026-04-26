import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * WatchCard Component
 * A product card component displaying watch details with image, title, description, price, and rating
 * 
 * @param {string} imageSrc - Path to the watch image (required)
 * @param {string} title - Watch title/name (required)
 * @param {string} description - Watch description/subtitle (required)
 * @param {string|number} price - Watch price (required)
 * @param {string|number} rating - Watch rating out of 5 (required)
 * @param {string} starIcon - Path to star icon (optional, defaults to white star)
 * 
 * 🎨 CUSTOMIZATION GUIDE:
 * ----------------------
 * Card Background: Glass effect with 'backdrop-blur-md' and semi-transparent bg
 * Glass Blur: Adjust 'backdrop-blur-md' (sm/md/lg/xl) for blur intensity
 * Glass Tint: Change 'bg-[rgba(255,255,255,0.1)]' for background transparency
 * Border: Modify 'border-[rgba(255,255,255,0.2)]' for glass edge color
 * Shadow: Adjust 'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' for depth
 * Card Size: Adjust 'w-[12.5vw] h-[39vh]' for different dimensions (maintain aspect ratio ~1:1.84)
 * Border Radius: Change 'rounded-[20px]' for card corners
 * Image Size: Adjust 'h-[231px]' for image height (keep proportional to card)
 * Font Sizes: Modify text classes (text-[11px], text-[16px], text-[10px]) for typography
 * Colors: Update colors in title (text-white), description (text-[#969595]), price (text-white)
 * Spacing: Adjust padding/margins (px-[12px], pt-[9px], mt-[10px]) for layout
 * Rating Badge: Modify border color (border-[#959896]) and background styling
 */

const WatchCard = ({ 
  imageSrc, 
  title, 
  description, 
  price, 
  rating,
  starIcon = null,
  navigateTo = null,
  state = null
}) => {
  const navigate = useNavigate()
  const baseUrl = import.meta.env.BASE_URL
  const normalizedPath = imageSrc?.replace(/^\/+/, '') || ''
  const encodedPath = normalizedPath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
  const imageUrl = `${baseUrl}${encodedPath}`

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo, { state })
    }
  }
  
  return (
    <>
      {/* 🎨 Main Card Container - Glass morphism effect with blur and transparency */}
      {/* SIZE: card width/height + corner radius */}
      <div
      className={`card-shell bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden relative rounded-[1.05vw] w-[12.5vw] h-[39vh] hover:scale-102 transition-transform duration-150 ${navigateTo ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      
      {/* 📦 Inner Card Content Wrapper */}
      <div className="absolute left-0 top-0 w-full h-full">
        
        {/* 🖼️ Watch Image Container - Maintains aspect ratio and rounded corners */}
        {/* SIZE: image frame (height/width/position) + radius */}
        <div className="absolute h-[67.94%] left-[4.74%] rounded-[1.03vw] top-[2.65%] w-[90.53%] overflow-hidden">
          <img 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[1.03vw]" 
            src={imageUrl}
          />
        </div>
        
        {/* 📝 Product Details Section */}
        {/* SIZE: text block positioning */}
        <div className="absolute left-[6.32%] top-[73.24%] w-[89.47%]">
          
          {/* 🏷️ Watch Title - Main product name */}
          {/* SIZE: title font size + block height */}
          <div className="zen absolute h-[2.88vh] leading-tight left-0 text-[0.8vw] text-white top-0 w-full">
            <p className="mb-0 line-clamp-2">{title}</p>
          </div>
          
          {/* 📋 Watch Description/Subtitle - Secondary info */}
          {/* SIZE: description font size + top offset */}
          <p className="zen absolute h-[2.16vh] leading-tight left-0 text-[#969595] text-[0.6vw] top-[4.5vh] w-[94.12%] truncate">
            {description}
          </p>
          
          {/* 💰 Price Display */}
          {/* SIZE: price font size + top offset */}
          <p className="zen absolute h-[2.06vh] leading-tight left-[0.53%] text-[1vw] text-white top-[7vh] w-[74.71%]">
            {price}
          </p>
          
          {/* ⭐ Rating Badge - Star icon with rating number */}
          {/* SIZE: rating badge position */}
          <div className="absolute left-[73.53%] top-[7vh] flex items-center">
            
            {/* Rating Container with border */}
            {/* SIZE: rating badge height/width + text/icon scale */}
            <div className="border-[#959896] border-[0.08vw] border-solid h-[1.75vh] rounded-[0.42vw] w-[1.95vw] flex items-center justify-center gap-[0.1vw] px-[0.15vw]">
              
              {/* Rating Text */}
              <p className="zen leading-none text-[0.42vw] text-white m-0">
                {rating}
              </p>
              
              {/* Star Icon */}
              {starIcon ? (
                <img 
                  alt="star" 
                  className="h-[0.93vh] w-[0.47vw] object-cover" 
                  src={starIcon}
                />
              ) : (
                // Default white star using Unicode character
                <span className="text-white text-[0.47vw] leading-none">★</span>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default WatchCard

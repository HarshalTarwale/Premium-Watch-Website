import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * NewCard Component
 * A reusable card component for displaying product images with navigation
 * 
 * @param {string} imageSrc - Path to the product image (required)
 * @param {string} navigateTo - Path to navigate when card is clicked (optional)
 * @param {string} alt - Alt text for the image (default: 'Product Image')
 * @param {string} className - Additional CSS classes (optional)
 * 
 * *** EDIT CARD SIZE HERE ***
 * Main container: Change 'w-[280px] h-[400px]' to adjust card dimensions
 * Border radius: Change 'rounded-[13px]' to adjust corner roundness
 * Hover effects: Adjust 'hover:scale-102' and shadow values below
 */

const NewCard = ({ 
  imageSrc, 
  navigateTo = null, 
  alt = 'Product Image',
  className = '' 
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
      navigate(navigateTo)
    }
  }

  return (
    <div 
      className={`relative w-[40vh] h-[55vh] rounded-[13px] overflow-hidden transition-all duration-300  hover:shadow-[0_0_15px_rgba(134,136,137,0.7)] ${navigateTo ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
    >
      {/* Image container with overflow hidden for rounded corners */}
      <div className='absolute inset-0 overflow-hidden rounded-[13px]'>
        <img 
          src={imageUrl}
          alt={alt}
          className='w-full h-full object-cover pointer-events-none'
        />
      </div>
    </div>
  )
}

export default NewCard

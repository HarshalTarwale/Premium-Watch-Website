import React, { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiShield, FiTruck, FiRepeat, FiCreditCard, FiTool } from 'react-icons/fi'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import WatchCard from '../Components/WatchCard.jsx'
import { fallbackWatch, relatedWatches } from '../data/watchData.js'

const WatchDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const watch = location.state?.watch || fallbackWatch

  const mainImageUrl = useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL
    const normalizedPath = watch.imageSrc?.replace(/^\/+/, '') || ''
    const encodedPath = normalizedPath
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/')
    return `${baseUrl}${encodedPath}`
  }, [watch.imageSrc])

  const extraImages = watch.extraImages?.length
    ? watch.extraImages
    : Array(4).fill(watch.imageSrc)

  const displayPrice = watch.price || '₹ 7,195.00'
  const displayOldPrice = watch.oldPrice || watch.price || '₹ 7,195.00'

  const features = [
    { id: 1, icon: <FiShield />, label: '24 Months\nWarranty' },
    { id: 2, icon: <FiTruck />, label: 'Free Shipping\nAcross India' },
    { id: 3, icon: <FiRepeat />, label: 'Easy Return\nPolicy' },
    { id: 4, icon: <FiCreditCard />, label: 'Pay on\nDelivery' },
    { id: 5, icon: <FiTool />, label: 'Service\nAcross India' }
  ]

  const handleRelatedClick = (related) => {
    navigate(`/watch/${related.id}`, { state: { watch: related } })
  }

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Navbar />

      <div className='pt-[16vh] px-[13vw]'>
        <div className='flex flex-col lg:flex-row gap-[4vw]'>
          <div className='lg:w-[35%] w-full'>
            {/* SIZE: main image frame padding + border radius */}
            <div className='rounded-[22px] border border-white/10 bg-white/5 p-[5px]'>
              {/* SIZE: square frame (adjust aspect-square or add max-w) */}
              <div className='w-full aspect-square overflow-hidden rounded-[16px]'>
                <img
                  src={mainImageUrl}
                  alt={watch.title}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <div className='flex gap-[1vh] mt-[2vh]'>
              {extraImages.map((image, index) => {
                const normalizedPath = image?.replace(/^\/+/, '') || ''
                const encodedPath = normalizedPath
                  .split('/')
                  .map((segment) => encodeURIComponent(segment))
                  .join('/')
                const imageUrl = `${import.meta.env.BASE_URL}${encodedPath}`
                return (
                  /* SIZE: thumbnail box size */
                  <div
                    key={`${image}-${index}`}
                    className='w-[6.5vh] h-[6.5vh] rounded-[10px] border border-white/10 bg-white/5 overflow-hidden'
                  >
                    <img
                      src={imageUrl}
                      alt={`${watch.title} preview ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className='lg:w-[58%] w-full pt-[1vh]'>
            {/* SIZE: title font scale */}
            <h1 className='zen text-[4.2vw] lg:text-[1.9vw] leading-tight'>
              {watch.title || 'Titan Men\'s Elegance Watch: Black Dial with Sleek Link Strap'}
            </h1>
            {/* SIZE: body text width + font scale */}
            <p className='text-white/70 text-[2.6vw] lg:text-[0.85vw] mt-[2vh] max-w-[38vw]'>
              {watch.descriptionLong ||
                'Embrace simplicity merged with style in this analog watch for men. This is a black dial and leather strap watch that you can wear with a new blue t-shirt, distressed jeans, and white sneakers. Let this watch be the understated accessory that adds a touch of elegance to your look.'}
            </p>

            <div className='flex items-center gap-[1vw] mt-[2.5vh]'>
              <span className='zen text-[3vw] lg:text-[1.5vw] font-semibold'>{displayPrice}</span>
              <span className='text-white/40 line-through text-[2.2vw] lg:text-[0.9vw]'>{displayOldPrice}</span>
            </div>

            {/* SIZE: button padding + font scale */}
            <div className='flex items-center gap-[1vw] mt-[3vh]'>
              <Link
                to='/checkout'
                className='zen bg-white text-black rounded-[999px] px-[4vh] py-[1.2vh] text-[2.4vw] lg:text-[0.9vw] font-semibold hover:bg-white/90 transition-colors'
              >
                Buy Now
              </Link>
              <Link
                to='/cart'
                className='zen border border-white/30 rounded-[999px] px-[4vh] py-[1.2vh] text-[2.4vw] lg:text-[0.9vw] font-semibold hover:border-white/60 transition-colors'
              >
                Add To Cart
              </Link>
              <button
                type='button'
                onClick={() => setIsWishlisted((prev) => !prev)}
                className='w-[5vh] h-[5vh] rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors'
                aria-label='Toggle wishlist'
              >
                <span className={`${isWishlisted ? 'text-red-500' : 'text-white'} text-[2.2vh]`}>
                  ♥
                </span>
              </button>
            </div>

            {/* SIZE: feature icon size + tile width */}
            <div className='flex flex-wrap gap-[2.2vw] mt-[3.5vh] text-[2.2vw] lg:text-[0.7vw] text-white/80'>
              {features.map((feature) => (
                <div key={feature.id} className='flex flex-col items-center gap-[0.8vh] w-[12vh]'>
                  <div className='w-[4vh] h-[4vh] rounded-full border border-white/20 flex items-center justify-center text-[2.2vh]'>
                    {feature.icon}
                  </div>
                  <span className='text-center whitespace-pre-line leading-tight'>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-[9vh] w-full flex justify-center'>
          {/* SIZE: related grid columns + gaps */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2vw]'>
            {relatedWatches.map((related) => (
              <WatchCard
                key={related.id}
                imageSrc={related.imageSrc}
                title={related.title}
                description={related.description}
                price={related.price}
                rating={related.rating}
                navigateTo={`/watch/${related.id}`}
                state={{ watch: related }}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WatchDetails

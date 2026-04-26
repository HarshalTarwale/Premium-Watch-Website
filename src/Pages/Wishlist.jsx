import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import WatchCard from '../Components/WatchCard.jsx'
import { getWishlistItems } from '../data/wishlistStore.js'

const Wishlist = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getWishlistItems())
  }, [])

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Navbar />

      <div className='pt-[16vh] px-[10vw]'>
        <div className='mb-[4vh]'>
          <h1 className='zen text-[4.5vh] tracking-[2px]'>Wishlist</h1>
        </div>

        {items.length === 0 ? (
          <div className='border border-white/10 rounded-[18px] bg-white/5 p-[6vh] text-center'>
            <p className='zen text-[2.5vh]'>Your wishlist is empty</p>
            <p className='text-white/60 text-[1.6vh] mt-[1vh]'>Tap the heart on a watch to save it here.</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2vw]'>
            {items.map((item) => (
              <WatchCard
                key={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                navigateTo={`/watch/${item.routeId ?? item.id}`}
                state={{ watch: item }}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Wishlist
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import {
  calculateTotals,
  formatPrice,
  getCartItems,
  parsePrice,
  removeItem,
  toggleSelected,
  updateQuantity
} from '../data/cartStore.js'

const Cart = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getCartItems())
  }, [])

  const totals = useMemo(() => calculateTotals(items), [items])

  const handleIncrease = (id, quantity) => {
    setItems(updateQuantity(id, quantity + 1))
  }

  const handleDecrease = (id, quantity) => {
    setItems(updateQuantity(id, Math.max(1, quantity - 1)))
  }

  const handleToggle = (id) => {
    setItems(toggleSelected(id))
  }

  const handleRemove = (id) => {
    setItems(removeItem(id))
  }

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Navbar />

      <div className='pt-[16vh] px-[10vw]'>
        {/* <div className='flex items-end justify-between mb-[4vh]'>
          <h1 className='zen text-[4.5vh] tracking-[2px]'>Cart</h1>
          <p className='text-white/60 text-[1.6vh]'>Selected: {totals.selectedCount}</p>
        </div> */}

        <div className='grid grid-cols-1 lg:grid-cols-[1.6fr_0.6fr] gap-[4vw]'>
          <div className='space-y-[3vh]'>
            {items.length === 0 ? (
              <div className='border border-white/10 rounded-[18px] bg-white/5 p-[6vh] text-center'>
                <p className='zen text-[2.5vh]'>Your cart is empty</p>
                <p className='text-white/60 text-[1.6vh] mt-[1vh]'>Add a watch to see it here.</p>
              </div>
            ) : (
              items.map((item) => {
                const baseUrl = import.meta.env.BASE_URL
                const normalizedPath = item.imageSrc?.replace(/^\/+/, '') || ''
                const encodedPath = normalizedPath
                  .split('/')
                  .map((segment) => encodeURIComponent(segment))
                  .join('/')
                const imageUrl = `${baseUrl}${encodedPath}`
                const lineTotal = parsePrice(item.price) * item.quantity

                return (
                  <div
                    key={item.id}
                    className='border border-white/10 rounded-[22px] bg-white/5 p-[2vh] flex flex-col md:flex-row gap-[2.5vh]'
                  >
                    <div className='relative w-[20vh] h-[20vh] rounded-[16px] overflow-hidden border border-white/10'>
                      <button
                        type='button'
                        onClick={() => handleToggle(item.id)}
                        className='absolute top-[1vh] left-[1vh] w-[2.6vh] h-[2.6vh] rounded-[6px] border border-white/60 bg-black/50 flex items-center justify-center'
                        aria-label='Select item'
                      >
                        {item.selected ? (
                          <span className='text-[1.6vh]'>✓</span>
                        ) : null}
                      </button>
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    <div className='flex-1 flex flex-col justify-between'>
                      <div>
                        <p className='zen text-[2.2vh] leading-tight'>{item.title}</p>
                        <p className='text-white/60 text-[1.5vh] mt-[0.6vh]'>
                          {item.description || 'Complete watch detail'}
                        </p>
                      </div>

                      <div className='flex flex-wrap items-center justify-between gap-[2vh] mt-[2vh]'>
                        <div className='flex items-center gap-[1.5vh]'>
                          <button
                            type='button'
                            onClick={() => handleDecrease(item.id, item.quantity)}
                            className='w-[3.2vh] h-[3.2vh] rounded-full border border-white/40 text-[2vh] flex items-center justify-center'
                          >
                            -
                          </button>
                          <span className='zen text-[2vh] w-[4vh] text-center'>{item.quantity}</span>
                          <button
                            type='button'
                            onClick={() => handleIncrease(item.id, item.quantity)}
                            className='w-[3.2vh] h-[3.2vh] rounded-full border border-white/40 text-[2vh] flex items-center justify-center'
                          >
                            +
                          </button>
                          <button
                            type='button'
                            onClick={() => handleRemove(item.id)}
                            className='w-[3.2vh] h-[3.2vh] rounded-full border border-white/60 flex items-center justify-center hover:border-white'
                            aria-label='Delete item'
                          >
                            <img
                              src={`${import.meta.env.BASE_URL}Icons/bin.png`}
                              alt='Delete'
                              className='h-[1.8vh] w-[1.8vh]'
                              style={{
                                filter:
                                  'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(332deg) brightness(104%) contrast(101%)'
                              }}
                            />
                          </button>
                        </div>

                        <div className='flex items-center gap-[2vh]'>
                          <p className='zen text-[2vh]'>{formatPrice(lineTotal)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          <div className='border border-white/10 rounded-[22px] bg-white/5 p-[3vh] h-fit'>
            <h2 className='zen text-[2.6vh] mb-[3vh]'>Order Summary</h2>
            <div className='space-y-[1.8vh] text-[1.7vh]'>
              <div className='flex justify-between text-white/70'>
                <span>Items Selected</span>
                <span>{totals.selectedCount}</span>
              </div>
              <div className='flex justify-between text-white/70'>
                <span>Total Price</span>
                <span>{formatPrice(totals.totalPrice)}</span>
              </div>
            </div>

            <Link
              to='/checkout'
              className='zen mt-[3vh] w-full bg-white text-black rounded-[999px] py-[1.6vh] text-[1.8vh] text-center block'
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Cart
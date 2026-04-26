import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import { calculateTotals, formatPrice, getCartItems } from '../data/cartStore.js'

const Checkout = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getCartItems())
  }, [])

  const totals = useMemo(() => calculateTotals(items), [items])

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Navbar />

      <div className='pt-[16vh] px-[10vw]'>
        <div className='mb-[4vh]'>
          <h1 className='zen text-[4.5vh] tracking-[2px]'>Checkout</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[4vw]'>
          <div className='space-y-[3vh]'>
            <div className='border border-white/10 rounded-[22px] bg-white/5 p-[3vh]'>
              <h2 className='zen text-[2.4vh] mb-[2vh]'>Shipping Details</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[2vh]'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
                <input
                  type='email'
                  placeholder='Email Address'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
                <input
                  type='text'
                  placeholder='Address'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] md:col-span-2 focus:outline-none focus:border-white/60'
                />
                <input
                  type='text'
                  placeholder='City'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
                <input
                  type='text'
                  placeholder='State'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
                <input
                  type='text'
                  placeholder='Postal Code'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                />
              </div>
            </div>

            <div className='border border-white/10 rounded-[22px] bg-white/5 p-[3vh]'>
              <h2 className='zen text-[2.4vh] mb-[2vh]'>Payment Details</h2>
              <div className='space-y-[2vh]'>
                <input
                  type='text'
                  placeholder='Cardholder Name'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] w-full focus:outline-none focus:border-white/60'
                />
                <input
                  type='text'
                  placeholder='Card Number'
                  className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] w-full tracking-[2px] focus:outline-none focus:border-white/60'
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[2vh]'>
                  <input
                    type='text'
                    placeholder='MM / YY'
                    className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                  />
                  <input
                    type='password'
                    placeholder='CVV'
                    className='bg-black/40 border border-white/20 rounded-[12px] px-[2vh] py-[1.4vh] text-[1.6vh] focus:outline-none focus:border-white/60'
                  />
                </div>
              </div>

              <button
                type='button'
                className='zen mt-[3vh] w-full bg-white text-black rounded-[999px] py-[1.8vh] text-[1.8vh]'
              >
                Make Payment
              </button>
            </div>
          </div>

          <div className='border border-white/10 rounded-[22px] bg-white/5 p-[3vh] h-fit'>
            <h2 className='zen text-[2.6vh] mb-[2vh]'>Order Summary</h2>
            <div className='space-y-[1.6vh] text-[1.7vh]'>
              <div className='flex justify-between text-white/70'>
                <span>Items Selected</span>
                <span>{totals.selectedCount}</span>
              </div>
              <div className='flex justify-between text-white/70'>
                <span>Total Price</span>
                <span>{formatPrice(totals.totalPrice)}</span>
              </div>
            </div>

            <div className='mt-[3vh] space-y-[1.6vh]'>
              {items.length === 0 ? (
                <p className='text-white/60 text-[1.6vh]'>No items in your cart.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className='flex items-center justify-between text-[1.5vh] text-white/70'>
                    <span className='truncate max-w-[60%]'>{item.title}</span>
                    <span>x{item.quantity}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Checkout

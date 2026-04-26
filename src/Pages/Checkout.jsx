import React from 'react'
import Navbar from '../Components/Navbar.jsx'

const Checkout = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
      <Navbar />
      <div className='text-white flex justify-center items-center h-[80vh]'>
        <h1 className='text-4xl'>Checkout Page</h1>
      </div>
    </div>
  )
}

export default Checkout

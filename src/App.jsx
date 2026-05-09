import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './Pages/Home.jsx' 
import Account from './Pages/Account.jsx'
import Login from './Pages/Login.jsx'
import CreateAccount from './Pages/CreateAccount.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import AllProducts from './Pages/AllProducts.jsx'
import Edge from './Pages/Edge.jsx'
import Nebula from './Pages/Nebula.jsx'
import Smart from './Pages/Smart.jsx'
import Xylys from './Pages/Xylys.jsx'
import Raga from './Pages/Raga.jsx'
import Fastract from './Pages/Fastract.jsx' 
import WatchDetails from './Pages/WatchDetails.jsx'
import Checkout from './Pages/Checkout.jsx'

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove()
    }
  }, [])

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/edge' element={<Edge />} />
        <Route path='/nebula' element={<Nebula />} />
        <Route path='/smart' element={<Smart />} />
        <Route path='/xylys' element={<Xylys />} />
        <Route path='/raga' element={<Raga />} />
        <Route path='/fastract' element={<Fastract />} />
        <Route path='/watch/:id' element={<WatchDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App

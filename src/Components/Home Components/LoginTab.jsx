import React, { useEffect, useRef } from 'react'
import Button1 from '../Buttons/Button1'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LoginTab = () => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 95%',
            end: 'bottom 80%',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      )
    }, cardRef)

    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.removeEventListener('load', handleLoad)
      ctx.revert()
    }
  }, [])

  return (
    <div className='mt-[30vh] mb-[10vh] flex w-full justify-center text-white'>
        <div ref={cardRef} className='bg-[#0d0d0d7a] w-[60%] rounded-[25px] py-[4vh] border-[1px] border-white/40 zen'>
            <div className='w-full flex justify-center text-[3vh]'><h1>LOGIN FOR THE BEST EXPERIENCE</h1></div>
            <div className='button1 w-full flex justify-center gap-[2vh] mt-[3vh]'>
              <Button1 className="border-white/40 bg-black" text="Login" to="/login" />
              <Button1 className="border-white/40 bg-black" text="Create Account" to="/create-account" />
            </div>
        </div>
      
    </div>
  )
}

export default LoginTab

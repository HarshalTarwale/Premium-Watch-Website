import React, { useEffect, useRef } from "react";
import Heading1 from "../Heading1.jsx";
import NewCard from "./NewCard.jsx";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger)

const NewArrival = () => {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !sliderRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(sliderRef.current.querySelectorAll('.swiper-slide'))

      gsap.fromTo(
        [sectionRef.current, ...slides],
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            end: 'bottom 80%',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      )
    }, sectionRef)

    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.removeEventListener('load', handleLoad)
      ctx.revert()
    }
  }, [])

  return (
    <div ref={sectionRef} className="w-full flex justify-center px-[12vw] text-white mb-[10vh]">
      <div className=" w-full ">
        <Heading1 className="mb-[10vh]"
          text="New Arrivals"
          style={{ WebkitTextStroke: "0.5px white" }}
        />
        <div
          ref={sliderRef}
          className="newcard-holder mt-[10vh]"
          style={{
            width: '100%',
            maxWidth: 'calc(var(--app-vh) * 120 + 60px)',
            margin: '0 auto'
          }}
        >
          <Swiper
            slidesPerView={3} 
            spaceBetween={30} // 🔧 ADJUST: Gap between cards in pixels
            pagination={{
              clickable: true, // Makes the dots clickable
              // 🎨 CUSTOMIZE DOTS: Add custom bullet styling in your CSS file
              // Use these classes: .swiper-pagination-bullet and .swiper-pagination-bullet-active
            }}
            modules={[Pagination]}
            className="mySwiper" // Add padding to the Swiper container
            // 🔧 ADDITIONAL OPTIONS:
            // loop={true} - Enable infinite loop
            // autoplay={{ delay: 3000 }} - Auto slide (need to import Autoplay module)
            // breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} - Responsive slides
          >
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/newarrival-1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/newarrival-2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/newarrival-3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/newarrival-4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/newarrival-5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/newarrival-6.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

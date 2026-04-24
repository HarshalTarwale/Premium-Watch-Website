import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed flex items-center gap-[2vh] bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/30 text-white px-1 pl-4 py-1 rounded-full hover:bg-white/20 transition-all duration-300 zen text-sm shadow-lg hover:scale-105'
          aria-label="Back to top"
        >
        Back To Top <div className='h-[5.5vh] w-[5.5vh] rounded-[1000px] bg-white flex items-center justify-center text-black'><FaArrowUp className='text-[3vh]'/></div>
        </button>
      )}
    </>
  )
}

export default Backtotop

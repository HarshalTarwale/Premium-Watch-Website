import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * FAQ Component
 * An accordion-style FAQ component matching Figma design specifications
 * 
 * *** EDIT QUESTIONS AND ANSWERS HERE ***
 */
const faqData = [
  {
    id: 1,
    question: "1. Are Titan watches water-resistant?",
    answer: "Yes, most Titan watches are water-resistant. The level of water resistance varies by model, typically ranging from 30m to 100m. Please check the specific model specifications for exact details."
  },
  {
    id: 2,
    question: "2. What is the warranty period for Titan watches?",
    answer: "Titan watches come with a 2-year international warranty from the date of purchase. This covers manufacturing defects but does not include damage from normal wear and tear or accidents."
  },
  {
    id: 3,
    question: "3. How do I authenticate my Titan watch?",
    answer: "Every genuine Titan watch comes with a unique serial number, warranty card, and authentic packaging. You can verify authenticity through the official Titan website or authorized dealers."
  },
  {
    id: 4,
    question: "4. Can I replace the battery myself?",
    answer: "We recommend getting the battery replaced by authorized Titan service centers to maintain water resistance and warranty validity. DIY battery replacement may void the warranty."
  },
  {
    id: 5,
    question: "5. Do you offer international shipping?",
    answer: "Yes, we offer worldwide shipping to most countries. Shipping times and costs vary by location. Check our shipping policy for detailed information about your region."
  }
]

const FAQ = () => {
  const [openId, setOpenId] = useState(null)
  const listRef = useRef(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  useEffect(() => {
    if (!listRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(listRef.current.children)

      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          stagger: 0.12,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 95%',
            end: 'bottom 80%',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      )
    }, listRef)

    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.removeEventListener('load', handleLoad)
      ctx.revert()
    }
  }, [])

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '650px', 
      margin: '0 auto',
      padding: '20px'
    }}>
      <div
        ref={listRef}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px' 
        }}
      >
        {faqData.map((faq) => (
          <FAQItem 
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => toggleFAQ(faq.id)}
          />
        ))}
      </div>
    </div>
  )
}

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={{
      width: '100%',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    }}>
      {/* Question Section - Clickable */}
      <button
        onClick={onClick}
        style={{
          width: '100%',
          height: '50px',
          padding: '0 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          textAlign: 'left',
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: 'calc(var(--app-vh) * 2)',
          lineHeight: 'normal',
          fontWeight: 'normal',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <span style={{ flex: 1, paddingRight: '20px' }}>
          {question}
        </span>
        <span style={{
          fontSize: '20.429px',
          fontWeight: 'normal',
          minWidth: '22px',
          textAlign: 'center',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>

      {/* Answer Section - Expandable */}
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        padding: isOpen ? '0 18px 18px 18px' : '0 18px',
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '15px',
          lineHeight: '1.6',
          fontFamily: 'sans-serif',
        }}>
          {answer}
        </div>
      </div>
    </div>
  )
}

export default FAQ

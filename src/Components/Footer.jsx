import React from 'react'
import Heading2 from './Heading2'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = ({ headingText = "TITAN", headingStyle = {} }) => {
  return (
    <div
      className='w-full relative'
      style={{
        paddingTop: 'calc(var(--app-vh) * 10)',
        marginBottom: 'calc(var(--app-vh) * 2)',
        paddingInline: 'calc(var(--app-vh) * 3)',
        marginTop: 'calc(var(--app-vh) * 20)'
      }}
    >
      {/* Background Heading */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 opacity-30'>
        <Heading2 text={headingText} style={headingStyle} />
      </div>

      {/* Footer Content */}
      <div
        className='footer relative backdrop-blur-[9.743px] bg-[rgba(23,23,23,0.1)] border-[#7e828d] border-[1px] rounded-[13px] max-w-[1390px] mx-auto px-[75px] py-[50px] text-white zen'
        style={{ marginTop: 'calc(var(--app-vh) * 12.9)' }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          {/* COLLECTIONS */}
          <div className='text-[11px] tracking-[0.26px]'>
            <h3 className='text-[11px] mb-4'>COLLECTIONS</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><a href='https://www.titan.co.in/titan-automatics.html' className='hover:opacity-70 transition-opacity underline text-[11px]'>Titan Automatics</a></li>
              <li><a href='https://www.titan.co.in/police-batman.html' className='hover:opacity-70 transition-opacity underline text-[11px]'>Police Batman</a></li>
              <li><a href='https://www.titan.co.in/titan-stellar.html' className='hover:opacity-70 transition-opacity underline text-[11px]'>Stellar</a></li>
              <li><a href='https://www.titan.co.in/raga-power-pearls.html?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Raga Power Pearls</a></li>
              <li><a href='https://www.titan.co.in/nebula-jewels?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Nebula Jewels</a></li>
              <li><a href='https://www.titan.co.in/titan-grandmaster?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Grandmaster</a></li>
              <li><a href='https://www.titan.co.in/titan-maritime?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Maritime</a></li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className='text-[11px] tracking-[0.24px]'>
            <h3 className='text-[11px] mb-4'>CUSTOMER SERVICE</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><a href='https://www.titan.co.in/content/payment-options.html?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Payment Options</a></li>
              <li><a href='#' className='hover:opacity-70 transition-opacity underline text-[11px]'>Track Order</a></li>
              <li><a href='https://www.titanencircle.com/' className='hover:opacity-70 transition-opacity underline text-[11px]'>Encircle Program</a></li>
              <li><a href='https://www.titan.co.in/store-locator?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Find Titan World Stores</a></li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className='text-[11px] tracking-[0.24px]'>
            <h3 className='text-[11px] mb-4'>CONTACT US</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><a href='tel:1800-266-0123' className='hover:opacity-70 transition-opacity underline text-[11px]'>1800-266-0123</a></li>
              <li><a href='mailto:customercare@titan.co.in' className='hover:opacity-70 transition-opacity underline text-[11px]'>customercare@titan.co.in</a></li>
              <li><a href='https://www.titan.co.in/help-faqs.html?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Help & Contact</a></li>
              <li><a href='https://www.titan.co.in/faq.html?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>FAQs</a></li>
            </ul>
          </div>

          {/* ABOUT TITAN */}
          <div className='text-[11px] tracking-[0.24px]'>
            <h3 className='text-[11px] mb-4'>ABOUT TITAN</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><a href='https://www.titan.co.in/brand-protection.html?lang=en_IN' className='hover:opacity-70 transition-opacity underline text-[11px]'>Brand Protection</a></li>
              <li><a href='https://www.titancompany.in/' className='hover:opacity-70 transition-opacity underline text-[11px]'>Corporate</a></li>
              <li><a href='https://careers.titan.co.in/Recruiting/candidates/candidates_home.aspx?rms=titan' className='hover:opacity-70 transition-opacity underline text-[11px]'>Careers</a></li>
              <li><a href='https://www.titan.co.in/blog.html?rms=titan' className='hover:opacity-70 transition-opacity underline text-[11px]'>Blog</a></li>
            </ul>
          </div>

          {/* DOWNLOAD & SOCIAL */}
          <div className='text-[11px] tracking-[0.41px]'>
            <h3 className='text-[11px] mb-4'>Download Titan World App</h3>
            <div className='flex gap-4 mb-6'>
              <a href='#' className='hover:opacity-70 transition-opacity'>
                <img src={`${import.meta.env.BASE_URL}Images/google-play.png`} alt='Google Play' className='h-[44px] w-auto' />
              </a>
              <a href='#' className='hover:opacity-70 transition-opacity'>
                <img src={`${import.meta.env.BASE_URL}Images/app-store.png`} alt='App Store' className='h-[44px] w-auto' />
              </a>
            </div>

            <h3 className='text-[11px] mb-4 mt-5'>Follow Us With</h3>
            <div className='flex gap-4 mb-6'>
              <a href='https://www.facebook.com/TitanWatches' target='_blank' rel='noopener noreferrer' className='hover:opacity-70 transition-opacity'>
                <div className='w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center'>
                  <span className='text-[16px]'><FaFacebookF /></span>
                </div>
              </a>
              <a href='https://www.instagram.com/titanwatches/' target='_blank' rel='noopener noreferrer' className='hover:opacity-70 transition-opacity'>
                <div className='w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center'>
                  <span className='text-[16px]'><BsInstagram /></span>
                </div>
              </a>
              <a href='https://www.youtube.com/user/TitanWatches' target='_blank' rel='noopener noreferrer' className='hover:opacity-70 transition-opacity'>
                <div className='w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center'>
                  <span className='text-[16px]'><FaYoutube /></span>
                </div>
              </a>
              <a href='https://twitter.com/titanwatches' target='_blank' rel='noopener noreferrer' className='hover:opacity-70 transition-opacity'>
                <div className='w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center'>
                  <span className='text-[16px]'><FaXTwitter /></span>
                </div>
              </a>
            </div>

          </div>    
        </div>

        {/* Copyright */}
        <div className='text-center mt-12 pt-8 border-t border-white/10 text-[11px] tracking-[0.26px]'>
          <p>
            © 2025 Titan Company Limited. All Rights Reserved | 
            <a href='https://www.titan.co.in/terms-and-conditions.html?lang=en_IN' className='underline hover:opacity-70 transition-opacity'> Terms & Conditions</a> | 
            <a href='https://www.titan.co.in/privacy-policy.html?lang=en_IN' className='underline hover:opacity-70 transition-opacity'> Privacy Policy</a> | 
            <a href='https://www.titan.co.in/wearable-privacy-policy.html?lang=en_IN' className='underline hover:opacity-70 transition-opacity'> Wearable Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

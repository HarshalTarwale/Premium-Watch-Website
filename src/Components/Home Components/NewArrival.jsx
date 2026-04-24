import React from "react";
import Heading1 from "../Heading1.jsx";
import NewCard from "./NewCard.jsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const NewArrival = () => {
  return (
    <div className="w-full flex justify-center px-[12vw] text-white mb-[10vh]">
      <div className=" w-full ">
        <Heading1
          text="New Arrivals"
          style={{ WebkitTextStroke: "0.5px white" }}
        />
        <div className="newcard-holder mt-[10vh] ">
          <Swiper
            slidesPerView={3} // 🔧 ADJUST: Number of cards visible at once (3 cards on screen)
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
              <NewCard imageSrc="Home/Arrival images/OMEGA50 anniversary - Charles Helleu 1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/NASA Took OMEGA's Speedmaster to the Moon; Swatch Took it Across the Galaxy 1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/NASA Took OMEGA's Speedmaster to the Moon; Swatch Took it Across the Galaxy (1) 1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/Jewelry — Dylan Griffin Photography 1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/download (3) 1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NewCard imageSrc="Home/Arrival images/download (2) 1.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'

const Watchs = () => {
  // Xylys watches data - using images from public/Xylys/Watches
  const xylysWatches = [
    // Row 1
    {
      id: 1,
      imageSrc: 'Xylys/Watches/Rolex Oyster Perpetual.jpg',
      title: 'Titan | Xylys Oyster Perpetual',
      description: 'Classic Luxury Timepiece',
      price: '₹ 24,995.00',
      rating: '4.9'
    },
    {
      id: 2,
      imageSrc: 'Xylys/Watches/Rolex Sky-Dweller.jpg',
      title: 'Titan | Xylys Sky-Dweller',
      description: 'Premium Dual Time Watch',
      price: '₹ 28,495.00',
      rating: '4.9'
    },
    {
      id: 3,
      imageSrc: 'Xylys/Watches/Tag Heuer (1).jpg',
      title: 'Titan | Xylys Heuer Edition',
      description: 'Sport Chronograph Watch',
      price: '₹ 22,795.00',
      rating: '4.8'
    },
    {
      id: 4,
      imageSrc: 'Xylys/Watches/Men Mesh Strap Round Pointer Quartz Watch (1).jpg',
      title: 'Titan | Xylys Mesh Classic',
      description: 'Elegant Mesh Strap Watch',
      price: '₹ 18,995.00',
      rating: '4.7'
    },
    {
      id: 5,
      imageSrc: 'Xylys/Watches/8 Rules Of The Watch - How, When, & Why To Wear Watches.jpg',
      title: 'Titan | Xylys Gentleman',
      description: 'Sophisticated Dress Watch',
      price: '₹ 20,495.00',
      rating: '4.8'
    },
    {
      id: 6,
      imageSrc: 'Xylys/Watches/casanova, him, husband, wealthy boy, wealthy,  gentleman.jpg',
      title: 'Titan | Xylys Casanova',
      description: 'Luxury Statement Watch',
      price: '₹ 26,995.00',
      rating: '4.9'
    },
    // Row 2
    {
      id: 7,
      imageSrc: 'Xylys/Watches/Rolex Baselworld 2019 - Rolex Predictions 2019 - Rolex Novelties 2019.jpg',
      title: 'Titan | Xylys Baselworld',
      description: 'Limited Edition Collection',
      price: '₹ 29,995.00',
      rating: '4.9'
    },
    {
      id: 8,
      imageSrc: 'Xylys/Watches/Rolex Oyster Perpetual 39 Ref_ 114300 In-depth Review.jpg',
      title: 'Titan | Xylys Perpetual 39',
      description: 'Premium Steel Watch',
      price: '₹ 25,795.00',
      rating: '4.8'
    },
    {
      id: 9,
      imageSrc: 'Xylys/Watches/download (9).jpg',
      title: 'Titan | Xylys Classic Series',
      description: 'Timeless Design Watch',
      price: '₹ 19,495.00',
      rating: '4.7'
    },
    {
      id: 10,
      imageSrc: 'Xylys/Watches/download (11).jpg',
      title: 'Titan | Xylys Modern Elite',
      description: 'Contemporary Style Watch',
      price: '₹ 21,295.00',
      rating: '4.8'
    },
    {
      id: 11,
      imageSrc: 'Xylys/Watches/download (12).jpg',
      title: 'Titan | Xylys Heritage',
      description: 'Traditional Luxury Watch',
      price: '₹ 23,495.00',
      rating: '4.8'
    },
    {
      id: 12,
      imageSrc: 'Xylys/Watches/download (13).jpg',
      title: 'Titan | Xylys Executive',
      description: 'Business Professional Watch',
      price: '₹ 22,995.00',
      rating: '4.7'
    },
    // Row 3
    {
      id: 13,
      imageSrc: 'Xylys/Watches/download (14).jpg',
      title: 'Titan | Xylys Prestige',
      description: 'High-End Dress Watch',
      price: '₹ 24,295.00',
      rating: '4.8'
    },
    {
      id: 14,
      imageSrc: 'Xylys/Watches/download (15).jpg',
      title: 'Titan | Xylys Premier',
      description: 'Premium Collection Watch',
      price: '₹ 27,495.00',
      rating: '4.9'
    },
    {
      id: 15,
      imageSrc: 'Xylys/Watches/download (16).jpg',
      title: 'Titan | Xylys Signature',
      description: 'Signature Design Watch',
      price: '₹ 25,995.00',
      rating: '4.8'
    },
    {
      id: 16,
      imageSrc: 'Xylys/Watches/Rolex Oyster Perpetual.jpg',
      title: 'Titan | Xylys Oyster Perpetual',
      description: 'Classic Luxury Timepiece',
      price: '₹ 24,995.00',
      rating: '4.9'
    },
    {
      id: 17,
      imageSrc: 'Xylys/Watches/Rolex Sky-Dweller.jpg',
      title: 'Titan | Xylys Sky-Dweller',
      description: 'Premium Dual Time Watch',
      price: '₹ 28,495.00',
      rating: '4.9'
    },
    {
      id: 18,
      imageSrc: 'Xylys/Watches/Tag Heuer (1).jpg',
      title: 'Titan | Xylys Heuer Edition',
      description: 'Sport Chronograph Watch',
      price: '₹ 22,795.00',
      rating: '4.8'
    },
    // Row 4
    {
      id: 19,
      imageSrc: 'Xylys/Watches/Men Mesh Strap Round Pointer Quartz Watch (1).jpg',
      title: 'Titan | Xylys Mesh Classic',
      description: 'Elegant Mesh Strap Watch',
      price: '₹ 18,995.00',
      rating: '4.7'
    },
    {
      id: 20,
      imageSrc: 'Xylys/Watches/8 Rules Of The Watch - How, When, & Why To Wear Watches.jpg',
      title: 'Titan | Xylys Gentleman',
      description: 'Sophisticated Dress Watch',
      price: '₹ 20,495.00',
      rating: '4.8'
    },
    {
      id: 21,
      imageSrc: 'Xylys/Watches/casanova, him, husband, wealthy boy, wealthy,  gentleman.jpg',
      title: 'Titan | Xylys Casanova',
      description: 'Luxury Statement Watch',
      price: '₹ 26,995.00',
      rating: '4.9'
    },
    {
      id: 22,
      imageSrc: 'Xylys/Watches/Rolex Baselworld 2019 - Rolex Predictions 2019 - Rolex Novelties 2019.jpg',
      title: 'Titan | Xylys Baselworld',
      description: 'Limited Edition Collection',
      price: '₹ 29,995.00',
      rating: '4.9'
    },
    {
      id: 23,
      imageSrc: 'Xylys/Watches/Rolex Oyster Perpetual 39 Ref_ 114300 In-depth Review.jpg',
      title: 'Titan | Xylys Perpetual 39',
      description: 'Premium Steel Watch',
      price: '₹ 25,795.00',
      rating: '4.8'
    },
    {
      id: 24,
      imageSrc: 'Xylys/Watches/download (9).jpg',
      title: 'Titan | Xylys Classic Series',
      description: 'Timeless Design Watch',
      price: '₹ 19,495.00',
      rating: '4.7'
    },
    // Row 5
    {
      id: 25,
      imageSrc: 'Xylys/Watches/download (11).jpg',
      title: 'Titan | Xylys Modern Elite',
      description: 'Contemporary Style Watch',
      price: '₹ 21,295.00',
      rating: '4.8'
    },
    {
      id: 26,
      imageSrc: 'Xylys/Watches/download (12).jpg',
      title: 'Titan | Xylys Heritage',
      description: 'Traditional Luxury Watch',
      price: '₹ 23,495.00',
      rating: '4.8'
    },
    {
      id: 27,
      imageSrc: 'Xylys/Watches/download (13).jpg',
      title: 'Titan | Xylys Executive',
      description: 'Business Professional Watch',
      price: '₹ 22,995.00',
      rating: '4.7'
    },
    {
      id: 28,
      imageSrc: 'Xylys/Watches/download (14).jpg',
      title: 'Titan | Xylys Prestige',
      description: 'High-End Dress Watch',
      price: '₹ 24,295.00',
      rating: '4.8'
    },
    {
      id: 29,
      imageSrc: 'Xylys/Watches/download (15).jpg',
      title: 'Titan | Xylys Premier',
      description: 'Premium Collection Watch',
      price: '₹ 27,495.00',
      rating: '4.9'
    },
    {
      id: 30,
      imageSrc: 'Xylys/Watches/download (16).jpg',
      title: 'Titan | Xylys Signature',
      description: 'Signature Design Watch',
      price: '₹ 25,995.00',
      rating: '4.8'
    },
    // Row 6
    {
      id: 31,
      imageSrc: 'Xylys/Watches/Rolex Oyster Perpetual.jpg',
      title: 'Titan | Xylys Oyster Perpetual',
      description: 'Classic Luxury Timepiece',
      price: '₹ 24,995.00',
      rating: '4.9'
    },
    {
      id: 32,
      imageSrc: 'Xylys/Watches/Rolex Sky-Dweller.jpg',
      title: 'Titan | Xylys Sky-Dweller',
      description: 'Premium Dual Time Watch',
      price: '₹ 28,495.00',
      rating: '4.9'
    },
    {
      id: 33,
      imageSrc: 'Xylys/Watches/Tag Heuer (1).jpg',
      title: 'Titan | Xylys Heuer Edition',
      description: 'Sport Chronograph Watch',
      price: '₹ 22,795.00',
      rating: '4.8'
    },
    {
      id: 34,
      imageSrc: 'Xylys/Watches/Men Mesh Strap Round Pointer Quartz Watch (1).jpg',
      title: 'Titan | Xylys Mesh Classic',
      description: 'Elegant Mesh Strap Watch',
      price: '₹ 18,995.00',
      rating: '4.7'
    },
    {
      id: 35,
      imageSrc: 'Xylys/Watches/8 Rules Of The Watch - How, When, & Why To Wear Watches.jpg',
      title: 'Titan | Xylys Gentleman',
      description: 'Sophisticated Dress Watch',
      price: '₹ 20,495.00',
      rating: '4.8'
    },
    {
      id: 36,
      imageSrc: 'Xylys/Watches/casanova, him, husband, wealthy boy, wealthy,  gentleman.jpg',
      title: 'Titan | Xylys Casanova',
      description: 'Luxury Statement Watch',
      price: '₹ 26,995.00',
      rating: '4.9'
    }
  ]

  return (
    <div className='w-full relative pt-[10vh] mt-[15vh]'>
        {/* Background XYLYS Heading */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 text="XYLYS" />
        </div>
        
        {/* Watch Catalog - Positioned over half of XYLYS text */}
        <div className='relative z-10 mt-[10vh]'>
          <WatchCatalog watches={xylysWatches} />
        </div>
    </div>
  )
}

export default Watchs


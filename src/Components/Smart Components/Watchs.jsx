import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'

const Watchs = () => {
  // Smart watches data - using images from public/Smart/Watches
  const smartWatches = [
    // Row 1
    {
      id: 1,
      imageSrc: 'Smart/Watches/Apple ultra.jpg',
      title: 'Titan | Smart Watch Ultra',
      description: 'Premium Fitness Smartwatch',
      price: '₹ 12,495.00',
      rating: '4.8'
    },
    {
      id: 2,
      imageSrc: 'Smart/Watches/Apple watch 2023.jpg',
      title: 'Titan | Smart Watch Series',
      description: 'Latest Generation Smartwatch',
      price: '₹ 14,995.00',
      rating: '4.9'
    },
    {
      id: 3,
      imageSrc: 'Smart/Watches/Apple Watch Silicone Bands by Apple Watch Bands.jpg',
      title: 'Titan | Smart Watch Sport',
      description: 'Silicone Band Smartwatch',
      price: '₹ 9,795.00',
      rating: '4.6'
    },
    {
      id: 4,
      imageSrc: 'Smart/Watches/Incoming call waterproof sports watch - Black.jpg',
      title: 'Titan | Smart Watch Waterproof',
      description: 'Sports Fitness Tracker',
      price: '₹ 8,995.00',
      rating: '4.5'
    },
    {
      id: 5,
      imageSrc: 'Smart/Watches/Katapult Design — (via (349) Pinterest).jpg',
      title: 'Titan | Smart Watch Designer',
      description: 'Minimalist Design Smartwatch',
      price: '₹ 11,295.00',
      rating: '4.7'
    },
    {
      id: 6,
      imageSrc: 'Smart/Watches/Nava Bands (1).jpg',
      title: 'Titan | Smart Watch Nava',
      description: 'Premium Band Smartwatch',
      price: '₹ 10,495.00',
      rating: '4.6'
    },
    // Row 2
    {
      id: 7,
      imageSrc: 'Smart/Watches/Nava Bands.jpg',
      title: 'Titan | Smart Watch Nava Pro',
      description: 'Advanced Fitness Tracker',
      price: '₹ 10,795.00',
      rating: '4.7'
    },
    {
      id: 8,
      imageSrc: 'Smart/Watches/new skagen falster smartwatch minimizes style and maximizes technology.jpg',
      title: 'Titan | Smart Watch Falster',
      description: 'Stylish Tech Smartwatch',
      price: '₹ 13,295.00',
      rating: '4.8'
    },
    {
      id: 9,
      imageSrc: 'Smart/Watches/Shadow Clock App for AndroidWear – Design by Craig Ward.jpg',
      title: 'Titan | Smart Watch Shadow',
      description: 'Android Wear Smartwatch',
      price: '₹ 9,995.00',
      rating: '4.5'
    },
    {
      id: 10,
      imageSrc: 'Smart/Watches/Skagen minimal smartwatch made without _unnecessary complications_.jpg',
      title: 'Titan | Smart Watch Minimal',
      description: 'Clean Design Smartwatch',
      price: '₹ 11,795.00',
      rating: '4.7'
    },
    {
      id: 11,
      imageSrc: 'Smart/Watches/STERNGLAS Bauhaus watches – designed in Hamburg.jpg',
      title: 'Titan | Smart Watch Bauhaus',
      description: 'German Design Smartwatch',
      price: '₹ 12,995.00',
      rating: '4.8'
    },
    {
      id: 12,
      imageSrc: 'Smart/Watches/download (7).jpg',
      title: 'Titan | Smart Watch Classic',
      description: 'Traditional Style Smartwatch',
      price: '₹ 8,495.00',
      rating: '4.4'
    },
    // Row 3
    {
      id: 13,
      imageSrc: 'Smart/Watches/download (8).jpg',
      title: 'Titan | Smart Watch Essential',
      description: 'Everyday Smartwatch',
      price: '₹ 7,995.00',
      rating: '4.3'
    },
    {
      id: 14,
      imageSrc: 'Smart/Watches/52ca8f09-7c1f-4188-b9b4-58d126c04597.jpg',
      title: 'Titan | Smart Watch Active',
      description: 'Activity Tracking Smartwatch',
      price: '₹ 9,495.00',
      rating: '4.5'
    },
    {
      id: 15,
      imageSrc: 'Smart/Watches/a45a3505-aa2e-49b3-8536-0dabad7f1b72.jpg',
      title: 'Titan | Smart Watch Elite',
      description: 'Premium Tech Smartwatch',
      price: '₹ 13,795.00',
      rating: '4.8'
    },
    {
      id: 16,
      imageSrc: 'Smart/Watches/Apple ultra.jpg',
      title: 'Titan | Smart Watch Ultra',
      description: 'Premium Fitness Smartwatch',
      price: '₹ 12,495.00',
      rating: '4.8'
    },
    {
      id: 17,
      imageSrc: 'Smart/Watches/Apple watch 2023.jpg',
      title: 'Titan | Smart Watch Series',
      description: 'Latest Generation Smartwatch',
      price: '₹ 14,995.00',
      rating: '4.9'
    },
    {
      id: 18,
      imageSrc: 'Smart/Watches/Apple Watch Silicone Bands by Apple Watch Bands.jpg',
      title: 'Titan | Smart Watch Sport',
      description: 'Silicone Band Smartwatch',
      price: '₹ 9,795.00',
      rating: '4.6'
    },
    // Row 4
    {
      id: 19,
      imageSrc: 'Smart/Watches/Incoming call waterproof sports watch - Black.jpg',
      title: 'Titan | Smart Watch Waterproof',
      description: 'Sports Fitness Tracker',
      price: '₹ 8,995.00',
      rating: '4.5'
    },
    {
      id: 20,
      imageSrc: 'Smart/Watches/Katapult Design — (via (349) Pinterest).jpg',
      title: 'Titan | Smart Watch Designer',
      description: 'Minimalist Design Smartwatch',
      price: '₹ 11,295.00',
      rating: '4.7'
    },
    {
      id: 21,
      imageSrc: 'Smart/Watches/Nava Bands (1).jpg',
      title: 'Titan | Smart Watch Nava',
      description: 'Premium Band Smartwatch',
      price: '₹ 10,495.00',
      rating: '4.6'
    },
    {
      id: 22,
      imageSrc: 'Smart/Watches/Nava Bands.jpg',
      title: 'Titan | Smart Watch Nava Pro',
      description: 'Advanced Fitness Tracker',
      price: '₹ 10,795.00',
      rating: '4.7'
    },
    {
      id: 23,
      imageSrc: 'Smart/Watches/new skagen falster smartwatch minimizes style and maximizes technology.jpg',
      title: 'Titan | Smart Watch Falster',
      description: 'Stylish Tech Smartwatch',
      price: '₹ 13,295.00',
      rating: '4.8'
    },
    {
      id: 24,
      imageSrc: 'Smart/Watches/Shadow Clock App for AndroidWear – Design by Craig Ward.jpg',
      title: 'Titan | Smart Watch Shadow',
      description: 'Android Wear Smartwatch',
      price: '₹ 9,995.00',
      rating: '4.5'
    },
    // Row 5
    {
      id: 25,
      imageSrc: 'Smart/Watches/Skagen minimal smartwatch made without _unnecessary complications_.jpg',
      title: 'Titan | Smart Watch Minimal',
      description: 'Clean Design Smartwatch',
      price: '₹ 11,795.00',
      rating: '4.7'
    },
    {
      id: 26,
      imageSrc: 'Smart/Watches/STERNGLAS Bauhaus watches – designed in Hamburg.jpg',
      title: 'Titan | Smart Watch Bauhaus',
      description: 'German Design Smartwatch',
      price: '₹ 12,995.00',
      rating: '4.8'
    },
    {
      id: 27,
      imageSrc: 'Smart/Watches/download (7).jpg',
      title: 'Titan | Smart Watch Classic',
      description: 'Traditional Style Smartwatch',
      price: '₹ 8,495.00',
      rating: '4.4'
    },
    {
      id: 28,
      imageSrc: 'Smart/Watches/download (8).jpg',
      title: 'Titan | Smart Watch Essential',
      description: 'Everyday Smartwatch',
      price: '₹ 7,995.00',
      rating: '4.3'
    },
    {
      id: 29,
      imageSrc: 'Smart/Watches/52ca8f09-7c1f-4188-b9b4-58d126c04597.jpg',
      title: 'Titan | Smart Watch Active',
      description: 'Activity Tracking Smartwatch',
      price: '₹ 9,495.00',
      rating: '4.5'
    },
    {
      id: 30,
      imageSrc: 'Smart/Watches/a45a3505-aa2e-49b3-8536-0dabad7f1b72.jpg',
      title: 'Titan | Smart Watch Elite',
      description: 'Premium Tech Smartwatch',
      price: '₹ 13,795.00',
      rating: '4.8'
    },
    // Row 6
    {
      id: 31,
      imageSrc: 'Smart/Watches/Apple ultra.jpg',
      title: 'Titan | Smart Watch Ultra',
      description: 'Premium Fitness Smartwatch',
      price: '₹ 12,495.00',
      rating: '4.8'
    },
    {
      id: 32,
      imageSrc: 'Smart/Watches/Apple watch 2023.jpg',
      title: 'Titan | Smart Watch Series',
      description: 'Latest Generation Smartwatch',
      price: '₹ 14,995.00',
      rating: '4.9'
    },
    {
      id: 33,
      imageSrc: 'Smart/Watches/Apple Watch Silicone Bands by Apple Watch Bands.jpg',
      title: 'Titan | Smart Watch Sport',
      description: 'Silicone Band Smartwatch',
      price: '₹ 9,795.00',
      rating: '4.6'
    },
    {
      id: 34,
      imageSrc: 'Smart/Watches/Incoming call waterproof sports watch - Black.jpg',
      title: 'Titan | Smart Watch Waterproof',
      description: 'Sports Fitness Tracker',
      price: '₹ 8,995.00',
      rating: '4.5'
    },
    {
      id: 35,
      imageSrc: 'Smart/Watches/Katapult Design — (via (349) Pinterest).jpg',
      title: 'Titan | Smart Watch Designer',
      description: 'Minimalist Design Smartwatch',
      price: '₹ 11,295.00',
      rating: '4.7'
    },
    {
      id: 36,
      imageSrc: 'Smart/Watches/Nava Bands (1).jpg',
      title: 'Titan | Smart Watch Nava',
      description: 'Premium Band Smartwatch',
      price: '₹ 10,495.00',
      rating: '4.6'
    }
  ]

  return (
    <div className='w-full relative pt-[10vh] mt-[15vh]'>
        {/* Background SMART Heading */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 text="SMART" />
        </div>
        
        {/* Watch Catalog - Positioned over half of SMART text */}
        <div className='relative z-10 mt-[10vh]'>
          <WatchCatalog watches={smartWatches} />
        </div>
    </div>
  )
}

export default Watchs

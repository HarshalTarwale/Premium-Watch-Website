import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'

const Watchs = () => {
  // Nebula watches data - using images from public/Nebula/Watches
  const nebulaWatches = [
    // Row 1
    {
      id: 1,
      imageSrc: 'Nebula/Watches/Classy watch.jpg',
      title: 'Titan | Nebula Classy Dial Quartz',
      description: 'Elegant Strap watch for Women',
      price: '₹ 8,495.00',
      rating: '4.5'
    },
    {
      id: 2,
      imageSrc: 'Nebula/Watches/Olivia Burton London.jpg',
      title: 'Titan | Nebula London Edition',
      description: 'Premium Leather Strap watch',
      price: '₹ 9,195.00',
      rating: '4.6'
    },
    {
      id: 3,
      imageSrc: 'Nebula/Watches/Latest Elegant Watches.jpg',
      title: 'Titan | Nebula Elegant Series',
      description: 'Modern Design watch for Women',
      price: '₹ 7,895.00',
      rating: '4.4'
    },
    {
      id: 4,
      imageSrc: 'Nebula/Watches/Floral Strap Round Pointer Quartz Watch.jpg',
      title: 'Titan | Nebula Floral Edition',
      description: 'Floral Strap Quartz watch',
      price: '₹ 6,995.00',
      rating: '4.3'
    },
    {
      id: 5,
      imageSrc: 'Nebula/Watches/Rhinestone Decor Round Pointer Quartz Watch.jpg',
      title: 'Titan | Nebula Rhinestone',
      description: 'Rhinestone Decor Quartz watch',
      price: '₹ 8,795.00',
      rating: '4.7'
    },
    {
      id: 6,
      imageSrc: 'Nebula/Watches/Round Metal Pointer Watch.jpg',
      title: 'Titan | Nebula Metal Series',
      description: 'Round Metal Pointer watch',
      price: '₹ 7,495.00',
      rating: '4.5'
    },
    // Row 2
    {
      id: 7,
      imageSrc: 'Nebula/Watches/RELÓGIO MALHA DE AÇO ROSÉ.jpg',
      title: 'Titan | Nebula Rosé Edition',
      description: 'Steel Mesh Strap watch',
      price: '₹ 9,495.00',
      rating: '4.8'
    },
    {
      id: 8,
      imageSrc: 'Nebula/Watches/visit for more.jpg',
      title: 'Titan | Nebula Premium Collection',
      description: 'Luxury Design watch',
      price: '₹ 8,995.00',
      rating: '4.6'
    },
    {
      id: 9,
      imageSrc: 'Nebula/Watches/download (7).jpg',
      title: 'Titan | Nebula Classic Series',
      description: 'Timeless Design watch',
      price: '₹ 7,295.00',
      rating: '4.4'
    },
    {
      id: 10,
      imageSrc: 'Nebula/Watches/download (8).jpg',
      title: 'Titan | Nebula Sport Edition',
      description: 'Active Lifestyle watch',
      price: '₹ 6,795.00',
      rating: '4.3'
    },
    {
      id: 11,
      imageSrc: 'Nebula/Watches/download (9).jpg',
      title: 'Titan | Nebula Minimalist',
      description: 'Simple Elegant watch',
      price: '₹ 7,595.00',
      rating: '4.5'
    },
    {
      id: 12,
      imageSrc: 'Nebula/Watches/download (10).jpg',
      title: 'Titan | Nebula Designer Series',
      description: 'Fashion Forward watch',
      price: '₹ 8,295.00',
      rating: '4.6'
    },
    // Row 3
    {
      id: 13,
      imageSrc: 'Nebula/Watches/download (11).jpg',
      title: 'Titan | Nebula Chic Collection',
      description: 'Trendy Design watch',
      price: '₹ 7,995.00',
      rating: '4.5'
    },
    {
      id: 14,
      imageSrc: 'Nebula/Watches/download (12).jpg',
      title: 'Titan | Nebula Statement',
      description: 'Bold Style watch',
      price: '₹ 8,595.00',
      rating: '4.7'
    },
    {
      id: 15,
      imageSrc: 'Nebula/Watches/download (13).jpg',
      title: 'Titan | Nebula Deluxe',
      description: 'Premium Quality watch',
      price: '₹ 9,295.00',
      rating: '4.8'
    },
    {
      id: 16,
      imageSrc: 'Nebula/Watches/download (14).jpg',
      title: 'Titan | Nebula Heritage',
      description: 'Classic Timepiece watch',
      price: '₹ 8,895.00',
      rating: '4.6'
    },
    {
      id: 17,
      imageSrc: 'Nebula/Watches/Classy watch.jpg',
      title: 'Titan | Nebula Classy Dial Quartz',
      description: 'Elegant Strap watch for Women',
      price: '₹ 8,495.00',
      rating: '4.5'
    },
    {
      id: 18,
      imageSrc: 'Nebula/Watches/Olivia Burton London.jpg',
      title: 'Titan | Nebula London Edition',
      description: 'Premium Leather Strap watch',
      price: '₹ 9,195.00',
      rating: '4.6'
    },
    // Row 4
    {
      id: 19,
      imageSrc: 'Nebula/Watches/Latest Elegant Watches.jpg',
      title: 'Titan | Nebula Elegant Series',
      description: 'Modern Design watch for Women',
      price: '₹ 7,895.00',
      rating: '4.4'
    },
    {
      id: 20,
      imageSrc: 'Nebula/Watches/Floral Strap Round Pointer Quartz Watch.jpg',
      title: 'Titan | Nebula Floral Edition',
      description: 'Floral Strap Quartz watch',
      price: '₹ 6,995.00',
      rating: '4.3'
    },
    {
      id: 21,
      imageSrc: 'Nebula/Watches/Rhinestone Decor Round Pointer Quartz Watch.jpg',
      title: 'Titan | Nebula Rhinestone',
      description: 'Rhinestone Decor Quartz watch',
      price: '₹ 8,795.00',
      rating: '4.7'
    },
    {
      id: 22,
      imageSrc: 'Nebula/Watches/Round Metal Pointer Watch.jpg',
      title: 'Titan | Nebula Metal Series',
      description: 'Round Metal Pointer watch',
      price: '₹ 7,495.00',
      rating: '4.5'
    },
    {
      id: 23,
      imageSrc: 'Nebula/Watches/RELÓGIO MALHA DE AÇO ROSÉ.jpg',
      title: 'Titan | Nebula Rosé Edition',
      description: 'Steel Mesh Strap watch',
      price: '₹ 9,495.00',
      rating: '4.8'
    },
    {
      id: 24,
      imageSrc: 'Nebula/Watches/visit for more.jpg',
      title: 'Titan | Nebula Premium Collection',
      description: 'Luxury Design watch',
      price: '₹ 8,995.00',
      rating: '4.6'
    },
    // Row 5
    {
      id: 25,
      imageSrc: 'Nebula/Watches/download (7).jpg',
      title: 'Titan | Nebula Classic Series',
      description: 'Timeless Design watch',
      price: '₹ 7,295.00',
      rating: '4.4'
    },
    {
      id: 26,
      imageSrc: 'Nebula/Watches/download (8).jpg',
      title: 'Titan | Nebula Sport Edition',
      description: 'Active Lifestyle watch',
      price: '₹ 6,795.00',
      rating: '4.3'
    },
    {
      id: 27,
      imageSrc: 'Nebula/Watches/download (9).jpg',
      title: 'Titan | Nebula Minimalist',
      description: 'Simple Elegant watch',
      price: '₹ 7,595.00',
      rating: '4.5'
    },
    {
      id: 28,
      imageSrc: 'Nebula/Watches/download (10).jpg',
      title: 'Titan | Nebula Designer Series',
      description: 'Fashion Forward watch',
      price: '₹ 8,295.00',
      rating: '4.6'
    },
    {
      id: 29,
      imageSrc: 'Nebula/Watches/download (11).jpg',
      title: 'Titan | Nebula Chic Collection',
      description: 'Trendy Design watch',
      price: '₹ 7,995.00',
      rating: '4.5'
    },
    {
      id: 30,
      imageSrc: 'Nebula/Watches/download (12).jpg',
      title: 'Titan | Nebula Statement',
      description: 'Bold Style watch',
      price: '₹ 8,595.00',
      rating: '4.7'
    },
    // Row 6
    {
      id: 31,
      imageSrc: 'Nebula/Watches/download (13).jpg',
      title: 'Titan | Nebula Deluxe',
      description: 'Premium Quality watch',
      price: '₹ 9,295.00',
      rating: '4.8'
    },
    {
      id: 32,
      imageSrc: 'Nebula/Watches/download (14).jpg',
      title: 'Titan | Nebula Heritage',
      description: 'Classic Timepiece watch',
      price: '₹ 8,895.00',
      rating: '4.6'
    },
    {
      id: 33,
      imageSrc: 'Nebula/Watches/Classy watch.jpg',
      title: 'Titan | Nebula Classy Dial Quartz',
      description: 'Elegant Strap watch for Women',
      price: '₹ 8,495.00',
      rating: '4.5'
    },
    {
      id: 34,
      imageSrc: 'Nebula/Watches/Olivia Burton London.jpg',
      title: 'Titan | Nebula London Edition',
      description: 'Premium Leather Strap watch',
      price: '₹ 9,195.00',
      rating: '4.6'
    },
    {
      id: 35,
      imageSrc: 'Nebula/Watches/Latest Elegant Watches.jpg',
      title: 'Titan | Nebula Elegant Series',
      description: 'Modern Design watch for Women',
      price: '₹ 7,895.00',
      rating: '4.4'
    },
    {
      id: 36,
      imageSrc: 'Nebula/Watches/Floral Strap Round Pointer Quartz Watch.jpg',
      title: 'Titan | Nebula Floral Edition',
      description: 'Floral Strap Quartz watch',
      price: '₹ 6,995.00',
      rating: '4.3'
    }
  ]

  return (
    <div className='w-full relative pt-[10vh] mt-[15vh]'>
        {/* Background NEBULA Heading */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 
            text="NEBULA" 
            style={{
              fontSize: '120px',
              letterSpacing: '40px',
              marginRight: '-40px'
            }}
          />
        </div>
        
        {/* Watch Catalog - Positioned over half of NEBULA text */}
        <div className='relative z-10 mt-[5vh]'>
          <WatchCatalog watches={nebulaWatches} />
        </div>
    </div>
  )
}

export default Watchs

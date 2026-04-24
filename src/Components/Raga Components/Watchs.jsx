import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'

const Watchs = () => {
  // Raga watches data - using images from public/Raga/watches
  const ragaWatches = [
    // Row 1
    {
      id: 1,
      imageSrc: 'Raga/watches/Rolex Milgauss.jpg',
      title: 'Titan | Raga Milgauss Edition',
      description: 'Elegant Luxury Timepiece',
      price: '₹ 16,495.00',
      rating: '4.8'
    },
    {
      id: 2,
      imageSrc: 'Raga/watches/IWC Pilot Watch Chronograph.jpg',
      title: 'Titan | Raga Pilot Chronograph',
      description: 'Aviation Inspired Watch',
      price: '₹ 18,995.00',
      rating: '4.7'
    },
    {
      id: 3,
      imageSrc: 'Raga/watches/Product Photography.jpg',
      title: 'Titan | Raga Premium Collection',
      description: 'Sophisticated Design Watch',
      price: '₹ 14,795.00',
      rating: '4.6'
    },
    {
      id: 4,
      imageSrc: 'Raga/watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg',
      title: 'Titan | Raga Field Watch',
      description: 'Adventure Ready Timepiece',
      price: '₹ 12,995.00',
      rating: '4.5'
    },
    {
      id: 5,
      imageSrc: 'Raga/watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg',
      title: 'Titan | Raga Space Edition',
      description: 'NASA Inspired Watch',
      price: '₹ 19,495.00',
      rating: '4.8'
    },
    {
      id: 6,
      imageSrc: 'Raga/watches/Men Mesh Strap Round Pointer Quartz Watch (1).jpg',
      title: 'Titan | Raga Mesh Strap',
      description: 'Modern Mesh Band Watch',
      price: '₹ 13,295.00',
      rating: '4.6'
    },
    // Row 2
    {
      id: 7,
      imageSrc: 'Raga/watches/Rolex Baselworld 2019 - Rolex Predictions 2019 - Rolex Novelties 2019.jpg',
      title: 'Titan | Raga Baselworld',
      description: 'Limited Edition Collection',
      price: '₹ 21,995.00',
      rating: '4.9'
    },
    {
      id: 8,
      imageSrc: 'Raga/watches/Rolex Oyster Perpetual 39 Ref_ 114300 In-depth Review.jpg',
      title: 'Titan | Raga Perpetual 39',
      description: 'Classic Steel Watch',
      price: '₹ 17,795.00',
      rating: '4.7'
    },
    {
      id: 9,
      imageSrc: 'Raga/watches/download (11).jpg',
      title: 'Titan | Raga Classic Series',
      description: 'Timeless Elegance Watch',
      price: '₹ 14,495.00',
      rating: '4.6'
    },
    {
      id: 10,
      imageSrc: 'Raga/watches/download (12).jpg',
      title: 'Titan | Raga Sport Edition',
      description: 'Active Lifestyle Watch',
      price: '₹ 13,795.00',
      rating: '4.5'
    },
    {
      id: 11,
      imageSrc: 'Raga/watches/download (13).jpg',
      title: 'Titan | Raga Designer',
      description: 'Fashion Forward Watch',
      price: '₹ 15,295.00',
      rating: '4.7'
    },
    {
      id: 12,
      imageSrc: 'Raga/watches/download (14).jpg',
      title: 'Titan | Raga Executive',
      description: 'Professional Business Watch',
      price: '₹ 16,995.00',
      rating: '4.8'
    },
    // Row 3
    {
      id: 13,
      imageSrc: 'Raga/watches/download (15).jpg',
      title: 'Titan | Raga Heritage',
      description: 'Traditional Luxury Watch',
      price: '₹ 18,295.00',
      rating: '4.7'
    },
    {
      id: 14,
      imageSrc: 'Raga/watches/download (16).jpg',
      title: 'Titan | Raga Prestige',
      description: 'High-End Timepiece',
      price: '₹ 19,995.00',
      rating: '4.8'
    },
    {
      id: 15,
      imageSrc: 'Raga/watches/download (17).jpg',
      title: 'Titan | Raga Signature',
      description: 'Signature Collection Watch',
      price: '₹ 17,495.00',
      rating: '4.7'
    },
    {
      id: 16,
      imageSrc: 'Raga/watches/Rolex Milgauss.jpg',
      title: 'Titan | Raga Milgauss Edition',
      description: 'Elegant Luxury Timepiece',
      price: '₹ 16,495.00',
      rating: '4.8'
    },
    {
      id: 17,
      imageSrc: 'Raga/watches/IWC Pilot Watch Chronograph.jpg',
      title: 'Titan | Raga Pilot Chronograph',
      description: 'Aviation Inspired Watch',
      price: '₹ 18,995.00',
      rating: '4.7'
    },
    {
      id: 18,
      imageSrc: 'Raga/watches/Product Photography.jpg',
      title: 'Titan | Raga Premium Collection',
      description: 'Sophisticated Design Watch',
      price: '₹ 14,795.00',
      rating: '4.6'
    },
    // Row 4
    {
      id: 19,
      imageSrc: 'Raga/watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg',
      title: 'Titan | Raga Field Watch',
      description: 'Adventure Ready Timepiece',
      price: '₹ 12,995.00',
      rating: '4.5'
    },
    {
      id: 20,
      imageSrc: 'Raga/watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg',
      title: 'Titan | Raga Space Edition',
      description: 'NASA Inspired Watch',
      price: '₹ 19,495.00',
      rating: '4.8'
    },
    {
      id: 21,
      imageSrc: 'Raga/watches/Men Mesh Strap Round Pointer Quartz Watch (1).jpg',
      title: 'Titan | Raga Mesh Strap',
      description: 'Modern Mesh Band Watch',
      price: '₹ 13,295.00',
      rating: '4.6'
    },
    {
      id: 22,
      imageSrc: 'Raga/watches/Rolex Baselworld 2019 - Rolex Predictions 2019 - Rolex Novelties 2019.jpg',
      title: 'Titan | Raga Baselworld',
      description: 'Limited Edition Collection',
      price: '₹ 21,995.00',
      rating: '4.9'
    },
    {
      id: 23,
      imageSrc: 'Raga/watches/Rolex Oyster Perpetual 39 Ref_ 114300 In-depth Review.jpg',
      title: 'Titan | Raga Perpetual 39',
      description: 'Classic Steel Watch',
      price: '₹ 17,795.00',
      rating: '4.7'
    },
    {
      id: 24,
      imageSrc: 'Raga/watches/download (11).jpg',
      title: 'Titan | Raga Classic Series',
      description: 'Timeless Elegance Watch',
      price: '₹ 14,495.00',
      rating: '4.6'
    },
    // Row 5
    {
      id: 25,
      imageSrc: 'Raga/watches/download (12).jpg',
      title: 'Titan | Raga Sport Edition',
      description: 'Active Lifestyle Watch',
      price: '₹ 13,795.00',
      rating: '4.5'
    },
    {
      id: 26,
      imageSrc: 'Raga/watches/download (13).jpg',
      title: 'Titan | Raga Designer',
      description: 'Fashion Forward Watch',
      price: '₹ 15,295.00',
      rating: '4.7'
    },
    {
      id: 27,
      imageSrc: 'Raga/watches/download (14).jpg',
      title: 'Titan | Raga Executive',
      description: 'Professional Business Watch',
      price: '₹ 16,995.00',
      rating: '4.8'
    },
    {
      id: 28,
      imageSrc: 'Raga/watches/download (15).jpg',
      title: 'Titan | Raga Heritage',
      description: 'Traditional Luxury Watch',
      price: '₹ 18,295.00',
      rating: '4.7'
    },
    {
      id: 29,
      imageSrc: 'Raga/watches/download (16).jpg',
      title: 'Titan | Raga Prestige',
      description: 'High-End Timepiece',
      price: '₹ 19,995.00',
      rating: '4.8'
    },
    {
      id: 30,
      imageSrc: 'Raga/watches/download (17).jpg',
      title: 'Titan | Raga Signature',
      description: 'Signature Collection Watch',
      price: '₹ 17,495.00',
      rating: '4.7'
    },
    // Row 6
    {
      id: 31,
      imageSrc: 'Raga/watches/Rolex Milgauss.jpg',
      title: 'Titan | Raga Milgauss Edition',
      description: 'Elegant Luxury Timepiece',
      price: '₹ 16,495.00',
      rating: '4.8'
    },
    {
      id: 32,
      imageSrc: 'Raga/watches/IWC Pilot Watch Chronograph.jpg',
      title: 'Titan | Raga Pilot Chronograph',
      description: 'Aviation Inspired Watch',
      price: '₹ 18,995.00',
      rating: '4.7'
    },
    {
      id: 33,
      imageSrc: 'Raga/watches/Product Photography.jpg',
      title: 'Titan | Raga Premium Collection',
      description: 'Sophisticated Design Watch',
      price: '₹ 14,795.00',
      rating: '4.6'
    },
    {
      id: 34,
      imageSrc: 'Raga/watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg',
      title: 'Titan | Raga Field Watch',
      description: 'Adventure Ready Timepiece',
      price: '₹ 12,995.00',
      rating: '4.5'
    },
    {
      id: 35,
      imageSrc: 'Raga/watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg',
      title: 'Titan | Raga Space Edition',
      description: 'NASA Inspired Watch',
      price: '₹ 19,495.00',
      rating: '4.8'
    },
    {
      id: 36,
      imageSrc: 'Raga/watches/Men Mesh Strap Round Pointer Quartz Watch (1).jpg',
      title: 'Titan | Raga Mesh Strap',
      description: 'Modern Mesh Band Watch',
      price: '₹ 13,295.00',
      rating: '4.6'
    }
  ]

  return (
    <div className='w-full relative pt-[10vh] mt-[15vh]'>
        {/* Background RAGA Heading */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 text="RAGA" />
        </div>
        
        {/* Watch Catalog - Positioned over half of RAGA text */}
        <div className='relative z-10 mt-[10vh]'>
          <WatchCatalog watches={ragaWatches} />
        </div>
    </div>
  )
}

export default Watchs

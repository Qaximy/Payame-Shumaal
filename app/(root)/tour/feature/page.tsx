'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaMapMarkerAlt, FaClock, FaUsers, FaHeart } from 'react-icons/fa'

const FeaturedTours = () => {
  const featuredTours = [
    {
      id: 1,
      title: "Bali Paradise Explorer",
      image: "/images/nature2.jpeg",
      price: 1299,
      duration: "8 Days",
      location: "Bali, Indonesia",
      rating: 4.8,
      reviews: 156,
      groupSize: "12 People",
      description: "Experience the magic of Bali with cultural tours and beach adventures",
      highlights: ["Temple Tours", "Beach Hopping", "Cooking Class", "Spa Treatment"]
    },
    {
      id: 2,
      title: "Turkish Delight Journey",
      image: "/images/nature7.jpeg",
      price: 1499,
      duration: "10 Days",
      location: "Turkey",
      rating: 4.9,
      reviews: 189,
      groupSize: "15 People",
      description: "Discover the wonders of Turkey from Istanbul to Cappadocia",
      highlights: ["Hot Air Balloon", "Grand Bazaar", "Blue Mosque", "Turkish Bath"]
    },
    {
        id: 2,
        title: "Turkish Delight Journey",
        image: "/images/skd.jpg",
        price: 1499,
        duration: "10 Days",
        location: "Turkey",
        rating: 4.9,
        reviews: 189,
        groupSize: "15 People",
        description: "Discover the wonders of Turkey from Istanbul to Cappadocia",
        highlights: ["Hot Air Balloon", "Grand Bazaar", "Blue Mosque", "Turkish Bath"]
      }
    // Add more tours...
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/Skardu-in-summer.jpg"
          alt="Featured Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Featured Tours
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Handpicked premium tours for unforgettable experiences
            </p>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="relative h-64">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <FaHeart className="w-5 h-5 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-4 bg-yellow-400 px-3 py-1 rounded-full">
                  <span className="text-black font-medium">${tour.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{tour.title}</h3>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    <span className="ml-1 font-medium">{tour.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{tour.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500">
                    <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaClock className="w-5 h-5 mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaUsers className="w-5 h-5 mr-2" />
                    {tour.groupSize}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/tours/${tour.id}`}
                    className="block w-full text-center bg-black text-white py-3 rounded-lg 
                      hover:bg-black/90 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need a Custom Tour?</h2>
              <p className="text-gray-800 text-lg">
                Let us plan the perfect journey based on your preferences
              </p>
            </div>
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-black/90 
              transition-colors whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTours
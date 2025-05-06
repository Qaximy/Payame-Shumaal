'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaStar, FaUsers, FaHeart } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { id: 'All', name: 'All Activities' },
    { id: 'Adventure', name: 'Adventure' },
    { id: 'Cultural', name: 'Cultural' },
    { id: 'Nature', name: 'Nature' },
    { id: 'Water', name: 'Water Sports' },
    { id: 'Food', name: 'Food & Dining' },
  ]

  const activities = [
    {
      id: 1,
      title: "Bali Scuba Diving Adventure",
      image: "/images/adventure.jpg",
      price: 149,
      rating: 4.8,
      reviews: 128,
      duration: "4 hours",
      groupSize: "Max 6 people",
      category: "Water",
      description: "Explore vibrant coral reefs and marine life"
    },
    {
      id: 1,
      title: "Bali Scuba Diving Adventure",
      image: "/images/culture.jpeg",
      price: 149,
      rating: 4.8,
      reviews: 128,
      duration: "4 hours",
      groupSize: "Max 6 people",
      category: "Water",
      description: "Explore vibrant coral reefs and marine life"
    },
    {
      id: 1,
      title: "Bali Scuba Diving Adventure",
      image: "/images/Gilgit-Baltistan-a-winter-wonder-land.jpg",
      price: 149,
      rating: 4.8,
      reviews: 128,
      duration: "4 hours",
      groupSize: "Max 6 people",
      category: "Water",
      description: "Explore vibrant coral reefs and marine life"
    },

    {
      id: 1,
      title: "Bali Scuba Diving Adventure",
      image: "/images/winter-sport.png",
      price: 149,
      rating: 4.8,
      reviews: 128,
      duration: "4 hours",
      groupSize: "Max 6 people",
      category: "Water",
      description: "Explore vibrant coral reefs and marine life"
    },
    {
      id: 1,
      title: "Bali Scuba Diving Adventure",
      image: "/images/cullture1.jpeg",
      price: 149,
      rating: 4.8,
      reviews: 128,
      duration: "4 hours",
      groupSize: "Max 6 people",
      category: "Water",
      description: "Explore vibrant coral reefs and marine life"
    },
    {
      id: 1,
      title: "Bali Scuba Diving Adventure",
      image: "/images/parpo.jpeg",
      price: 149,
      rating: 4.8,
      reviews: 128,
      duration: "4 hours",
      groupSize: "Max 6 people",
      category: "Water",
      description: "Explore vibrant coral reefs and marine life"
    },
    // Add more activities...
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/images/Gilgit-Baltistan-a-winter-wonder-land.jpg"
          alt="Activities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Unforgettable Activities
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Discover exciting experiences and create lasting memories
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Activities */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Activities</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {activities.map((activity) => (
              <SwiperSlide key={activity.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <FaHeart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{activity.title}</h3>
                      <span className="text-yellow-400 font-medium">
                        ${activity.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUsers className="w-4 h-4" />
                        {activity.groupSize}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="font-medium">{activity.rating}</span>
                        <span className="text-gray-500 text-sm">
                          ({activity.reviews})
                        </span>
                      </div>
                      <Link
                        href={`/activities/${activity.id}`}
                        className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-black/90 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* All Activities Grid */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">All Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-sm group">
                {/* Same activity card content as above */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h2>
              <p className="text-gray-800">Let us help you plan your perfect adventure</p>
            </div>
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
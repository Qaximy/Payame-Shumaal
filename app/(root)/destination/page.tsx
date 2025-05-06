'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaStar, FaSearch, FaFilter } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "/images/Deosai plains in witner.jpg",
      rating: 4.8,
      reviews: 2453,
      price: "From $899",
      category: "Beach",
      description: "Experience the perfect blend of culture and natural beauty"
    },
    {
      id: 2,
      name: "Paris, France",
      image: "/images/UPPER-KACHURA-LAKE.webp",
      rating: 4.7,
      reviews: 3210,
      price: "From $1299",
      category: "City",
      description: "Discover the city of love and its iconic landmarks"
    },
    {
        id: 3,
        name: "Bali, Indonesia",
        image: "/images/adventure.jpg",
        rating: 4.8,
        reviews: 2453,
        price: "From $899",
        category: "Beach",
        description: "Experience the perfect blend of culture and natural beauty"
      },
      {
        id: 4,
        name: "Paris, France",
        image: "/images/UPPER-KACHURA-LAKE.webp",
        rating: 4.7,
        reviews: 3210,
        price: "From $1299",
        category: "City",
        description: "Discover the city of love and its iconic landmarks"
      },
      {
        id: 5,
        name: "Bali, Indonesia",
        image: "/images/Deosai plains in witner.jpg",
        rating: 4.8,
        reviews: 2453,
        price: "From $899",
        category: "Beach",
        description: "Experience the perfect blend of culture and natural beauty"
      },
      {
        id: 6,
        name: "Paris, France",
        image: "/images/UPPER-KACHURA-LAKE.webp",
        rating: 4.7,
        reviews: 3210,
        price: "From $1299",
        category: "City",
        description: "Discover the city of love and its iconic landmarks"
      },
    // Add more destinations...
  ]

  const categories = ["All", "Beach", "Mountain", "City", "Cultural", "Adventure"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[60vh]">
        <Image
          src="/images/rainbowlake.jpg"
          alt="Destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Explore Amazing Destinations
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Discover the world's most breathtaking locations and plan your next adventure
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                    ${activeFilter === category 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={24}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="!pb-12" // Space for pagination dots
  >
    {destinations.map((destination) => (
      <SwiperSlide key={destination.id}>
        <Link 
          href={`/destinations/${destination.id}`}
          className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
        >
          <div className="relative h-48 sm:h-56">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{destination.name}</h3>
              <span className="text-yellow-400 font-medium">{destination.price}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span className="font-medium">{destination.rating}</span>
                <span className="text-gray-500 text-sm">
                  ({destination.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <FaMapMarkerAlt className="mr-1" />
                {destination.category}
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Newsletter Section */}
      {/* <div className="bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get Travel Inspiration</h2>
              <p className="text-gray-800">Subscribe to our newsletter for exclusive deals and updates</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Destinations
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaMapMarkerAlt, FaClock, FaUsers, FaLanguage, FaHeart } from 'react-icons/fa'

const TourDetails = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tour = {
    title: "Enchanting Bali Adventure: Cultural & Natural Wonders",
    rating: 4.8,
    reviews: 245,
    price: 1299,
    duration: "8 Days",
    groupSize: "12 People",
    location: "Bali, Indonesia",
    languages: ["English", "Indonesian"],
    images: [
      "/images/img3.jpg",
      "/images/img4.jpg",
      "/images/img5.jpg",
      "/images/img6.jpg",
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={tour.images[3]}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {tour.title}
            </h1>
            <div className="flex items-center gap-2 text-white">
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <span className="ml-1">{tour.rating}</span>
              </div>
              <span>•</span>
              <span>{tour.reviews} reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <FaClock className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Group Size</p>
                    <p className="font-medium">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{tour.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLanguage className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <p className="font-medium">{tour.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b">
                <div className="flex">
                  {['overview', 'itinerary', 'location', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-sm font-medium capitalize transition-colors
                        ${activeTab === tab 
                          ? 'text-yellow-400 border-b-2 border-yellow-400' 
                          : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Tour Overview</h2>
                    <p className="text-gray-600">
                      Embark on an unforgettable 8-day journey through the enchanting island of Bali. 
                      This carefully crafted tour combines cultural experiences with natural wonders, 
                      allowing you to discover the true essence of this tropical paradise.
                    </p>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Itinerary</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Day 1: Arrival in Bali and welcome dinner.</li>
                      <li>Day 2: Ubud cultural tour and Monkey Forest visit.</li>
                      <li>Day 3: Rice terraces and coffee plantation experience.</li>
                      <li>Day 4: Beach relaxation and traditional dance show.</li>
                      <li>Day 5: Mount Batur sunrise hike and hot springs.</li>
                      <li>Day 6: Temple visits and Balinese cooking class.</li>
                      <li>Day 7: Waterfalls and local market shopping.</li>
                      <li>Day 8: Departure from Bali.</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'location' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Tour Location</h2>
                    <p className="text-gray-600">
                      Bali, Indonesia is a beautiful island known for its forested volcanic mountains,
                      iconic rice paddies, beaches and coral reefs. This tour covers the heart of Bali 
                      including Ubud, Mount Batur, and the serene coastlines.
                    </p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Traveler Reviews</h2>
                    <div className="space-y-2 text-gray-600">
                      <div>
                        <p className="font-medium">Alicia R.</p>
                        <p>⭐⭐⭐⭐⭐ “This tour was absolutely magical. Every day was packed with adventure and learning!”</p>
                      </div>
                      <div>
                        <p className="font-medium">David M.</p>
                        <p>⭐⭐⭐⭐ “Beautiful places, well organized. Would definitely recommend to friends.”</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-bold">${tour.price}</p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>
                <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                  <FaHeart className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors">
                  Book Now
                </button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-2">Call us at:</p>
                <p className="text-lg font-medium">1-800-222-8888</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetails

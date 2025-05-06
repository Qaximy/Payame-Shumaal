'use client'
import { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Tours')
  const tabs = ['Tours', 'Hotels', 'Tickets', 'Rental']

  const [formData, setFormData] = useState({
    location: 'New York, USA',
    checkIn: '2024-01-02',
    checkOut: '2024-01-02',
    guests: '2 Adults, 2 Children',
    // Hotel specific fields
    roomType: 'Standard Room',
    priceRange: 'Under $200',
    amenities: []
  })

  const roomTypes = [
    'Standard Room',
    'Deluxe Room',
    'Suite',
    'Family Room',
    'Presidential Suite'
  ]

  const priceRanges = [
    'Under $200',
    '$200 - $500',
    '$500 - $1000',
    'Above $1000'
  ]

  const locations = [
    'New York, USA',
    'London, UK',
    'Paris, France',
    'Tokyo, Japan',
    'Dubai, UAE'
  ]

  const guestOptions = [
    '1 Adult, 0 Children',
    '2 Adults, 0 Children',
    '2 Adults, 1 Child',
    '2 Adults, 2 Children',
    '3 Adults, 2 Children'
  ]

  const handleSearch = async () => {
    // Validate dates
    const checkInDate = new Date(formData.checkIn)
    const checkOutDate = new Date(formData.checkOut)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
  
    if (checkInDate < today) {
      toast.error('Check-in date cannot be in the past')
      return
    }
  
    if (checkOutDate <= checkInDate) {
      toast.error('Check-out date must be after check-in date')
      return
    }
  
    // Sending data to backend
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: activeTab }),
      });
  
      if (response.ok) {
        const data = await response.json();
        toast.success('Search completed!');
        console.log('Backend Response:', data);
      } else {
        toast.error('Error in search');
      }
    } catch (error) {
      toast.error('Network Error');
    }
  }

  const travelClasses = ['Economy', 'Business', 'First Class']
  const passengerOptions = ['1', '2', '3', '4', '5']

  return (
    <div className="relative min-h-[600px] h-[calc(100vh-80px)] w-full shadow-2xl items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img3.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40">
          {/* Small Label */}
          <span className="inline-block bg-yellow-400 text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Discovery the World
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Unleash Your Wanderlust<br className="hidden sm:block" />
            <span className="block mt-1 sm:mt-2">Book Your Next Journey</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl">
            Crafting Exceptional Journeys: Your Global Escape Planner. Unleash Your Wanderlust.
            Seamless Travel, Extraordinary Adventures
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-3 sm:p-4 max-w-5xl">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                    ${activeTab === tab 
                      ? 'bg-orange-400 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm text-gray-500 mb-1">Location</label>
                <select
                  className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm text-gray-500 mb-1">Check-in</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm text-gray-500 mb-1">Check-out</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  min={formData.checkIn}
                />
              </div>

              {activeTab === 'Tickets' && (
                <>
                  <div className="sm:col-span-1">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">From</label>
                    <select
                      className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">To</label>
                    <select
                      className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">Travel Class</label>
                    <select
                      className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.travelClass}
                      onChange={(e) => setFormData({ ...formData, travelClass: e.target.value })}
                    >
                      {travelClasses.map((tClass) => (
                        <option key={tClass} value={tClass}>{tClass}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">Passengers</label>
                    <select
                      className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    >
                      {passengerOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {activeTab === 'Hotels' && (
                <>
                  <div className="sm:col-span-1">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">Room Type</label>
                    <select
                      className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    >
                      {roomTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">Price Range</label>
                    <select
                      className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.priceRange}
                      onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                    >
                      {priceRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {activeTab === 'Tours' && (
                <div className="sm:col-span-1">
                  <label className="block text-xs sm:text-sm text-gray-500 mb-1">Guest</label>
                  <select
                    className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    {guestOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm text-gray-500 mb-1">&nbsp;</label>
                <button
                  onClick={handleSearch}
                  className="w-full p-3 text-white bg-orange-400 rounded-md shadow-md hover:bg-yellow-500 transition duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

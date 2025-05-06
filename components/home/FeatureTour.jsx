'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const filters = [
  'Adventure', 'City Tours', 'Cultural', '1-3 Days',
  '3-5 Days', '5+ Days', '4+ Stars', '3+ Stars',
  '$0-$50', '$50-$100', '$100+',
]

const tours = [
  {
    id: 1,
    title: 'California Sunset/Twilight Boat Cruise',
    image: '/images/manthokha-waterfall.jpg',
    rating: 4.96,
    reviews: 672,
    days: '2 days 3 nights',
    guests: '4-6 guests',
    price: 48.25,
    tag: 'Top Rated',
  },
  {
    id: 2,
    title: 'NYC: Food Tastings and Culture Tour',
    image: '/images/khaplu.jpg',
    rating: 4.96,
    reviews: 672,
    days: '3 days 3 nights',
    guests: '4-6 guests',
    price: 17.32,
    tag: 'Best Sale',
  },
  {
    id: 3,
    title: 'Grand Canyon Horseshoe Bend 2 days',
    image: '/images/img6.jpg',
    rating: 4.96,
    reviews: 672,
    days: '7 days 6 nights',
    guests: '4-6 guests',
    price: 15.63,
    tag: '25% Off',
  },
]

const FeaturedTours = () => {
  const [selectedTour, setSelectedTour] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  // 🔁 Backend-connected form handler
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          tourId: selectedTour?.id,
          tourTitle: selectedTour?.title,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert('Booking Confirmed!')
        setSelectedTour(null)
        reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      alert('Failed to submit booking.')
    }
  }

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-2">Featured Tours</h2>
        <p className="text-gray-500">Handpicked experiences based on top ratings</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-gray-100 to-white text-gray-800 border border-gray-300 shadow-sm hover:shadow-md hover:border-gray-400 hover:text-black transition-all"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Tours Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition group"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-white text-xs px-3 py-1 rounded-full shadow">
                {tour.tag}
              </span>
              <button
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
                onClick={() => setSelectedTour(tour)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <div className="text-sm text-gray-500 mb-2">
                <span>{tour.rating} ⭐ ({tour.reviews} reviews)</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{tour.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {tour.days} • {tour.guests}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">${tour.price}</span>
                  <span className="text-sm text-gray-400"> /person</span>
                </div>
                <button
                  onClick={() => setSelectedTour(tour)}
                  className="text-sm border px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Book: {selectedTour.title}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register('name', { required: 'Full Name is required' })}
                placeholder="Full Name"
                className="w-full border px-3 py-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Invalid email',
                  },
                })}
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <input
                type="number"
                {...register('guests', {
                  required: 'Number of guests is required',
                  min: { value: 1, message: 'Minimum 1 guest' },
                })}
                placeholder="Number of Guests"
                className="w-full border px-3 py-2 rounded"
              />
              {errors.guests && <p className="text-red-500 text-sm">{errors.guests.message}</p>}

              <div className="text-right">
                <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default FeaturedTours

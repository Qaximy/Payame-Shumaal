'use client'
import Image from 'next/image'

export default function PopularTours() {
  const popularTours = [
    {
      id: 1,
      title: 'Swiss Alps Mountain Biking Adventure',
      image: '/images/img1.jpg',
      location: 'Switzerland',
      duration: '5 days',
      groupSize: '8-12 people',
      rating: 4.8,
      reviews: 245,
      price: 1299,
      description: 'Experience the thrill of mountain biking through the stunning Swiss Alps.',
    },
    {
      id: 2,
      title: 'Ancient Rome Walking Tour',
      image: '/images/img3.jpg',
      location: 'Italy',
      duration: '3 days',
      groupSize: '10-15 people',
      rating: 4.9,
      reviews: 189,
      price: 899,
      description: 'Discover the historic wonders of Ancient Rome with expert guides.',
    },
    {
      id: 3,
      title: 'Santorini Island Exploration',
      image: '/images/img4.jpg',
      location: 'Greece',
      duration: '4 days',
      groupSize: '6-10 people',
      rating: 4.7,
      reviews: 312,
      price: 1099,
      description: 'Explore the beautiful white-washed villages of Santorini.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/images/Adventure.jpg"
          alt="Popular Tours"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Popular Tours</h1>
            <p className="text-lg text-gray-200">Discover our most loved destinations</p>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTours.map((tour) => (
            <div key={tour.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-64">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">${tour.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{tour.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{tour.duration}</span>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
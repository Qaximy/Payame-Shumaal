'use client'
import { useState } from 'react'
import Image from 'next/image'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sara Mohamed',
      location: 'Jakarta',
      image: '/images/p1.jpg',
      text: "I've been using this hotel booking system for several years now. The interface is user-friendly and I appreciate the real-time availability of hotels.",
      rating: 5
    },
    {
      id: 2,
      name: 'Atend John',
      location: 'Gallena',
      image: '/images/p2.jpg',
      text: "Easy to navigate and accurate hotel info. It’s my go-to site for all bookings.",
      rating: 4
    },
    {
      id: 3,
      name: 'Lina Park',
      location: 'Seoul',
      image: '/images/p3.jpg',
      text: "The best experience I've had with hotel platforms. Highly recommended!",
      rating: 5
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentSlide]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff] text-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-black mb-12">Real stories from real travelers</p>

        {/* Single Testimonial */}
        <div className="bg-[#fff] rounded-2xl p-6 md:p-10 shadow-lg transition duration-500">
  <p className="text-sm text-gray-500 mb-6 italic">"{testimonial.text}"</p>
  <div className="flex items-center justify-center gap-4">
  <Image
    src={testimonial.image}
    alt={testimonial.name}
    width={60}
    height={60}
    className="rounded-full border-2 border-gray-400 object-cover"
  />
  <div className="text-left">
    <h4 className="font-semibold text-black">{testimonial.name}</h4>
    <p className="text-sm text-gray-600">{testimonial.location}</p>
  </div>
</div>

          <div className="flex justify-center gap-1 mt-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-700 hover:bg-gray-700 transition"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-700 hover:bg-gray-700 transition"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

// app/luxury-travel/page.jsx
'use client'
import { useState } from 'react'
import React from 'react'

const LuxuryTravelPage = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Luxury Travel Redefined</h1>
      <p className="text-gray-700 mb-6 text-lg">
        Embark on a journey of indulgence and elegance. Our luxury travel experiences take you to the most
        breathtaking locations on Earth — in style. From private islands and first-class flights to eco-friendly
        resorts and exclusive cultural tours, we help you explore the world without compromise.
      </p>

      <p className="text-gray-600 text-base">
        We also ensure that your adventures are sustainable, carbon-conscious, and supportive of local
        communities. Whether you're dreaming of the Swiss Alps, the Maldives, or the valleys of Hunza — we’ve
        got the perfect premium escape tailored just for you.
      </p>
    </section>
  )
}

export default LuxuryTravelPage

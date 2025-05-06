'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TopCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories')
        const data = await res.json()
        if (data.success) {
          setCategories(data.data)
        } else {
          console.error('Failed to fetch categories:', data.message)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          <p className="text-gray-500 mt-1 text-sm">Favorite destinations based on customer reviews</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link href={`/categories/${category.slug}`} key={index}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                <div className="absolute bottom-3 left-3 z-20">
                  <h3 className="text-white text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <div className="flex items-center text-gray-400 text-xs">
                  <span>{category.tours}</span>
                  <span className="mx-1">•</span>
                  <span>{category.activities}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TopCategories

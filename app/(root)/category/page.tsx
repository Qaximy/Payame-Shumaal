'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import axios from 'axios'

// Category type
type Category = {
  title: string
  image: string
  tours: string
  activities: string
}

// Booking schema
const bookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone must be at least 11 digits'),
  guests: z.string().min(1, 'Number of guests required'),
})

type BookingFormData = z.infer<typeof bookingSchema>

// Modal Props
type BookingModalProps = {
  category: string
  onClose: () => void
  isOpen: boolean
}

const BookingModal = ({ category, onClose, isOpen }: BookingModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({ resolver: zodResolver(bookingSchema) })

  const onSubmit = async (data: BookingFormData) => {
    try {
      await axios.post('/api/book', { ...data, category })
      alert('Booking successful!')
      reset()
      onClose()
    } catch (error) {
      alert('Booking failed!')
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <Dialog.Title className="text-xl font-bold mb-4">
            Book a Tour to {category}
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                placeholder="Name"
                {...register('name')}
                className="w-full border p-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <input
                placeholder="Email"
                {...register('email')}
                className="w-full border p-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <input
                placeholder="Phone"
                {...register('phone')}
                className="w-full border p-2 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div>
              <input
                placeholder="Number of Guests"
                {...register('guests')}
                className="w-full border p-2 rounded"
              />
              {errors.guests && <p className="text-red-500 text-sm">{errors.guests.message}</p>}
            </div>

            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded bg-black text-white">
                Book Now
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

// --- Main Component ---

const categories: Category[] = [
  {
    title: 'Mountain',
    image: '/images/Attabad-Lake.webp',
    tours: '356 Tours',
    activities: '248 Activities',
  },
  {
    title: 'Safari',
    image: '/images/gilgit.jpg',
    tours: '356 Tours',
    activities: '248 Activities',
  },
  // ... Add more categories here
]

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = (title: string) => {
    setSelectedCategory(title)
    setIsOpen(true)
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => handleOpenModal(cat.title)}
          >
            <div className="relative h-[200px] rounded-xl overflow-hidden mb-3">
              <Image src={cat.image} alt={cat.title} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
            <div className="text-gray-500 text-sm">
              {cat.tours} • {cat.activities}
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <BookingModal
          category={selectedCategory}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  )
}

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Mail } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const services = [
    'Tour Guide',
    'Tour Booking',
    'Hotel Booking',
    'Ticket Booking',
    'Rental Services',
    'Travel Plan'
  ]

  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo & Contact */}
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image src="/images/logo.png" alt="Travila" width={140} height={40} />
          </Link>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 mt-1 text-yellow-500" />
              <span>Blue Area , Islamabad Capital Territory, Pakistan</span>
            </li>
            <li className="flex items-start">
              <Clock className="w-5 h-5 mr-2 mt-1 text-yellow-500" />
              <span>Hours: 8:00 - 17:00, Mon - Sat</span>
            </li>
            <li className="flex items-start">
              <Mail className="w-5 h-5 mr-2 mt-1 text-yellow-500" />
              <span>PayameShumaal@gamil.com</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {services.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-yellow-500 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
          <p className="text-sm mb-4 text-gray-500">
            Get weekly travel tips & destination guides in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
          <p className="text-sm text-gray-500">&copy; 2024 Payam e Shumaal. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/share/1CAncyPLN1/" className="text-gray-600 hover:text-yellow-500"><FaFacebookF size={18} /></Link>
            <Link href="#" className="text-gray-600 hover:text-yellow-500"><FaInstagram size={18} /></Link>
            <Link href="#" className="text-gray-600 hover:text-yellow-500"><FaTwitter size={18} /></Link>
            <Link href="#" className="text-gray-600 hover:text-yellow-500"><FaYoutube size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

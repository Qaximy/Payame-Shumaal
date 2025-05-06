'use client'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '923488134572' // Your Pakistan number with country code
  const message = encodeURIComponent('Hi! I would like to know more about your travel packages.')

  const handleClick = () => {
    // Using the number directly without cleaning since it's already in correct format
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg 
        hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    
    </button>
  )
}

export default WhatsAppButton
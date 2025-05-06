'use client'
import Image from 'next/image'

const WhyTravelWithUs = () => {
  const features = [
    {
      Image: '/images/Background+Shadow.png',
      title: 'Security Assurance',
      description: 'Demonstrates commitment to user data security through encryption and secure payment practices',
      bgColor: 'bg-blue-50'
    },
    {
      Image: '/images/Background+Shadow (1).png',
      title: 'Security Assurance',
      description: 'Demonstrates commitment to user data security through encryption and secure payment practices',
      bgColor: 'bg-pink-50'
    },
    {
      Image: '/images/Background+Shadow (2).png',
      title: 'Security Assurance',
      description: 'Demonstrates commitment to user data security through encryption and secure payment practices',
      bgColor: 'bg-indigo-50'
    },
    {
      Image: '/images/Background+Shadow (3).png',
      title: 'Security Assurance',
      description: 'Demonstrates commitment to user data security through encryption and secure payment practices',
      bgColor: 'bg-purple-50'
    }
  ]

  const paymentMethods = [
    { name: 'PayPal', image: '/images/PayPal.png' },
    { name: 'Stripe', image: '/images/stripe.png' },
    { name: 'Payoneer', image: '/images/Payoneer.png' },
    { name: 'Visa/Mastercard', image: '/images/Visa.jpeg' },
    { name: 'Cash App', image: '/images/Cash App.png' },
    { name: 'Bitcoin', image: '/images/Bitcoino.jpg' },
    { name: 'Discover', image: '/images/Discover.png' }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Why Travel With Us?</h2>
        <p className="text-gray-600">The best booking platform you can trust</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`${feature.bgColor} rounded-2xl p-6 transition-transform hover:scale-105`}
          >
            <div className="w-16 h-16 mb-4">
              <Image
                src={feature.Image}
                alt={feature.title}
                width={48}
                height={48}
              />
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <button className="text-sm font-medium flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
        {paymentMethods.map((payment, index) => (
          <div key={index} className="w-24 h-8 relative ">
            <Image
              src={payment.image}
              alt={payment.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyTravelWithUs

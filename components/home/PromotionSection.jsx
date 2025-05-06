'use client'
import Image from 'next/image'
import Link from 'next/link'

const PromotionsSection = () => {
  const promotions = [
    {
      title: 'Waking up in a far away place',
      image: '/images/banner1.png',
     
    },
    {
      title: 'Big promotion at the end of the year',
    
      image: '/images/banner2.png',
    
    }
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo, index) => (
          <div 
            key={index}
            className={' rounded-3xl overflow-hidden relative p-6'}
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="rounded-2xl object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-4 max-w-[180px] leading-tight">
                    {promo.title}
                  </h3>
                  {promo.subtitle && (
                    <div className="inline-flex items-center bg-[#FF4D4D] text-white rounded-full px-4 py-1.5">
                     
                    </div>
                  )}
                </div>
                <div>
                  <Link 
                    href="#"
                    className="inline-flex items-center bg-[#FFE147] hover:bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    View More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromotionsSection
// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// const TopRatedHotels = () => {
//   const hotels = [
//     {
//       id: 1,
//       title: 'California Sunset/Twilight Boat Cruise',
//       image: '/images/Khojresort.avif',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 48.25,
//     },
//     {
//       id: 2,
//       title: 'NYC: Food Tastings and Culture Tour',
//       image: '/images/PC Legacy.webp',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 17.32,
//     },
//     {
//       id: 3,
//       title: 'Grand Canyon Horseshoe Bend 2 days',
//       image: '/images/dynast.jpg',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 15.63,
//     },
//     {
//       id: 4,
//       title: 'California Sunset/Twilight Boat Cruise',
//       image: '/images/sukoon resort.jpg',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 48.25,
//     },
//     {
//       id: 5,
//       title: 'Grand Canyon Horseshoe Bend 2 days',
//       image: '/images/Arish.jpg',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 15.63,
//     },
//     {
//       id: 6,
//       title: 'California Sunset/Twilight Boat Cruise',
//       image: '/images/Reego.jpeg',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 48.25,
//     },
//     {
//       id: 7,
//       title: 'Grand Canyon Horseshoe Bend 2 days',
//       image: '/images/Skardu-Hotel-Himalayas.jpg',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 15.63,
//     },
//     {
//       id: 8,
//       title: 'California Sunset/Twilight Boat Cruise',
//       image: '/images/download.jpeg',
//       location: 'Manchester, England',
//       rating: 4.96,
//       reviews: 672,
//       price: 48.25,
//     },
//   ]

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex + itemsPerPage >= hotels.length ? 0 : prevIndex + itemsPerPage
//     )
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex - itemsPerPage < 0 ? Math.max(0, hotels.length - itemsPerPage) : prevIndex - itemsPerPage
//     )
//   }

//   const visibleHotels = hotels.slice(currentIndex, currentIndex + itemsPerPage)

//   return (
//     <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto bg-pink-50">
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold mb-2">Top Rated Hotels</h2>
//           <p className="text-gray-600">Quality as judged by customers. Book at the ideal price!</p>
//         </div>
//         <div className="flex gap-2">
//           <button 
//             onClick={prevSlide}
//             className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button 
//             onClick={nextSlide}
//             className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {visibleHotels.map((hotel) => (
//            <div 
//            key={hotel.id}
//            className="bg-white rounded-lg overflow-hidden shadow-sm"
//          >
//            <div className="relative">
//              <div className="relative h-[220px] w-full">
//                <Image
//                  src={hotel.image}
//                  alt={hotel.title}
//                  width={400}
//                  height={300}
//                  className="w-full h-full object-cover"
//                />
//              </div>
//              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
//                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                </svg>
//              </button>
//            </div>

//            <div className="p-4">
//              <div className="flex items-center mb-2">
//                <span className="text-sm font-semibold">{hotel.rating}</span>
//                <span className="text-sm text-gray-500 ml-1">({hotel.reviews} reviews)</span>
//              </div>

//              <h3 className="font-semibold text-lg mb-2">{hotel.title}</h3>

//              <div className="flex items-center text-sm text-gray-500 mb-4">
//                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                </svg>
//                {hotel.location}
//              </div>

//              <div className="flex items-center justify-between">
//                <div>
//                  <span className="font-bold text-xl">${hotel.price}</span>
//                  <span className="text-gray-500 text-sm ml-1">/person</span>
//                </div>
//                <button className="bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
//                  Book Now
//                </button>
//              </div>
//            </div>
//          </div>
//        ))}
//      </div>
       
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {hotels.map((hotel) => (
//           <div 
//             key={hotel.id}
//             className="bg-white rounded-lg overflow-hidden shadow-sm"
//           >
//             <div className="relative">
//               <div className="relative h-[220px] w-full">
//                 <Image
//                   src={hotel.image}
//                   alt={hotel.title}
//                   width={400}
//                   height={300}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </button>
//             </div>

//             <div className="p-4">
//               <div className="flex items-center mb-2">
//                 <span className="text-sm font-semibold">{hotel.rating}</span>
//                 <span className="text-sm text-gray-500 ml-1">({hotel.reviews} reviews)</span>
//               </div>

//               <h3 className="font-semibold text-lg mb-2">{hotel.title}</h3>

//               <div className="flex items-center text-sm text-gray-500 mb-4">
//                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 {hotel.location}
//               </div>

//               <div className="flex items-center justify-between">
//                 <div>
//                   <span className="font-bold text-xl">${hotel.price}</span>
//                   <span className="text-gray-500 text-sm ml-1">/person</span>
//                 </div>
//                 <button className="bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}
//     </section>
//   )
// }

// export default TopRatedHotels


'use client'
import { useState } from 'react'
import Image from 'next/image'

const TopRatedHotels = () => {
  const hotels = [
    {
      id: 1,
      title: 'California Sunset/Twilight Boat Cruise',
      image: '/images/Khojresort.avif',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
    },
    {
      id: 2,
      title: 'NYC: Food Tastings and Culture Tour',
      image: '/images/PC Legacy.webp',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 17.32,
    },
    {
      id: 3,
      title: 'Grand Canyon Horseshoe Bend 2 days',
      image: '/images/dynast.jpg',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 15.63,
    },
    {
      id: 4,
      title: 'California Sunset/Twilight Boat Cruise',
      image: '/images/sukoon resort.jpg',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
    },
    {
      id: 5,
      title: 'Grand Canyon Horseshoe Bend 2 days',
      image: '/images/Arish.jpg',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 15.63,
    },
    {
      id: 6,
      title: 'California Sunset/Twilight Boat Cruise',
      image: '/images/Reego.jpeg',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
    },
    {
      id: 7,
      title: 'Grand Canyon Horseshoe Bend 2 days',
      image: '/images/Skardu-Hotel-Himalayas.jpg',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 15.63,
    },
    {
      id: 8,
      title: 'California Sunset/Twilight Boat Cruise',
      image: '/images/download.jpeg',
      location: 'Manchester, England',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= hotels.length ? 0 : prevIndex + itemsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, hotels.length - itemsPerPage) : prevIndex - itemsPerPage
    )
  }

  const visibleHotels = hotels.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto bg-pink-50">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Top Rated Hotels</h2>
          <p className="text-gray-600">Quality as judged by customers. Book at the ideal price!</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleHotels.map((hotel) => (
          <div 
                     key={hotel.id}
                     className="bg-white rounded-lg overflow-hidden shadow-sm"
                   >
                     <div className="relative">
                       <div className="relative h-[220px] w-full">
                         <Image
                           src={hotel.image}
                           alt={hotel.title}
                           width={400}
                           height={300}
                           className="w-full h-full object-cover"
                         />
                       </div>
                       <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                         </svg>
                       </button>
                     </div>
          
                     <div className="p-4">
                       <div className="flex items-center mb-2">
                         <span className="text-sm font-semibold">{hotel.rating}</span>
                         <span className="text-sm text-gray-500 ml-1">({hotel.reviews} reviews)</span>
                       </div>
          
                       <h3 className="font-semibold text-lg mb-2">{hotel.title}</h3>
          
                       <div className="flex items-center text-sm text-gray-500 mb-4">
                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                         </svg>
                         {hotel.location}
                       </div>
          
                       <div className="flex items-center justify-between">
                         <div>
                           <span className="font-bold text-xl">${hotel.price}</span>
                           <span className="text-gray-500 text-sm ml-1">/person</span>
                         </div>
                         <button className="bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
                           Book Now
                         </button>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
                 
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {hotels.map((hotel) => (
                    <div 
                      key={hotel.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm"
                    >
                      <div className="relative">
                        <div className="relative h-[220px] w-full">
                          <Image
                            src={hotel.image}
                            alt={hotel.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
          
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-semibold">{hotel.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({hotel.reviews} reviews)</span>
                        </div>
          
                        <h3 className="font-semibold text-lg mb-2">{hotel.title}</h3>
          
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {hotel.location}
                        </div>
          
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-xl">${hotel.price}</span>
                            <span className="text-gray-500 text-sm ml-1">/person</span>
                          </div>
                          <button className="bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
        ))}
      </div> */}
    </section>
  )
}

export default TopRatedHotels
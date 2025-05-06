import { NextResponse } from 'next/server'

export async function GET() {
  const categories = [
    {
      title: 'Mountain',
      image: '/images/Attabad-Lake.webp',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Explore breathtaking mountain landscapes and adventurous trails.',
    },
    {
      title: 'Safari',
      image: '/images/gilgit.jpg',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Experience the thrill of wildlife safaris in natural habitats.',
    },
    {
      title: 'Desert',
      image: '/images/hunza.jpg',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Discover the vast and mesmerizing desert landscapes.',
    },
    {
      title: 'Flower',
      image: '/images/katpana.jpeg',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Immerse yourself in vibrant flower fields and gardens.',
    },
    {
      title: 'Beach',
      image: '/images/Khojresort.avif',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Relax on sunny beaches with crystal clear waters.',
    },
    {
      title: 'Temples',
      image: '/images/marsur-rock.jpg',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Visit ancient temples and experience cultural heritage.',
    },
    {
      title: 'Yacht',
      image: '/images/Skardu-in-summer.jpg',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Sail on luxurious yachts and enjoy the sea breeze.',
    },
    {
      title: 'Valley',
      image: '/images/skdSnow.jpg',
      tours: '356 Tours',
      activities: '248 Activities',
      description: 'Explore serene valleys surrounded by majestic mountains.',
    },
  ]

  return NextResponse.json({ success: true, data: categories })
}

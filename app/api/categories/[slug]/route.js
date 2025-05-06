// /app/categories/[slug]/page.jsx
import Image from 'next/image'

// Dummy categories (can be replaced with API later)
const categories = [
  {
    title: 'Mountain',
    slug: 'mountain',
    image: '/images/Attabad-Lake.webp',
    tours: '356 Tours',
    activities: '248 Activities',
    description: 'Explore breathtaking mountain landscapes and adventurous trails.',
  },
  {
    title: 'Safari',
    slug: 'safari',
    image: '/images/gilgit.jpg',
    tours: '356 Tours',
    activities: '248 Activities',
    description: 'Experience the thrill of wildlife safaris in natural habitats.',
  },
]

export default function categoriesPage({ params }) {
  // Extract categories based on slug from the URL
  const categories = categories.find((c) => c.slug === params.slug)

  // Handle case where categories is not found
  if (!categories) {
    return <div className="p-8 text-center text-xl">categories not found</div>
  }

  const related = categories.filter((c) => c.slug !== params.slug)

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">{categories.title}</h1>

      <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
        <Image
          src={categories.image}
          alt={categories.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <p className="text-gray-700 text-lg mb-12">{categories.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Related Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {related.map((cat) => (
          <div key={cat.slug} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="relative h-32">
              <Image
                src={cat.image}
                alt={cat.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'
import Image from 'next/image'

const NewsTips = () => {
  const articles = [
    {
      id: 1,
      category: 'Culture',
      image: '/images/Autumn_in_Hunza_,_gilgit_baltistan.jpg',
      date: '18 Sep 2024',
      readTime: '6 mins',
      comments: 38,
      title: 'Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey',
      author: {
        name: 'Jimmy Dave',
        avatar: '/images/p1.jpg'
      }
    },
    {
      id: 2,
      category: 'Travel',
      image: '/images/snowgilgit.jpg',
      date: '18 Sep 2024',
      readTime: '6 mins',
      comments: 38,
      title: 'Top 10 Travel Hacks for Budget-Conscious Adventurers',
      author: {
        name: 'Jimmy Dave',
        avatar: '/images/p2.jpg'
      }
    },
    {
      id: 3,
      category: 'Discovery',
      image: '/images/spring-tour-hunza-skardu-valley.jpg',
      date: '18 Sep 2024',
      readTime: '6 mins',
      comments: 38,
      title: 'Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips',
      author: {
        name: 'Jimmy Dave',
        avatar: '/images/p3.jpg'
      }
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-1">News, Tips & Guides</h2>
          <p className="text-gray-500">Favorite destinations based on customer reviews</p>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-900 transition">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-white text-sm px-3 py-1 rounded-full shadow text-gray-700 font-medium">
                {article.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="text-gray-500 text-sm flex flex-wrap gap-2">
                <span>{article.date}</span> • <span>{article.readTime}</span> • <span>{article.comments} comments</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition line-clamp-2">
                {article.title}
              </h3>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div className="text-sm text-gray-700">
                  <p className="font-medium">{article.author.name}</p>
                  <button className="text-blue-600 hover:underline text-xs">Keep Reading</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsTips

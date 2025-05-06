'use client'
import { useState } from 'react'

const FilterButtons = () => {
  const filters = ['Adventure', 'City Tours', 'Cultural', 'Nature', 'Luxury']
  
  // Set the state type to allow string or null
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setSelectedFilter(filter)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all border shadow-sm
            ${
              selectedFilter === filter
                ? 'bg-black text-white border-black'
                : 'bg-gradient-to-r from-gray-100 to-white text-gray-800 border-gray-300 hover:shadow-md hover:border-gray-400 hover:text-black'
            }
          `}
        >
          {filter}
        </button>
      ))}

      {/* Example: Show selected filter below */}
      {selectedFilter && (
        <p className="text-center mt-4 text-gray-600">
          Showing results for: <span className="font-medium text-black">{selectedFilter}</span>
        </p>
      )}
    </div>
  )
}

export default FilterButtons

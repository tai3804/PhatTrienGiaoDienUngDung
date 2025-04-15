import React from 'react'

export default function RecipeListRow({data}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {data.map((item) => (
            <div 
            key={item.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
            {/* Image with hover zoom effect */}
            <div className="overflow">
                <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            <div className="p-4 relative">
                {/* Recipe name with smooth transition */}
                <h3 className="text-start h-22 text-xl font-semibold text-gray-800 mb-1 w-10/12 group-hover:text-pink-600 transition-colors duration-300">
                {item.name}
                </h3>
                
                {/* Time badge with hover effect */}
                <p className="text-pink-600 bg-pink-50 w-fit px-4 py-1 rounded-full absolute bottom-4 group-hover:bg-pink-100 group-hover:shadow-sm transition-all duration-300">
                {item.time} minutes
                </p>
                
                {/* Save icon with hover animation */}
                <img 
                className="absolute right-2 top-2 w-8 h-8  group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer" 
                src="src/img/saveIcon.png" 
                alt="Save recipe" 
                />
            </div>
            </div>
        ))}
    </div>
  )
}

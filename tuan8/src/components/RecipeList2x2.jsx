import React from 'react'

export default function RecipeListRow({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {data.map((item) => (
            <div 
            key={item.id} 
            className="flex items-center border-gray-200 border rounded-2xl overflow-hidden"
            >
            {/* Image with hover zoom effect */}
            <div className="">
                <img 
                src={item.image} 
                alt={item.name} 
                className="rounded-b-4xl"
                />
            </div>
            
            <div className="p-4 relative">
                {/* Recipe name with smooth transition */}
                <h3 className="text-start text-xl font-semibold text-gray-800 mb-1 w-10/12 group-hover:text-pink-600 transition-colors duration-300">
                {item.title}
                </h3>
                
                {/* Time badge with hover effect */}
                <p className="text-gray-600 text-start text-xs">
                {item.time} minutes
                </p>
                
                {/* Save icon with hover animation */}
                <img 
                className="absolute right-2 top-2 w-8 h-8  group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer" 
                src="src/img/saveIcon.png" 
                alt="Save recipe" 
                />

                <div className="flex items-center text-center mb-4">
                  <img src={item.ava} alt="" 
                  className='w-8 h-8 mt-2'/>
                
                  <div
                  className='text-gray-600 pt-2 pl-2 font-semibold' 
                  >
                    {item.author}
                  </div>
                </div>
                
                <div className='text-start text-gray-700'>
                  {item.description}
                 </div>
                </div>
            </div>
        ))}
    </div>
  )
}
const RecipeItem = ({ title, img, time }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Recipe Image */}
        <div className="h-48 relative">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Recipe Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>
          
          {/* Time */}
          <div className="flex items-center text-gray-600">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecipeItem;
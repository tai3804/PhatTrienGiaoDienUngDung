import React from "react";

export default function RecipeNote() {
  return (
    <div id="recipe_note" className="relative max-w-xs mx-auto p-5 bg-white shadow-lg rounded-md border-2 border-dotted border-pink-200">
      {/* Hộp nổi (badge) “Recipe of the day” */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-3 py-1 rounded-full text-sm font-semibold text-white">
        Recipe of the day
      </div>

      {/* Tiêu đề chính (Salad Caprese) */}
      <h2 className="mt-6 text-center text-pink-600 text-xl font-bold">
        Salad Caprese
      </h2>

      {/* Mô tả */}
      <p className="text-gray-600 text-sm text-center mt-2 px-2">
        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
        herbs, olive oil, and balsamic vinegar create a refreshing dish
        for lunch or appetizer.
      </p>

      {/* Tên + Avatar tác giả/món (hoặc mô tả khác) */}
      <div className="flex flex-col items-center justify-center mt-4">
        <img
          src="src/img/avatar.png"
          alt="Salad Caprese"
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2 text-gray-700 font-medium">
          Salad Caprese
        </span>
      </div>

      {/* Nút View now */}
      <div className="flex justify-center mt-6">
        <button className="flex items-center bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
          View now
          {/* Mũi tên SVG đơn giản */}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

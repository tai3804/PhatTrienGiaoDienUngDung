import React from 'react';

export default function Header() {
  return (
    <div
      className="flex items-center justify-between text-white p-4 border border-b-gray-300 "
      style={{ gridArea: 'header' }}
    >
      {/* Title */}
      <div className="text-2xl font-bold text-pink-400">Dashboard</div>

      <div className="flex items-center gap-6">
        {/* Icon search */}
        <div className="relative border border-gray-200 rounded-lg bg-gray-100">
          <img src="public/img/search.png" alt="icon search" className='absolute top-2 left-1.5'/>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded text-black pl-7"
          />
        </div>

        {/* Icon chuông */}
        <div className="w-6 ">
          <img src="public/img/bell.png" alt="Notifications" className="w-full h-full object-contain hover:cursor-pointer" />
        </div>
        
        {/* Icon ? */}
        <div className="w-6 ">
          <img src="public/img/Question.png" alt="Notifications" className="w-full h-full object-contain hover:cursor-pointer" />
        </div>

        {/* Avatar user */}
        <div className="w-8 rounded-full">
          <img src="public/img/Avatar (1).png" alt="User" className="w-full h-full object-cover hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

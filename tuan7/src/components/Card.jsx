import React, { useState, useContext } from 'react'

export default function Card({title, value, change, icon, bg}) {
  var bgColor, hoverColor
  if (bg == 'pink') {
    bgColor = 'bg-pink-50'
    hoverColor = 'hover:bg-pink-300'
  } else if (bg = 'blue') {
    bgColor = 'bg-blue-50'
    hoverColor = 'hover:bg-blue-300'
  }
  return (
    <div className={`flex p-4 rounded justify-between ${bgColor}`}>
      <div className="">
        <span className='font-medium'>{title}</span>
        <h2 className='text-2xl font-bold mt-2 mb-2'>${value}</h2>
        <span>
          {
            change > 0 
            ? <span className='text-green-600 font-medium '>
                +{change}%
              </span> 
            : <span className='text-red-600 font-medium'>
                {change}% 
              </span> 
          } 
          <span> period of change</span>
        </span>
      </div>

      <div className="icon">
        <img src={icon} alt="icon" className={`hover:cursor-pointer rounded ${hoverColor} `}/>
      </div>
    </div>
  )
}

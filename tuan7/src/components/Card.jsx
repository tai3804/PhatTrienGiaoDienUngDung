import React, { useState, useContext } from 'react'

export default function Card({title, value, change, icon, bg}) {
  return (
    <div className={`flex p-4 rounded justify-between bg-${bg}-50`}>
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
        <img src={icon} alt="icon" className={`hover:cursor-pointer rounded hover:bg-${bg}-300 `}/>
      </div>
    </div>
  )
}

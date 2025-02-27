import React from 'react'
import '../css/Tab.css'

export default function Tab({text, color, bgColor}) {
  return (
    <span style={{color: color, backgroundColor: bgColor}} className='tab'> 
        {text}
    </span>
  )
}

import React from 'react'
import './BookTable.css'

export default function BookTable({text, color, bgColor}) {
  return (
    <div id='book-table'>
        <button
            style={{
                color: color,
                backgroundColor: bgColor
            }}
        >
            {text}
        </button>
    </div>
  )
}

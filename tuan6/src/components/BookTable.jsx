import React from 'react'

export default function BookTable({text, color, bgColor, setShowCart}) {
  return (
    <button
        style={{
            display: "flex",
            alignItems: "center",
            color: color,
            backgroundColor: bgColor,
            height: '32px',
            marginRight: '8px'
        }}
        onClick={() => {setShowCart(true)}}
    >
        {text}    
    </button>
  )
}

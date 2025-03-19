import React from 'react'
import data from '../data/menu.js'
import './MenuList.css'

export default function MenuList() {

  return (
    <div className='menu'>
        {
            data.map( (item) => {
                return (
                    <div className='menuItem'>
                        <img src={item.img} alt="pho" />
                        <div className="text">
                            <h4>{item.ten}</h4>
                            <p>Giá: {item.gia}</p>
                        </div>
                        <button>đặt món</button>
                    </div>
                )
            })
        }
    </div>
  )
}

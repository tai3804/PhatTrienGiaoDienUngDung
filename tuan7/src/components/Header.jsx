import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div id='header'>
        <h1 className="header-title">Dashboard</h1>
        
        <div className="header-right">
            <div className="header__search">
                <img className='header__search-icon' src="src/imgs/Search.png" alt="search icon" />
                <input type="text" placeholder='Search...' />
            </div>
            <img className='header-right-item' src="src/imgs/Bell 1.png" alt="bell icon" />
            <img className='header-right-item' src="src/imgs/Question 1.png" alt="? icon" />
            <img  src="src\imgs\Avatar 313.png" alt="user img" />
        </div>

    </div>
  )
}

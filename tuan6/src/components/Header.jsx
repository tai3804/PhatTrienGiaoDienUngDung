import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import BookTable from './BookTable'

export default function Header({setShowCart}) {
  return (
    <div id='header'>
        <nav className='header__nav'>
            <li className='header__nav-item'>
                <Link className='header__nav-link' to="/">Home</Link>
            </li>
            <li className='header__nav-item'>
                <Link className='header__nav-link' to="/contact">Contact</Link>
            </li>
            <li className='header__nav-item'>
                <Link className='header__nav-link' to="/menu">Menu</Link>
            </li>
        </nav>

        <BookTable text="Book Table" bgColor='#333' setShowCart = {setShowCart}></BookTable>
    </div>
  )
}

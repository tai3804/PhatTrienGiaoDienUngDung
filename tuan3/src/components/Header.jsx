import React from 'react'
import '../css/Header.css';
import logo from '../img/logo.png'
import userImg from '../img/user_img.png'
import '../icon/themify-icons/themify-icons.css'

export default function Header() {
  return (
    <div id='header'>
        <div id="header_left">
            <img src={logo} alt="logo" id='logo_img'/>

            <div id="header_search">
                <i className='ti-search search_icon'></i>
                <input type="text" placeholder="Seach" />
            </div>
        </div>

        <div id="header_right">
            <div id="nav">
                <a className='nav-item' id='what-to-cook'>what-to-cook</a>
                <a className='nav-item' id="recipes">Recipes</a>
                <a className='nav-item' id="ingredients">Ingredients</a>
                <a className='nav-item' id='occaions'>Occasions</a>
                <a className='nav-item' id="about-us">About Us</a>
            </div>
            
            <div id="user">
                <span id='user_text'> <i className='ti-receipt user-receipt-icon'></i> Your Recipe Box</span>
                <img src={userImg} alt="" id='user_img'/>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Header.css'
import BookTable from './BookTable'

export default function Header() {
  return ( 
    <div id='header'>
      <ul>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Thực đơn</a></li>
        <li><a href="#">Liên hệ</a></li>
      </ul>

      <BookTable color='white' text='Đặt bàn' bgColor='rgb(107, 107, 107)'/>      
    </div>
  )
}

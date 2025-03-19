import React from 'react'
import Header from '../components/Header.jsx'
import MenuList from '../components/MenuList.jsx'
import Footer from '../components/Footer.jsx'
import './Menu.css'

export default function Menu() {
  return (
    <div>
      <Header />
      <div className="container">
          <MenuList />
      </div>
      <Footer />
    </div>
  )
}

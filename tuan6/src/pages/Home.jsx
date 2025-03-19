import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content">
        Chào mừng đến với nhà hàng "ABC"
      </div>
      <Footer />
    </div>
  )
}

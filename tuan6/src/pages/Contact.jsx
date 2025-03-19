import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Contact() {
  return (
    <div>
        <Header></Header>
        <div className="content">
            <h1>Liên hệ</h1>
            <p>Địa chỉ: 123 đường ABC, quận XYZ, TP.HCM</p>
            <p>Điện thoại: 0123456789</p>
            <p>Email:</p>
        </div>
        <Footer></Footer>
    </div>
  )
}

import React from 'react'
import SideBar from '../components/SideBar'
import './Dashboard.css'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Content from '../components/Content.jsx'

export default function Dashboard() {
  return (
    <div id='container'>
        <SideBar />
        <Header />
        <Slider />
        <Content />
    </div>
  )
}


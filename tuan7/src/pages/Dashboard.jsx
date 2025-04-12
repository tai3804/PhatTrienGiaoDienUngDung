import React from 'react'

import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Detail from '../components/Detail'

export default function Dashboard() {
  return (
    <div className='grid' style={{
        gridTemplateAreas: `
            "sidebar header"
            "sidebar overview"
            "sidebar detail"
        `,
        gridTemplateColumns: '1fr 4fr',
        gridTemplateRows: "64px 200px auto"
    }}>
        <Sidebar></Sidebar>
        <Header></Header>
        <Overview></Overview>
        <Detail></Detail>
    </div>
  )
}

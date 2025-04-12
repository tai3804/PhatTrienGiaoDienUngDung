import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Detail from '../components/Detail'
import Project from '../components/Project'
import Team from '../components/Team'
import Analytic from '../components/Analytic'
import Message from '../components/Message'
import Integration from '../components/Itegration'

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
        <Routes>
          <Route path='/' element={
            <div>
              <Overview />
              <Detail />
            </div>              
          }>
          </Route>

          <Route path='/project' element={ <Project/> }></Route>
          <Route path='/team' element={ <Team/> }></Route>
          <Route path='/analytic' element={ <Analytic/> }></Route>
          <Route path='/message' element={ <Message/> }></Route>
          <Route path='/integration' element={ <Integration/> }></Route>


        </Routes>

    </div>
  )
}

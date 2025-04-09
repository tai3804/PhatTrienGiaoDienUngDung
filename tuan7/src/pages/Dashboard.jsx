import React from 'react'
import { Route, Routes } from 'react-router-dom'


import SideBar from '../components/SideBar'
import './Dashboard.css'

import Header from '../components/Header'
import Slider from '../components/Slider'
import Content from '../components/Content.jsx'
import Project from '../components/Project.jsx'
import Teams from '../components/Teams.jsx'
import Analytic from '../components/Analytic.jsx'
import Message from '../components/Message.jsx'
import Integration from '../components/Integration.jsx'

export default function Dashboard() {
  return (
    <div id='container'>
        <SideBar />
        <Routes>
          <Route path='/dashboard' element={ 
            <>
              <Header />
              <Slider />
              <Content/>
            </> 
            } 
          />
          <Route path='/project' element={ <Project/> } />
          <Route path='/teams' element={ <Teams/> } />
          <Route path='/analytics' element={ <Analytic/> } />
          <Route path='/messages' element={ <Message/> } />
          <Route path='/integrations' element={ <Integration/> } />
        </Routes>
    </div>
  )
}


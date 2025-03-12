import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import Tab from './components/Tab'
import notFounImg from './img/not-found-img.png'
import Footer from './components/Footer'
import Invest from './components/Invest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='main-container'>
      <div className="" id="cau1">
        <Header/>
        <div id="main">
          <FilterBar/>
          <div id="content">
            <h1 className='heading_text'>Sorry, no results were found for "cakescascsa"</h1>
            <img src={notFounImg} alt="" />
            <br />
            We have all your independence Day sweets covered

            <div className="tab-container">
              <Tab text='Sweet Cake' color='#F9568C' bgColor='#FFE8F0'/>
              <Tab text='Black Cake' color='#5E00FF' bgColor='#F0E2FF'/>
              <Tab text='Pozole Verde' color='#F9568C' bgColor='#FFE8F0'/>
              <Tab text='Heathy food' color='#009A80' bgColor='#E9FFFC'/>
            </div>
          </div>
        </div>
        <Footer/>  
      </div>

      <div className="" id="cau2" style={{ margin: '400px 0'}}>
        <Invest></Invest>
        
      </div>

    </div>
  )
}

export default App

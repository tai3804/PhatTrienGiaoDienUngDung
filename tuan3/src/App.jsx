import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FilterBar from './components/FilterBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <FilterBar/>
    </>
  )
}

export default App

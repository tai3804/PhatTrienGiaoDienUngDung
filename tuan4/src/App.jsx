import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeBoxIntro from './components/RecipeBoxIntro'
import RecipeList from './components/RecipeList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <RecipeBoxIntro></RecipeBoxIntro>
      <RecipeList></RecipeList>
      <Footer></Footer>
    </div>
  )
}

export default App

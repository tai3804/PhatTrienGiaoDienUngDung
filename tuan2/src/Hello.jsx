import { useState } from 'react'
import './Hello.css'

function Hello() {
  const [name, setName] = useState('')
  
  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  return (
    <div>
    <input type="text" onChange={handleChange}/>
    <br />
    <span>Hello {name}</span>

    </div>
  )
}

export default Hello

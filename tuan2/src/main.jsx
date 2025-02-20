import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './hello'
import Cal from './cal'
import Button from './Button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
    <Cal />
    <Button text='Custom Button' bgColor='lightBlue' color='blue'/>
  </StrictMode>,
)

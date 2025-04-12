import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import CustomerProvider from './hooks/CustomerContext';  // Import default export


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </StrictMode>,
)

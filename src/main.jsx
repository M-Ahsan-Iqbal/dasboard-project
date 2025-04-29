import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashbaord from './components/Dashbaord'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashbaord />
  </StrictMode>,
)

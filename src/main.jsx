import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const setAppVh = () => {
  document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`)
}

setAppVh()
window.addEventListener('resize', setAppVh)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

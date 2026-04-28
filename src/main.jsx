import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const setAppVh = () => {
  const viewportHeight = window.visualViewport?.height || window.innerHeight
  document.documentElement.style.setProperty('--app-vh', `${viewportHeight * 0.01}px`)
}

setAppVh()
window.addEventListener('resize', setAppVh)
window.visualViewport?.addEventListener('resize', setAppVh)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

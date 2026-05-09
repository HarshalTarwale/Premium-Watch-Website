import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'

const setAppVh = () => {
  const viewportHeight = window.visualViewport?.height || window.innerHeight
  document.documentElement.style.setProperty('--app-vh', `${viewportHeight * 0.01}px`)
}

setAppVh()
window.addEventListener('resize', setAppVh)
window.visualViewport?.addEventListener('resize', setAppVh)

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const root = createRoot(document.getElementById('root'))

if (!clerkPublishableKey) {
  root.render(
    <StrictMode>
      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '24px' }}>
        <h1 style={{ fontSize: '20px', marginBottom: '8px' }}>Missing Clerk key</h1>
        <p>Add VITE_CLERK_PUBLISHABLE_KEY to your .env file, then restart the dev server.</p>
      </div>
    </StrictMode>,
  )
} else {
  root.render(
    <StrictMode>
      <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </StrictMode>,
  )
}

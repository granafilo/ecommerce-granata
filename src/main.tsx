import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './style/app.css'
import './style/token.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
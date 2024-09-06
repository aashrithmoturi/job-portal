import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Practice  from './components/Practice.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      {/* <Practice /> */}
    </>
      
  </StrictMode>,
)
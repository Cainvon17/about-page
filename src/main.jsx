import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './components/about/about.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <About />
  </BrowserRouter>
)

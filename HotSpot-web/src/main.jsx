import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/styles/index.css'
import App from '/src/App.jsx'
import Map from './pages/MapPage/map'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/MapPage" element={<Map />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

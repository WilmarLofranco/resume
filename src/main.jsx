import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { Header } from './Header.jsx'
import EducationList from './EducationList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <EducationList />
  </StrictMode>,
)

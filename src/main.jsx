import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { Header } from './Header.jsx'
import EducationList from './EducationList.jsx'
import ExperienceList from './Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <EducationList />
    <ExperienceList />
  </StrictMode>,
)

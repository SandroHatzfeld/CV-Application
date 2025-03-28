import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MiscMenu from './components/MiscMenu.jsx'
import CVRenderer from './components/CVRenderer.jsx'
import Mainmenu from './components/Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiscMenu />
    <Mainmenu />
    <CVRenderer />
  </StrictMode>,
)

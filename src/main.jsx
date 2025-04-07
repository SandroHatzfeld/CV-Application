import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './styles/index.scss'
import './styles/renderer.scss'
import './styles/fonts.scss'
import './fonts/GreatVibes-Regular.ttf'
import './fonts/JosefinSans-VariableFont_wght.ttf'
import './fonts/Oswald-VariableFont_wght.ttf'
import './fonts/Roboto-VariableFont_wdth_wght.ttf'
import App from './App.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)

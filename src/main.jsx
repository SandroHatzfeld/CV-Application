import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import MiscMenu from "./components/menu/MiscMenu.jsx"
import CVRenderer from "./components/rendering/CVRenderer.jsx"
import Menu from "./components/menu/Menu.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MiscMenu />
    <Menu />
    <CVRenderer />
  </StrictMode>
)

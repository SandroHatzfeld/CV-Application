import { useState } from "react"
import MiscMenu from "./components/menu/MiscMenu.jsx"
import CVRenderer from "./components/rendering/CVRenderer.jsx"
import Menu from "./components/menu/Menu.jsx"

export default function App() {
  const [itemsPersonal, setItemsPersonal] = useState({})
  const [itemsEducation, setItemsEducation] = useState([])
  const [itemsBusiness, setItemsBusiness] = useState([])
  const [settings, setSettings] = useState({
    backgroundColor: "#efefef",
    headerColor: "#efab41",
    fontColor: "#3b3b3b",
    headingFont: "Arial",
    paragraphFont: "Arial",
    footerFont: "Arial",
    layoutOption: "0",
  })

  return (
    <>
      <MiscMenu
        setItemsPersonal={setItemsPersonal}
        setItemsEducation={setItemsEducation}
        setItemsBusiness={setItemsBusiness}
        setSettings={setSettings}
      />
      <Menu
        itemsPersonal={itemsPersonal}
        setItemsPersonal={setItemsPersonal}
        itemsEducation={itemsEducation}
        setItemsEducation={setItemsEducation}
        itemsBusiness={itemsBusiness}
        setItemsBusiness={setItemsBusiness}
        settings={settings}
        setSettings={setSettings}
      />
      <div className="renderer-wrapper" id="cv">
        <div className="renderer"><CVRenderer
        dataPersonal={itemsPersonal}
        itemsEducation={itemsEducation}
        itemsBusiness={itemsBusiness}
        settings={settings}
      /></div>
      </div>
      
    </>
  )
}

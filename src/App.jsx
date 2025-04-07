import { useState } from "react"
import MiscMenu from "./components/menu/MiscMenu.jsx"
import CVRenderer from "./components/rendering/CVRenderer.jsx"
import Menu from "./components/menu/Menu.jsx"
import { defaultCustomiztion, defaultLayoutSetting } from './components/settings/defaultData.jsx'

export default function App() {
  const [itemsPersonal, setItemsPersonal] = useState({})
  const [itemsEducation, setItemsEducation] = useState([])
  const [itemsBusiness, setItemsBusiness] = useState([])
  const [settings, setSettings] = useState(defaultCustomiztion)
  const [layoutID, setLayoutID] = useState(defaultLayoutSetting)

  return (
    <>
      <MiscMenu
        setItemsPersonal={setItemsPersonal}
        setItemsEducation={setItemsEducation}
        setItemsBusiness={setItemsBusiness}
        setSettings={setSettings}
        setLayoutID={setLayoutID}
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
        layoutID={layoutID}
        setLayoutID={setLayoutID}
      />
      <CVRenderer
        dataPersonal={itemsPersonal}
        itemsEducation={itemsEducation}
        itemsBusiness={itemsBusiness}
        settings={settings}
        layoutID={layoutID}
      />
    </>
  )
}

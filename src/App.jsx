import { useState } from "react"
import MiscMenu from "./components/menu/MiscMenu.jsx"
import CVRenderer from "./components/rendering/CVRenderer.jsx"
import Menu from "./components/menu/Menu.jsx"

export default function App() {
  const [formData, setFormData] = useState(null)

  const collectFormData = (data) => {
		console.log("test");
		console.log(data);
		
		setFormData(data)
	}

  return (
    <>
      <MiscMenu collectFormData={collectFormData} />
      <Menu collectFormData={collectFormData} />
      <CVRenderer CVData={formData} />
    </>
  )
}

import InputColor from './inputs/InputColor.jsx'
import InputDropdown from './inputs/InputDropdown.jsx'
import InputLayout from './inputs/InputLayout.jsx'

export default function MenuCustomize({ settings, setSettings }) {
  const fontOptions = ["Arial", "Comic Sans", "Times New Roman"]
  const layoutOptions = [
    { name: "Topheavy", image: "./assets/layouts/topheavy.svg" },
    { name: "Sidebar", image: "./assets/layouts/sidebar.svg" },
    { name: "Floating", image: "./assets/layouts/floating.svg" },
    { name: "Boxes", image: "./assets/layouts/boxes.svg" },
  ]

  const handleChange = () => {
    
  }
  return (
    <>
      <div className="menu-input-container">
        <h1>Colors</h1>
        <InputColor
          labelText="Background Color"
          name="backgroundColor"
          value='#efafb2'
          handleChange={handleChange}
        />
        <InputColor
          labelText="Header Background Color"
          name="headerColor"
          value='#efafb2'
          handleChange={handleChange}
        />
        <InputColor
          labelText="Font Color"
          name="fontColor"
          value='#efafb2'
          handleChange={handleChange}
        />
      </div>
      <div className="menu-input-container">
        <h1>Fonts</h1>
        <InputDropdown
          labelText="Headings"
          name="headingFont"
          options={fontOptions}
          handleChange={handleChange}
        />
        <InputDropdown
          labelText="Paragraph"
          name="paragraphFont"
          options={fontOptions}
          handleChange={handleChange}
        />
        <InputDropdown
          labelText="Footer"
          name="footerFont"
          options={fontOptions}
          handleChange={handleChange}
        />
      </div>
      <div className="menu-input-container">
        <h1>Layouts</h1>
        <InputLayout
          name="layoutOption"
          options={layoutOptions}
          handleChange={handleChange}
        />
      </div>
    </>
  )
}

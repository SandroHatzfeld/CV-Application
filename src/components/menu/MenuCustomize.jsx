import InputColor from "./inputs/InputColor.jsx"
import InputDropdown from "./inputs/InputDropdown.jsx"
import InputLayout from "./inputs/InputLayout.jsx"

export default function MenuCustomize({ settings, setSettings }) {
  const fontOptions = ["Arial", "Comic Sans", "Times New Roman"]
  const layoutOptions = [
    {
      name: "Topheavy",
      image: "./assets/layouts/topheavy.svg",
      colors: [
        { name: "Main Color", value: "#416fef" },
        { name: "Accent Color", value: "#efab41" },
        { name: "Text Color", value: "#3b3b3b" },
        { name: "Background Color", value: "#ffffff" },
      ],
      fonts: [
        { name: "Arial" },
        { name: "Comic Sans" },
        { name: "Times New Roman" },
      ],
    },
    {
      name: "Sidebar",
      image: "./assets/layouts/sidebar.svg",
      colors: [
        { name: "Main Color", value: "#b43838" },
        { name: "Accent Color", value: "#75c02e" },
        { name: "Text Color", value: "#3b3b3b" },
        { name: "Background Color", value: "#ffffff" },
      ],
      fonts: [
        { name: "Arial" },
        { name: "Comic Sans" },
        { name: "Times New Roman" },
      ],
    },
    {
      name: "Floating",
      image: "./assets/layouts/floating.svg",
      colors: [
        { name: "Main Color", value: "#f9f6b6" },
        { name: "Box Color", value: "#2fc07a" },
        { name: "Text Color", value: "#eeeeee" },
        { name: "Background Color", value: "#3b3b3b" },
      ],
      fonts: [
        { name: "Arial" },
        { name: "Comic Sans" },
        { name: "Times New Roman" },
      ],
    },
    {
      name: "Boxes",
      image: "./assets/layouts/boxes.svg",
      colors: [
        { name: "Main Color", value: "#375199" },
        { name: "Secondary Color", value: "#142d72" },
        { name: "Text Color", value: "#e1e1e1" },
        { name: "Background Color", value: "#dddddd" },
      ],
      fonts: [
        { name: "Arial" },
        { name: "Comic Sans" },
        { name: "Times New Roman" },
      ],
    },
  ]

  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.value,
    })
    console.log(settings)
  }
  return (
    <>
      <div className="menu-input-container">
        <h1>Layouts</h1>
        <InputLayout
          name="layoutOption"
          options={layoutOptions}
          handleChange={handleChange}
        />
      </div>
      <div className="menu-input-container">
        <h1>Colors</h1>
        <InputColor
          labelText="Background Color"
          name="backgroundColor"
          value={settings.backgroundColor}
          handleChange={handleChange}
        />
        <InputColor
          labelText="Header Background Color"
          name="headerColor"
          value={settings.headerColor}
          handleChange={handleChange}
        />
        <InputColor
          labelText="Font Color"
          name="fontColor"
          value={settings.fontColor}
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
    </>
  )
}

import InputElement from "./InputElement.jsx"

export default function MenuCustomize({ settings, setSettings }) {
  const fontOptions = ["Arial", "Comic Sans", "Times New Roman"]
  const layoutOptions = [
    { name: "Topheavy", image: "./assets/layouts/topheavy.svg" },
    { name: "Sidebar", image: "./assets/layouts/sidebar.svg" },
    { name: "Floating", image: "./assets/layouts/floating.svg" },
    { name: "Boxes", image: "./assets/layouts/boxes.svg" },
  ]

  return (
    <>
      <div className="menu-input-container">
        <h1>Colors</h1>
        <InputElement
          type="color"
          labelText="Background Color"
          name="backgroundColor"
          width="form-width-100"
          value='#efafb2'
        />
        <InputElement
          type="color"
          labelText="Header Background Color"
          name="headerColor"
          width="form-width-100"
          value='#efafb2'
        />
        <InputElement
          type="color"
          labelText="Font Color"
          name="fontColor"
          width="form-width-100"
          value='#efafb2'
        />
      </div>
      <div className="menu-input-container">
        <h1>Fonts</h1>
        <InputElement
          type="select"
          labelText="Headings"
          name="headingFont"
          options={fontOptions}
          width="form-width-100"
        />
        <InputElement
          type="select"
          labelText="Paragraph"
          name="paragraphFont"
          options={fontOptions}
          width="form-width-100"
        />
        <InputElement
          type="select"
          labelText="Footer"
          name="footerFont"
          options={fontOptions}
          width="form-width-100"
        />
      </div>
      <div className="menu-input-container">
        <h1>Layouts</h1>
        <InputElement
          type="layout"
          name="layoutOption"
          options={layoutOptions}
          width="form-width-100"
        />
      </div>
    </>
  )
}

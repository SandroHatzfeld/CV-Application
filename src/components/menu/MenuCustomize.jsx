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
        />
        <InputElement
          type="color"
          labelText="Header Background Color"
          name="headerColor"
        />
        <InputElement type="color" labelText="Font Color" name="fontColor" />
      </div>
      <div className="menu-input-container">
        <h1>Fonts</h1>
        <InputElement
          type="select"
          labelText="Headings"
          name="headingFont"
          options={fontOptions}
        />
        <InputElement
          type="select"
          labelText="Paragraph"
          name="paragraphFont"
          options={fontOptions}
        />
        <InputElement
          type="select"
          labelText="Footer"
          name="footerFont"
          options={fontOptions}
        />
      </div>
      <div className="menu-input-container">
        <h1>Layouts</h1>
        <InputElement
          type="layout"
          name="layoutOption"
          options={layoutOptions}
        />
      </div>
    </>
  )
}

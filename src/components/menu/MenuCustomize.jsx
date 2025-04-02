import InputColor from "./inputs/InputColor.jsx"
import InputDropdown from "./inputs/InputDropdown.jsx"
import InputLayout from "./inputs/InputLayout.jsx"
import { layoutOptions } from '../settings/layoutOptions.jsx'
import { fontOptions } from '../settings/fontOptions.jsx'

export default function MenuCustomize({ settings, setSettings, layoutID, setLayoutID }) {
  const handleLayoutChange = (id) => {
    setLayoutID(id)

    setSettings({
      color0: layoutOptions[id].colors[0].value,
      color1: layoutOptions[id].colors[1].value,
      color2: layoutOptions[id].colors[2].value,
      color3: layoutOptions[id].colors[3].value,
      font0: fontOptions[0],
      font1: fontOptions[0],
      font2: fontOptions[0],
    })
    
  }

  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.value,
    })
    console.log(settings);
    
  }

  return (
    <>
      <div className="menu-input-container">
        <h1>Layouts</h1>
        <InputLayout
          name="layoutOption"
          options={layoutOptions}
          handleChange={handleLayoutChange}
          defaultChecked={layoutID}
        />
      </div>
      <div className="menu-input-container">
        <h1>Colors</h1>
        {layoutOptions[layoutID].colors.map((color, index) => {
          return (
            <InputColor
              key={index + color.displayName + layoutID}
              labelText={color.displayName}
              name={"color" + index}
              value={color.value}
              handleChange={handleChange}
            />
          )
        })}
      </div>
      <div className="menu-input-container">
        <h1>Fonts</h1>
        {layoutOptions[layoutID].fonts.map((font, index) => {
          return (
            <InputDropdown
              key={index + font.displayName + layoutID}
              labelText={font.displayName}
              name={"font" + index}
              options={fontOptions}
              handleChange={handleChange}
            />
          )
        })}
      </div>
    </>
  )
}

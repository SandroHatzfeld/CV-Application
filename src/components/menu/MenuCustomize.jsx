import InputColor from "./inputs/InputColor.jsx"
import InputDropdown from "./inputs/InputDropdown.jsx"
import InputLayout from "./inputs/InputLayout.jsx"
import { layoutOptions } from '../settings/layoutOptions.jsx'
import { fontOptions } from '../settings/fontOptions.jsx'
import { colorOptions } from '../settings/colorOptions.jsx'

export default function MenuCustomize({ settings, setSettings, layoutID, setLayoutID }) {
  const handleLayoutChange = (id) => {
    setLayoutID(id)    
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
          checkedID={layoutID}
        />
      </div>
      <div className="menu-input-container">
        <h1>Colors</h1>
        {colorOptions.map((color, index) => {
          return (
            <InputColor
              key={index + color.displayName + layoutID}
              labelText={color.displayName}
              name={color.name}
              value={settings[color.name]? settings[color.name]: color.defaultValue}
              handleChange={handleChange}
            />
          )
        })}
      </div>
      <div className="menu-input-container">
        <h1>Fonts</h1>
        {fontOptions.areas.map((area, index) => {
          return (
            <InputDropdown
              key={index + area + layoutID}
              labelText={area}
              name={area}
              selected={settings[area] ? settings[area] : fontOptions.options[0]}
              options={fontOptions.options}
              handleChange={handleChange}
            />
          )
        })}
      </div>
    </>
  )
}

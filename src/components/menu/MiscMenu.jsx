import html2pdf from "html2pdf.js"
import InputButton from "./inputs/InputButton.jsx"
import {
  dataBusiness,
  dataEducation,
  dataPersonal,
} from "../settings/defaultData.jsx"
import { layoutOptions } from "../settings/layoutOptions.jsx"
import { fontOptions } from "../settings/fontOptions.jsx"

export default function MiscMenu({
  setItemsPersonal,
  setItemsEducation,
  setItemsBusiness,
  setSettings,
  setLayoutID,
}) {
  const setDefaultData = () => {
    setItemsPersonal(dataPersonal)
    setItemsEducation(dataEducation)
    setItemsBusiness(dataBusiness)
    setSettings({
      color0: layoutOptions[0].colors[0].value,
      color1: layoutOptions[0].colors[1].value,
      color2: layoutOptions[0].colors[2].value,
      color3: layoutOptions[0].colors[3].value,
      font0: fontOptions[0],
      font1: fontOptions[0],
      font2: fontOptions[0],
    })
    setLayoutID(0)
  }

  const removeAllData = () => {
    setItemsPersonal({})
    setItemsEducation([])
    setItemsBusiness([])
    setSettings({})
    setLayoutID(0)
  }

  const printCV = () => {
    const cv = document.querySelector("#cv")
    cv.classList.add("printing")
    const printOptions = {
      margin: 0,
      filename: "myGeneratedCV.pdf",
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        putOnlyUsedFonts: true,
      },
    }
    html2pdf().set(printOptions).from(cv).save()
    // .then( cv.classList.remove('printing'))
  }
  return (
    <div className="misc-menu-wrapper">
      <InputButton
        icon="./assets/icons/trash.svg"
        inputText="Clear all data"
        onClick={removeAllData}
      />
      <InputButton
        icon="./assets/icons/database.svg"
        inputText="Fill with example data"
        onClick={setDefaultData}
      />
      <InputButton
        icon="./assets/icons/printer.svg"
        inputText="Export for printing"
        onClick={printCV}
      />
    </div>
  )
}

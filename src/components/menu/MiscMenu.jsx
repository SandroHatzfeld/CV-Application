import html2pdf from "html2pdf.js"
import InputButton from "./inputs/InputButton.jsx"
import {
  defaultBusiness,
  defaultEducation,
  defaultPersonal,
  defaultCustomiztion,
  defaultLayoutSetting,
} from "../../../defaultData.jsx"
import trashImg from "../../assets/icons/trash.svg"
import databaseImg from "../../assets/icons/database.svg"
import printerImg from "../../assets/icons/printer.svg"

export default function MiscMenu({
  setItemsPersonal,
  setItemsEducation,
  setItemsBusiness,
  setSettings,
  setLayoutID,
}) {
  const setDefaultData = () => {
    setItemsPersonal(defaultPersonal)
    setItemsEducation(defaultEducation)
    setItemsBusiness(defaultBusiness)
    setSettings(defaultCustomiztion)
    setLayoutID(defaultLayoutSetting)
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
    cv.classList.remove("display")
    const printOptions = {
      margin: 1,
      filename: "myGeneratedCV.pdf",
      html2canvas: {
        scale: 1,
        scrollY: 0,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        putOnlyUsedFonts: true,
      },
    }
    html2pdf()
      .set(printOptions)
      .from(cv)
      .save()
      .then(cv.classList.add("display"))
  }
  return (
    <div className="misc-menu-wrapper">
      <InputButton
        icon={trashImg}
        inputText="Clear all data"
        onClick={removeAllData}
      />
      <InputButton
        icon={databaseImg}
        inputText="Fill with example data"
        onClick={setDefaultData}
      />
      <InputButton
        icon={printerImg}
        inputText="Export for printing"
        onClick={printCV}
      />
    </div>
  )
}

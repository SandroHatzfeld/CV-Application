import { useState } from 'react'
// import html2pdf from "html2pdf.js"
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
import arrowImg from '../../assets/icons/arrow.svg'

export default function MiscMenu({
  setItemsPersonal,
  setItemsEducation,
  setItemsBusiness,
  setSettings,
  setLayoutID,
}) {
  const [hideMenu, setHideMenu] = useState(true)

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

  window.addEventListener("beforeprint", () => {
    document.body.classList.add("print")
  })
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print")
  })

  const printCV = () => {
    print()
    // html2pdf had issues with positioning
    // const cv = document.querySelector("#cv")

    // const printOptions = {
    //   margin: 0,
    //   filename: "myGeneratedCV.pdf",
    //   html2canvas: {
    //     scale: 1,
    //     scrollY: 0,
    //   },
    //   jsPDF: {
    //     unit: "mm",
    //     format: "a4",
    //     orientation: "portrait",
    //     putOnlyUsedFonts: true,
    //     userUnit: 1.0,
    //   },
    // }
    

    // html2pdf().set(printOptions).from(cv).save().then()

  }

  const toggleMenu = () => {
    setHideMenu(!hideMenu)
  }
  return (
    <div className={`misc-menu-wrapper ${hideMenu && 'hidden'}`}>
        
      <div className="misc-menu-content">
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
        <p>If your have borders around the CV while printing, check your "margin" settings in the print-dialog.</p>
      </div>
      <InputButton
          icon={arrowImg}
          inputText=''
          onClick={toggleMenu}
          classes='toggleBtn'
          bgColor='var(--bg-level1)'
        />
    </div>
  )
}

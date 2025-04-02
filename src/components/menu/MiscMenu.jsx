import html2pdf from 'html2pdf.js'
import InputButton from "./inputs/InputButton.jsx"

export default function MiscMenu({
  setItemsPersonal,
  setItemsEducation,
  setItemsBusiness,
  setSettings,
}) {
  const defaultDataPersonal = {
    title: "Dr.",
    firstName: "Hans",
    lastName: "Dieter",
    eMail: "hans.dieter1961@gmail.com",
    phoneNumber: "+19199 938877",
    birthday: "1961-02-26",
    street: "Mainstreet",
    number: "43a",
    zip: "88981",
    city: "Maintown",
  }
  const defaultDataEducation = [
    {
      id: crypto.randomUUID(),
      name: "Collage ",
      degree: "Major",
      location: "Tennessee",
      start: "1975-03-10",
      end: "1983-05-12",
    },
    {
      id: crypto.randomUUID(),
      name: "University ",
      degree: "Doctor of Biology",
      location: "New York",
      start: "1994-03-10",
      end: "2001-05-12",
    },
  ]
  const defaultDataBusiness = [
    {
      id: crypto.randomUUID(),
      name: "Teacher for Biology",
      position: "Teacher",
      description: "Teaching students in the university of Ottowa",
      start: "2003-08-19",
      end: "2020-12-01",
    },
  ]
  const defaultDataSettings = {
    color0: "#3b3b3b",
    color1: "#efefef",
    color2: "#416fef",
    color3: "#efab41",
    font0: "Arial",
    font1: "Arial",
    font2: "Arial",
  }

  const setDefaultData = () => {
    setItemsPersonal(defaultDataPersonal)
    setItemsEducation(defaultDataEducation)
    setItemsBusiness(defaultDataBusiness)
    setSettings(defaultDataSettings)
  }

  const removeAllData = () => {
    setItemsPersonal({})
    setItemsEducation([])
    setItemsBusiness([])
    setSettings(defaultDataSettings)
  }

  const printCV = () => {
    const cv = document.querySelector("#cv")
    cv.classList.add('printing')
    const printOptions = {
      margin: 0,
      filename: 'myGeneratedCV.pdf',
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        putOnlyUsedFonts: true,
      }
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

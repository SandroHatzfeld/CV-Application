import CVLayout1 from "./components/CVLayout1.jsx"
import CVLayout2 from "./components/CVLayout2.jsx"
import CVLayout3 from "./components/CVLayout3.jsx"
import CVLayout4 from "./components/CVLayout4.jsx"

export default function CVRenderer(props) {
  let component = null

  switch (props.layoutID) {
    case 0:
      component = <CVLayout1 {...props} />
      break
    case 1:
      component = <CVLayout2 {...props} />
      break
    case 2:
      component = <CVLayout3 {...props} />
      break
    case 3:
      component = <CVLayout4 {...props} />
      break
    default:
      break
  }

  

  return (
    <>
      <div className="renderer-wrapper">
        <div className="renderer" id="cv">
          {component}
        </div>
      </div>
    </>
  )
}

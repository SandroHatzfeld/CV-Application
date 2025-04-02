import MenuPersonal from "./MenuPersonal.jsx"
import MenuCustomize from "./MenuCustomize.jsx"
import MenuEducation from "./MenuEducation.jsx"
import MenuExperience from "./MenuExperience.jsx"

export default function MenuContent(props) {
  switch (props.tabIndex) {
    case 0:
      return (
        <>
          <p>{props.description}</p>
          <MenuPersonal
            items={props.itemsPersonal}
            setItems={props.setItemsPersonal}
          />
        </>
      )
    case 1:
      return (
        <>
          <p>{props.description}</p>
          <MenuEducation
            items={props.itemsEducation}
            setItems={props.setItemsEducation}
          />
        </>
      )
    case 2:
      return (
        <>
          <p>{props.description}</p>
          <MenuExperience
            items={props.itemsBusiness}
            setItems={props.setItemsBusiness}
          />
        </>
      )
    case 3:
      return (
        <>
          <p>{props.description}</p>
          <MenuCustomize
            settings={props.settings}
            setSettings={props.setSettings}
            layoutID={props.layoutID}
            setLayoutID={props.setLayoutID}
          />
        </>
      )
    default:
      break
  }

  return <div></div>
}

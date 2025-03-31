import MenuPersonal from "./MenuPersonal.jsx"
import MenuCustomize from "./MenuCustomize.jsx"
import MenuEducation from "./MenuEducation.jsx"
import MenuBusiness from "./MenuBusiness.jsx"

export default function MenuContent({
  description,
  tabIndex,
  itemsPersonal,
  setItemsPersonal,
  itemsEducation,
  setItemsEducation,
  itemsBusiness,
  setItemsBusiness,
	settings,
	setSettings,
}) {
  

  switch (tabIndex) {
    case 0:
      return (
        <>
          <p>{description}</p>
          <MenuPersonal items={itemsPersonal} setItems={setItemsPersonal} />
        </>
      )
    case 1:
      return (
        <>
          <p>{description}</p>
          <MenuEducation items={itemsEducation} setItems={setItemsEducation} />
        </>
      )
    case 2:
      return (
        <>
          <p>{description}</p>
          <MenuBusiness items={itemsBusiness} setItems={setItemsBusiness} />
        </>
      )
    case 3:
      return (
        <>
          <p>{description}</p>
          <MenuCustomize settings={settings} setSettings={setSettings} />
        </>
      )
    default:
      break
  }

  return <div></div>
}

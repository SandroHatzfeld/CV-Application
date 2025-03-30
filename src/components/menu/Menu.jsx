import { useState } from "react"
import MenuContent from "./MenuContent.jsx"
import MenuTab from "./MenuTabs.jsx"

const tabs = [
  {
    name: "Personal Information",
    description:
      "Please enter some personal information about you, that will be displayed on your CV.",
  },
  {
    name: "Educational experience",
    description:
      "Please enter some information about your educational history. Add more entries by clicking the plus icon. Use the handles to reorder the entries.",
  },
  {
    name: "Business experience",
    description:
      "Please enter some information about your work history. Add more entries by clicking the plus icon. Use the handles to reorder the entries.",
  },
  {
    name: "Customize layouts",
    description:
      "Customize the colors, layout and many more elements of your CV.",
  },
]

export default function Menu({collectFormData}) {
  const [currentTab, setCurrentTab] = useState(0)

  const changeTab = (index) => {
    setCurrentTab(index)
  }

  
  return (
    <div className="menu">
      <div className="menu-tab-container">
        {tabs.map((tab, index) => {
          return (
            <MenuTab
              key={index + tab.name}
              handleClick={() => changeTab(index)}
              tabName={tab.name}
							isActive={index === currentTab}
            />
          )
        })}
      </div>
      <div className="menu-content">
        <MenuContent
          description={tabs[currentTab].description}
          tabIndex={currentTab}
          collectMenuData={collectFormData}
        />
      </div>
    </div>
  )
}

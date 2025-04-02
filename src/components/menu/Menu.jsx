import { useState } from "react"
import MenuContent from "./MenuContent.jsx"
import MenuTab from "./MenuTabs.jsx"
import { tabs } from '../settings/tabs.jsx'


export default function Menu(props) {
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
          {...props}
        />
      </div>
    </div>
  )
}

import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import { arrayMove } from "@dnd-kit/sortable"
import InputElement from "./InputElement.jsx"
import InputFormEntry from "./InputFormEntry.jsx"

export default function MenuEducation() {
  const [items, setItems] = useState([{id: crypto.randomUUID(), name: "TEsteeee", degree: "aodfvowowow", location: "etstlafe", start: "81.92.19", end:"f99wq.90aw"}])

  // handle function for sorting items. Usually inside the dndcontext, but moved out to be able the change the useState
  function handleDragEnd(event) {
    const { active, over } = event
    console.log(event);
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        console.log(items, oldIndex, newIndex);
        
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // collect the values and push them to the array
  const handleSubmit = (event) => {   
    event.preventDefault()
    
    const newItem = {
      id: crypto.randomUUID(),
      name: event.target.schoolName.value,
      degree: event.target.degree.value,
      location: event.target.location.value,
      start: event.target.start.value,
      end: event.target.end.value,
    }
    
    setItems(items => [...items, newItem])
  }

  return (
    <>
      <DndContextWrapper items={items} handleDragEnd={handleDragEnd} />
      <InputFormEntry handleSubmit={handleSubmit}>
        <InputElement labelText="School" width="form-width-100" name='schoolName'/>
        <div className="input-row">
          <InputElement labelText="Degree" name='degree'/>
          <InputElement labelText="Location" name='location'/>
        </div>
        <div className="input-row">
          <InputElement labelText="Start" type="date" name='start'/>
          <InputElement labelText="End" type="date" name='end'/>
        </div>
      </InputFormEntry>
    </>
  )
}

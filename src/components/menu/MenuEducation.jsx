import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import InputElement from "./InputElement.jsx"
import InputFormEntry from "./InputFormEntry.jsx"

export default function MenuEducation() {
  

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
    
  }

  return (
    <>
      <DndContextWrapper />
      <InputFormEntry handleSubmit={handleSubmit}>
        <InputElement labelText="School" width="form-width-100" name='schoolName' required={true}/>
        <div className="input-row">
          <InputElement labelText="Degree" name='degree'/>
          <InputElement labelText="Location" name='location' required={true}/>
        </div>
        <div className="input-row">
          <InputElement labelText="Start" type="date" name='start'/>
          <InputElement labelText="End" type="date" name='end'/>
        </div>
      </InputFormEntry>
    </>
  )
}

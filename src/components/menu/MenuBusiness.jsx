import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import { arrayMove } from "@dnd-kit/sortable"
import InputElement from "./InputElement.jsx"
import InputFormEntry from "./InputFormEntry.jsx"

export default function MenuBusiness() {
  const [items, setItems] = useState([])

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // collect the values and push them to the array
  const handleSubmit = (event) => {
    event.preventDefault()

    const newItem = {
      id: crypto.randomUUID(),
      name: event.target.business.value,
      degree: event.target.position.value,
      location: event.target.description.value,
      start: event.target.start.value,
      end: event.target.end.value,
    }

    setItems((items) => [...items, newItem])
  }

	//
	const handleEditItem = (id) => {
		console.log(id);
		
	}

	// remove items based on their index and update the useState
	const handleRemoveItem = (id) => {
		setItems(items => items.filter(item => item.id !== id))
	}

  return (
    <>
      <DndContextWrapper handleDragEnd={handleDragEnd} items={items} removeItem={handleRemoveItem} editItem={handleEditItem}/>
      <InputFormEntry handleSubmit={handleSubmit}>
        <InputElement
          labelText="Business"
          width="form-width-100"
          required={true}
          name="business"
        />
        <InputElement
          labelText="Position"
          width="form-width-100"
          name="position"
        />
        <InputElement
          labelText="Description"
          type="textarea"
          width="form-width-100"
          name="description"
        />
        <div className="input-row">
          <InputElement labelText="Start" type="date" name="start" />
          <InputElement labelText="End" type="date" name="end" />
        </div>
      </InputFormEntry>
    </>
  )
}

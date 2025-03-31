import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import { arrayMove } from "@dnd-kit/sortable"
import InputElement from "./InputElement.jsx"
import InputFormEntry from "./InputFormEntry.jsx"

export default function MenuBusiness({items, setItems}) {
  const [inputVisible, setInputVisible] = useState(true)
  const [filledValues, setFilledValues] = useState({})
  const [currentlyEditing, setCurrentlyEditing] = useState(false)

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

    if (currentlyEditing) {
      const editedItem = {
        id: filledValues.id,
        name: event.target.business.value,
        position: event.target.position.value,
        description: event.target.description.value,
        start: event.target.start.value,
        end: event.target.end.value,
      }

      const changedItems = items.map((item) => {
        if (item.id === editedItem.id) {
          return editedItem
        } else {
          return item
        }
      })

      setItems(changedItems)
      setCurrentlyEditing(false)
      setFilledValues({})
    } else {
      const newItem = {
        id: crypto.randomUUID(),
        name: event.target.business.value,
        position: event.target.position.value,
        description: event.target.description.value,
        start: event.target.start.value,
        end: event.target.end.value,
      }

      setItems((items) => [...items, newItem])
    }
  }

  const handleEditItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id)

    setFilledValues({
			id: items[itemIndex].id,
      name: items[itemIndex].name,
      position: items[itemIndex].position,
      location: items[itemIndex].description,
      start: items[itemIndex].start,
      end: items[itemIndex].end,
    })
    setInputVisible(true)
    setCurrentlyEditing(true)
  }

  // remove items based on their index and update the useState
  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  // allow button to toggle visibility
  const toggleInputVisible = () => {
    setInputVisible((inputVisible) => !inputVisible)
  }

  // submit and toggle input field after
  const toggleInputAndSubmit = (event) => {
    handleSubmit(event)
    setInputVisible((inputVisible) => !inputVisible)
  }

  return (
    <>
      <DndContextWrapper
        handleDragEnd={handleDragEnd}
        items={items}
        removeItem={handleRemoveItem}
        editItem={handleEditItem}
      />
      <InputFormEntry
        handleSubmit={handleSubmit}
        toggleInputVisible={toggleInputVisible}
        toggleInputAndSubmit={toggleInputAndSubmit}
        inputVisible={inputVisible}
      >
        <InputElement
          labelText="Business"
          width="form-width-100"
          required={true}
          name="business"
          value={filledValues.name}
        />
        <InputElement
          labelText="Position"
          width="form-width-100"
          name="position"
          value={filledValues.position}
        />
        <InputElement
          labelText="Description"
          type="textarea"
          width="form-width-100"
          name="description"
          value={filledValues.location}
        />
        <div className="input-row">
          <InputElement
            labelText="Start"
            type="date"
            name="start"
            value={filledValues.start}
          />
          <InputElement
            labelText="End"
            type="date"
            name="end"
            value={filledValues.end}
          />
        </div>
      </InputFormEntry>
    </>
  )
}

import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import { arrayMove } from "@dnd-kit/sortable"
import InputElement from "./inputs/InputElement.jsx"
import InputFormEntry from "./inputs/InputFormEntry.jsx"
import InputCheckbox from "./inputs/InputCheckbox.jsx"
import { useImmer } from 'use-immer'

export default function MenuExperience({ items, setItems }) {
  const [inputVisible, setInputVisible] = useState(false)
  const [filledValues, setFilledValues] = useImmer({})
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
        name: event.target.name.value,
        position: event.target.position.value,
        location: event.target.location.value,
        description: event.target.description.value,
        start: event.target.start.value,
        end: event.target.end.value,
        currentPlace: event.target.currentPlace.value,
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
        name: event.target.name.value,
        position: event.target.position.value,
        location: event.target.location.value,
        description: event.target.description.value,
        start: event.target.start.value,
        end: event.target.end.value,
        currentPlace: event.target.currentPlace.value,
      }

      setItems((items) => [...items, newItem])
    }
  }

  const handleEditItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id)

    setFilledValues(draft => {
      draft.id = items[itemIndex].id
      draft.name = items[itemIndex].name
      draft.position = items[itemIndex].position
      draft.location = items[itemIndex].location
      draft.description = items[itemIndex].description
      draft.start = items[itemIndex].start
      draft.end = items[itemIndex].end
      draft.currentPlace = items[itemIndex].currentPlace
    })
    setInputVisible(true)
    setCurrentlyEditing(true)
  }

  // make inputs a controlled input
  const handleChange = (event, name) => {
    console.log(event, name);
    
    setFilledValues(draft => {
      draft[name] = event
    })
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
          name="name"
          value={filledValues.name}
          handleChange={handleChange}
        />
        <div className="input-row">
          <InputElement
            labelText="Position"
            width="form-width-50"
            name="position"
            value={filledValues.position}
            handleChange={handleChange}
          />
          <InputElement
            labelText="Location"
            width="form-width-50"
            name="location"
            value={filledValues.location}
            handleChange={handleChange}
          />
        </div>
        <InputElement
          labelText="Description"
          type="textarea"
          width="form-width-100"
          name="description"
          value={filledValues.description}
          handleChange={handleChange}
        />
        <div className="input-row">
          <InputElement
            labelText="Start"
            type="date"
            name="start"
            value={filledValues.start}
            handleChange={handleChange}
          />
          <InputElement
            labelText="End"
            type="date"
            name="end"
            value={filledValues.end}
            handleChange={handleChange}
          />
        </div>
        <InputCheckbox
          labelText="This is my current workplace"
          name="currentPlace"
          value={filledValues.currentPlace}
          handleChange={handleChange}
        />
      </InputFormEntry>
    </>
  )
}

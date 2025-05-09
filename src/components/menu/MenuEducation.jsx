import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import InputElement from "./inputs/InputElement.jsx"
import InputFormEntry from "./inputs/InputFormEntry.jsx"
import { arrayMove } from "@dnd-kit/sortable"
import InputCheckbox from "./inputs/InputCheckbox.jsx"
import { useImmer } from "use-immer"

export default function MenuEducation({ items, setItems }) {
  const [inputVisible, setInputVisible] = useState(false)
  const [filledValues, setFilledValues] = useImmer({})
  const [currentlyEditing, setCurrentlyEditing] = useState(false)

  function handleDragEnd(e) {
    const { active, over } = e

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // collect the values and push them to the array
  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentlyEditing) {
      const editedItem = {
        id: filledValues.id,
        name: e.target.name.value,
        description: e.target.description.value,
        location: e.target.location.value,
        start: e.target.start.value,
        end: e.target.end ? e.target.end.value : "",
        currentPlace: e.target.currentPlace.checked,
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
        name: e.target.name.value,
        description: e.target.description.value,
        location: e.target.location.value,
        start: e.target.start.value,
        end: e.target.end ? e.target.end.value : "",
        currentPlace: e.target.currentPlace.checked,
      }

      setItems((items) => [...items, newItem])
    }
  }

  const handleEditItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id)

    setFilledValues((draft) => {
      draft.id = items[itemIndex].id
      draft.name = items[itemIndex].name
      draft.description = items[itemIndex].description
      draft.location = items[itemIndex].location
      draft.start = items[itemIndex].start
      draft.end = items[itemIndex].end
      draft.currentPlace = items[itemIndex].currentPlace
    })

    setInputVisible(true)
    setCurrentlyEditing(true)
  }

  // make inputs a controlled input
  const handleChange = (e, name) => {
    setFilledValues((draft) => {
      draft[name] = e
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
  const toggleInputAndSubmit = (e) => {
    handleSubmit(e)
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
          labelText="School"
          width="form-width-100"
          name="name"
          required={true}
          value={filledValues.name}
          handleChange={handleChange}
        />
        <div className="input-row">
          <InputElement
            labelText="Degree"
            name="description"
            value={filledValues.description}
            handleChange={handleChange}
          />
          <InputElement
            labelText="Location"
            name="location"
            required={true}
            value={filledValues.location}
            handleChange={handleChange}
          />
        </div>
        <div className="input-row">
          <InputElement
            labelText="Start"
            type="date"
            name="start"
            required={true}
            value={filledValues.start}
            handleChange={handleChange}
          />
          {filledValues.currentPlace === false && (
            <InputElement
              labelText="End"
              type="date"
              name="end"
              required={true}
              value={filledValues.end}
              handleChange={handleChange}
            />
          )}
        </div>
        <InputCheckbox
          labelText="This is my current school"
          name="currentPlace"
          value={filledValues.currentPlace}
          handleChange={handleChange}
        />
      </InputFormEntry>
    </>
  )
}

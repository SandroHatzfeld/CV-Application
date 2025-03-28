import React, { useState } from "react"
import DndContextWrapper from "./DndContextWrapper.jsx"
import { arrayMove } from "@dnd-kit/sortable"
import InputElement from "./InputElement.jsx"
import InputFormEntry from "./InputFormEntry.jsx"

export default function MenuBusiness() {
	const [items, setItems] = useState([1, 2, 3])

	// handle function for sorting items. Usually inside the dndcontext, but moved out to be able the change the useState
	function handleDragEnd(event) {
		const { active, over } = event

		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active.id)
				const newIndex = items.indexOf(over.id)

				return arrayMove(items, oldIndex, newIndex)
			})
		}
	}

	return (
		<>
			<DndContextWrapper items={items} handleDragEnd={handleDragEnd} />
			<InputFormEntry>
				<InputElement labelText="Business" width="form-width-100" />
				<InputElement labelText="Position" />
				<InputElement labelText="Description" type='textarea'/>
				<InputElement labelText="Start" type="date" />
				<InputElement labelText="End" type="date" />
			</InputFormEntry>
		</>
	)
}

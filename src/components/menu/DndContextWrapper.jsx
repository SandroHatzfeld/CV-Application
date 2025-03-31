import React, { useState } from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import { SortableItem } from "./SortableItem.jsx"

export default function DndContextWrapper() {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      name: "TEsteeee",
      degree: "aodfvowowow",
      location: "etstlafe",
      start: "81.92.19",
      end: "f99wq.90aw",
    },
    {
      id: crypto.randomUUID(),
      name: "sfsfsdf",
      degree: "aodffeefefavowowow",
      location: "etstlafe",
      start: "81.92.19",
      end: "f99wq.90aw",
    },
  ])
	
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item, index) => (
          <SortableItem key={item.id} id={item.id} data={item} index={index + 1} />
        ))}
      </SortableContext>
    </DndContext>
  )

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
}

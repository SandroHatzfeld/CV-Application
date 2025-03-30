import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import SortableItem from "./SortableItem.jsx"
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

export default function DndContextWrapper({items, handleDragEnd}) {
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
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                {items.map((id) => (
                    <SortableItem key={id} id={id} />
                ))}
            </SortableContext>
        </DndContext>
    )
}

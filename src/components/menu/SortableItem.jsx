import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className='sortable-item' ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='move-item'></div>
      <h1>{props.data.name}</h1>
      <div className='edit-item' onClick={props.editItem}></div>
      <div className='remove-item' onClick={props.removeItem}></div>
    </div>
  );
}
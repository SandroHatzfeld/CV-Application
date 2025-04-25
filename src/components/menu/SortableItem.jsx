import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import moveImage from '../../assets/icons/edit_move.svg'
import penImage from '../../assets/icons/edit_pen.svg'
import closeImage from '../../assets/icons/close.svg'

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  
  return (
    <div className='sortable-item' ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <img src={moveImage} className='move-item' />
      <h1>{props.data.name}</h1>
      <img src={penImage} className='edit-item' onClick={props.editItem} />
      <img src={closeImage} className='remove-item' onClick={props.removeItem} />
    </div>
  );
}
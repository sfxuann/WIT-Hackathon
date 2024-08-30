import React from 'react';
import {useDroppable} from '@dnd-kit/core'; 

export function Droppable(props: any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    bgcolor: 'blue',
    borderColor: 'black',
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style} border-color="green">
      {props.children}
    </div>
  );
}
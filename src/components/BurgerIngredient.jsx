import React from 'react'
import { useDrag } from 'react-dnd';

const BurgerIngredient = (props) => {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'ingredient',
    item: {id:props.ingredient.id},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  return (
    <div style={props?.ingredient?.style} ref={drag}></div>
  )
}

export default BurgerIngredient
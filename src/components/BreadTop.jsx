import React from 'react'
import "../assets/css/BreadTop.css"
import { useDrag } from 'react-dnd'

const BreadTop = () => {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BreadTop',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  return (
    <div className="breadTop"  ref={drag}> </div>
  )
}

export default BreadTop
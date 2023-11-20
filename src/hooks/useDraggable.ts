import { useState } from 'react'

interface DraggableProps {
  onDrop: (isInLeftArea: boolean, isInRightArea: boolean) => void
}

type Position = {
  x: number
  y: number
}

const useDraggable = (initialX: number, initialY: number, onDrop: DraggableProps['onDrop']) => {
  const [position, setPosition] = useState<Position>({ x: initialX, y: initialY })
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    event.preventDefault()
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setPosition({
      x: position.x + event.movementX,
      y: position.y + event.movementY,
    })
  }

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false)
    const card = (event.currentTarget as HTMLElement).getBoundingClientRect()

    const leftAreaElement = document.querySelector('[data-left-area]') as HTMLElement
    const rightAreaElement = document.querySelector('[data-right-area]') as HTMLElement

    if (leftAreaElement && rightAreaElement) {
      const leftArea = leftAreaElement.getBoundingClientRect()
      const rightArea = rightAreaElement.getBoundingClientRect()

      const isInLeftArea = card.right < leftArea.right
      const isInRightArea = card.left > rightArea.left

      onDrop(isInLeftArea, isInRightArea)
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  return { position, handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave }
}

export default useDraggable

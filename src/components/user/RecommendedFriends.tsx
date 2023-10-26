import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

// 떠오르는 효과
const riseUpAnimation = `
  @keyframes riseUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

// 둥둥 떠있는 효과
const floatingAnimation = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`

type DropZoneProps = {
  side: 'left' | 'right'
}

const DropZone = styled.div<DropZoneProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15%;
  ${(props) => (props.side === 'left' ? 'left' : 'right')}: 0;
  z-index: -1;
`

type ContainerProps = {
  top: number
  left: number
}

const RecommendedFriendsContainer = styled.div<ContainerProps>`
  ${riseUpAnimation}
  ${floatingAnimation}

  position: fixed;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -50%);
  width: 10vw;
  height: 7vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  animation:
    riseUp 2s ease forwards,
    float 3s ease-in-out 2s infinite;

  cursor: pointer;
`

const RecommendedFriends = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return

    const dx = e.clientX - startPos.x
    const dy = e.clientY - startPos.y

    setPosition({
      top: position.top + (dy * 100) / window.innerHeight,
      left: position.left + (dx * 100) / window.innerWidth,
    })

    setStartPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = (e: MouseEvent) => {
    setIsDragging(false)

    // 드롭 영역의 x 좌표가 문서의 15% 또는 85% 보다 작거나 큰 경우만 처리
    if (e.clientX < window.innerWidth * 0.15 || e.clientX > window.innerWidth * 0.85) {
      setIsVisible(false)
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, position])

  return (
    <>
      <DropZone side='left' />
      <DropZone side='right' />

      {isVisible && (
        <RecommendedFriendsContainer
          top={position.top}
          left={position.left}
          onMouseDown={handleMouseDown}
          // onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          추천친구
        </RecommendedFriendsContainer>
      )}
    </>
  )
}

export default RecommendedFriends

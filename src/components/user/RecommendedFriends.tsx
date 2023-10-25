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

type ContainerProps = {
  top: number
  left: number
}

const RecommendedFriendsContainer = styled.div<ContainerProps>`
  ${riseUpAnimation}
  ${floatingAnimation}

  position: fixed;
  top: ${(props) => props.top}%; // 랜덤한 top 값을 받아옴
  left: ${(props) => props.left}%; // 랜덤한 left 값을 받아옴
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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const dx = e.clientX - startPos.x
    const dy = e.clientY - startPos.y

    setPosition({
      top: position.top + (dy * 100) / window.innerHeight, // Convert pixel movement to percentage
      left: position.left + (dx * 100) / window.innerWidth, // Convert pixel movement to percentage
    })

    setStartPos({ x: e.clientX, y: e.clientY }) // Reset start position for next movement
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  useEffect(() => {
    const randomTop = Math.random() * 80 + 10
    const randomLeft = Math.random() * 80 + 10
    setPosition({ top: randomTop, left: randomLeft })
  }, [])

  return (
    <RecommendedFriendsContainer
      top={position.top}
      left={position.left}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave} // 여기에 추가했습니다.
    >
      추천친구
    </RecommendedFriendsContainer>
  )
}

export default RecommendedFriends

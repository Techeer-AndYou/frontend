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
`

const RecommendedFriends = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 })

  useEffect(() => {
    const randomTop = Math.random() * 40 + 30 // 30% ~ 70% 사이의 값
    const randomLeft = Math.random() * 40 + 30 // 30% ~ 70% 사이의 값

    setPosition({ top: randomTop, left: randomLeft })
  }, [])
  return (
    <RecommendedFriendsContainer top={position.top} left={position.left}>
      추천친구
    </RecommendedFriendsContainer>
  )
}

export default RecommendedFriends

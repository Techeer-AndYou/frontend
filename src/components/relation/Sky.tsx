import React, { useEffect, useState } from 'react'
import { StarPropsType } from './types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const moveStarAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const SkyStyled = styled.svg`
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${moveStarAnimation} 240s linear infinite;
  }
`

export const StarStyled = styled.circle`
  fill: #fff;
  stroke: none;
  stroke-width: 0;
`

const Star: React.FC<StarPropsType> = ({ x, y, radius }) => {
  return <StarStyled cx={x} cy={y} r={radius} fill='#fff' stroke='none' strokeWidth='0' />
}

const Sky: React.FC = () => {
  const makeStars = () => {
    const maxSize = Math.max(window.innerWidth, window.innerHeight)
    const getRandomX = () => Math.random() * maxSize
    const getRandomY = () => Math.random() * maxSize
    const randomRadius = () => Math.random() * 0.7 + 0.6

    const _size = Math.floor(maxSize / 2)

    const stars = new Array(_size)
      .fill(0)
      .map((_, i) => <Star key={i} x={getRandomX()} y={getRandomY()} radius={randomRadius()} />)

    setStars(stars)
  }

  const [stars, setStars] = useState<JSX.Element[]>([])

  useEffect(() => {
    makeStars()
    window.addEventListener('resize', makeStars)

    return () => {
      window.removeEventListener('resize', makeStars)
    }
  }, [])

  return <SkyStyled>{stars}</SkyStyled>
}

export default Sky

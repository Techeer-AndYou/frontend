import React, { useEffect, useState } from 'react'
import Star from './Star'

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

  return <svg className='sky'>{stars}</svg>
}

export default Sky

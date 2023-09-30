import React from 'react'

type StarPropsType = {
  x: number
  y: number
  radius: number
}

const Star: React.FC<StarPropsType> = ({ x, y, radius }) => {
  return (
    <circle className='star' cx={x} cy={y} r={radius} fill='#fff' stroke='none' strokeWidth='0' />
  )
}

export default Star

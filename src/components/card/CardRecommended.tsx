import useDraggable from '@/hooks/useDraggable'
import { animations } from '@/utils/animations'
import styled from '@emotion/styled'

const CardContainer = styled.div`
  ${animations.riseUp}
  ${animations.floating}
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12vw;
  height: 20vw;
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 2fr 12fr;
  animation:
    riseUp 2s ease forwards,
    float 3s ease-in-out 2s infinite;
  cursor: pointer;
`

const TextArea = styled.div`
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  font-size: 2rem;
  font-family: 'Nanum Gothic', sans-serif;
  text-align: center;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`

interface CardRecommendedProps {
  friendName: string
  leftPos: number
  topPos: number
  backgroundImgUrl: string
  onRemove: () => void
}

const CardRecommended: React.FC<CardRecommendedProps> = ({
  friendName,
  topPos,
  leftPos,
  backgroundImgUrl,
  onRemove,
}) => {
  const { position, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseLeave } =
    useDraggable(leftPos, topPos, (isInLeftArea, isInRightArea) => {
      if (isInLeftArea || isInRightArea) {
        onRemove()
      }
    })

  return (
    <CardContainer
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        background: `url(${backgroundImgUrl}) center / 130% no-repeat, rgba(0, 0, 0, 0.6)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <TextArea>{friendName}</TextArea>
    </CardContainer>
  )
}

export default CardRecommended

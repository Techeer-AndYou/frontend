import { animations } from '@/utils/animations'
import styled from '@emotion/styled'

const CardContainer = styled.div`
  ${animations.riseUp}
  ${animations.floating}
  position: fixed;
  top: 30%;
  left: 50%;
  width: 18vw;
  height: 28vw;
  background-color: white;
  color: white;
  border-radius: 10px;
  background-image: url('/images/Itachi_mock.png');
  background-position: center;
  background-scale: 1.1;
  animation:
    riseUp 2s ease forwards,
    float 3s ease-in-out 2s infinite;

  cursor: pointer;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(14, 1fr);
  width: 100%;
  height: 100%;
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const TextArea = styled.div`
  grid-column: 1 / 13;
  grid-row: 1 / 3;
  color: white;
  font-size: 2rem;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000; /* 검정색 외곽선 */
`

interface CardRecommendedProps {
  friendName: string
}

const CardRecommended: React.FC<CardRecommendedProps> = ({ friendName }) => {
  return (
    <CardContainer>
      <GridContainer>
        <TextArea>{friendName}</TextArea>
      </GridContainer>
    </CardContainer>
  )
}

export default CardRecommended

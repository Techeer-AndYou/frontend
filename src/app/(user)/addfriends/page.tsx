'use client'

import CardRecommended from '@/components/card/CardRecommended'
import NeumorphismButton from '@/components/common/NeumorphismButton'
import Header from '@/components/global/Header'
import styled from '@emotion/styled'
import { useState } from 'react'

type CardState = {
  id: string
  friendName: string
  leftPos: number
  topPos: number
  backgroundImgUrl: string
  isVisible: boolean
}

const AddFriendsPageTest = () => {
  const [reloadKey, setReloadKey] = useState(0) // 리로드를 위한 키값

  const [cards, setCards] = useState<CardState[]>([
    {
      id: '1',
      friendName: '지구 일타강사',
      leftPos: 500,
      topPos: 200,
      backgroundImgUrl: '/images/earth_star_card.png',
      isVisible: true,
    },
    {
      id: '2',
      friendName: '이타치강사',
      leftPos: 700,
      topPos: 100,
      backgroundImgUrl: '/images/Itachi_mock.png',
      isVisible: true,
    },
  ])

  const handleLoadRecommendedFriends = () => {
    setCards((prevCards) => prevCards.map((card) => ({ ...card, isVisible: true })))

    setReloadKey((prevKey) => prevKey + 1)
  }

  const handleRemoveCard = (cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === cardId ? { ...card, isVisible: false } : card)),
    )
  }

  return (
    <>
      <Header rememberColor='white' plusColor='skyblue' />
      <Container>
        <LeftArea data-left-area />
        <CenterArea>
          {cards.map(
            (card) =>
              card.isVisible && (
                <CardRecommended
                  key={`${card.id}-${reloadKey}`}
                  friendName={card.friendName}
                  leftPos={card.leftPos}
                  topPos={card.topPos}
                  backgroundImgUrl={card.backgroundImgUrl}
                  onRemove={() => handleRemoveCard(card.id)}
                />
              ),
          )}
        </CenterArea>
        <ButtonArea>
          <NeumorphismButton text='추천친구 불러오기' onClick={handleLoadRecommendedFriends} />
        </ButtonArea>
        <RightArea data-right-area />
      </Container>
    </>
  )
}

export default AddFriendsPageTest

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(14, 1fr);
  width: 100vw;
  height: 100vh;
  background-image: url('/images/add_friends_background.png');
  background-size: cover;
  background-position: center;
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

const LeftArea = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 15;
  background: linear-gradient(to left, transparent, black);
`

const RightArea = styled.div`
  grid-column: 11 / 13;
  grid-row: 1 / 15;
  background: linear-gradient(to right, transparent, black);
`

const CenterArea = styled.div`
  grid-column: 4 / 10;
  grid-row: 2 / 12;
  justify-self: center;
  align-self: center;
  color: white;
`

const ButtonArea = styled.div`
  grid-column: 4 / 10;
  grid-row: 12 / 13;
  justify-self: center;
  align-self: center;
  color: white;
`

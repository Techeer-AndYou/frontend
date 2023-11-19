'use client'

import CardRecommended from '@/components/card/CardRecommended'
import NeumorphismButton from '@/components/common/NeumorphismButton'
import Header from '@/components/global/Header'
import styled from '@emotion/styled'
import { useState } from 'react'

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
  grid-column: 1 / 4;
  grid-row: 2 / 15;
  background: linear-gradient(to left, transparent, black);
`

const RightArea = styled.div`
  grid-column: 10 / 13;
  grid-row: 2 / 15;
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

const AddFriendsPageTest = () => {
  const [showComponent, setShowComponent] = useState(false)
  const [reloadKey, setReloadKey] = useState(0) // 리로드를 위한 키값

  const handleLoadRecommendedFriends = () => {
    if (showComponent && reloadKey === 0) {
      setReloadKey((prevKey) => prevKey + 1)
    } else {
      setShowComponent(true)
      setReloadKey(0)
    }
    console.log(reloadKey)
  }

  return (
    <>
      <Header rememberColor='white' plusColor='skyblue' />
      <Container>
        <LeftArea />
        <CenterArea>
          {showComponent && <CardRecommended key={reloadKey} friendName='지구력 2타치강사' />}{' '}
        </CenterArea>
        <ButtonArea>
          <NeumorphismButton text='추천친구 불러오기' onClick={handleLoadRecommendedFriends} />
        </ButtonArea>
        <RightArea />
      </Container>
    </>
  )
}

export default AddFriendsPageTest

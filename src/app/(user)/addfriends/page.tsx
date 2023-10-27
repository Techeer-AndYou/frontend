'use client'

import Header from '@/components/global/Header'
import RecommendedFriends from '@/components/user/RecommendedFriends'
import styled from '@emotion/styled'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
`

const ReccommendArea = styled.div`
  z-index: 1;
  flex: 2;
`

const LeftRightArea = styled.div`
  flex: 0.15; // 왼쪽과 오른쪽 영역을 각각 15%로 설정합니다.
  border: solid white; // 테두리를 추가합니다.
  height: 90%;
`

const MainArea = styled.div`
  flex: 0.7; // 중앙 영역을 70%로 설정합니다. (100% - (15% * 2) = 70%)
  height: 90%;
`

export type RecommendedFriend = {
  id: number
  position: {
    top: number
    left: number
  }
  isVisible: boolean
}

const AddFriendsPage = () => {
  // 추천 친구들의 초기 상태
  const [friends, setFriends] = useState<RecommendedFriend[]>([
    { id: 1, position: { top: 20, left: 25 }, isVisible: true },
    { id: 2, position: { top: 40, left: 20 }, isVisible: true },
    { id: 3, position: { top: 55, left: 45 }, isVisible: true },
    { id: 4, position: { top: 64, left: 65 }, isVisible: true },
  ])

  // 친구의 상태를 업데이트하는 함수
  const updateFriendState = (friendId: number, data: Partial<RecommendedFriend>) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) => (friend.id === friendId ? { ...friend, ...data } : friend)),
    )
  }

  return (
    <>
      <Header textColor='white' plusColor='skyblue' />
      <Container>
        <Content>
          <LeftRightArea></LeftRightArea>
          <MainArea>
            <ReccommendArea>
              {friends.map((friend) => (
                <RecommendedFriends
                  key={friend.id}
                  initialData={friend} // 초기 상태를 props로 전달
                  onUpdate={updateFriendState} // 상태 업데이트 함수를 props로 전달
                />
              ))}
            </ReccommendArea>
          </MainArea>
          <LeftRightArea></LeftRightArea>
        </Content>
      </Container>
    </>
  )
}

export default AddFriendsPage

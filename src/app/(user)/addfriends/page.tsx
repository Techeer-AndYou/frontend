'use client'

import Header from '@/components/global/Header'
import RecommendedFriends from '@/components/user/RecommendedFriends'
import styled from '@emotion/styled'

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

export default function AddFriendsPage() {
  return (
    <>
      <Header textColor='white' plusColor='skyblue' />
      <Container>
        <Content>
          <LeftRightArea></LeftRightArea>
          <MainArea>
            <ReccommendArea>
              <RecommendedFriends />
              <RecommendedFriends />
              <RecommendedFriends />
              <RecommendedFriends />
            </ReccommendArea>
          </MainArea>
          <LeftRightArea></LeftRightArea>
        </Content>
      </Container>
    </>
  )
}

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
  z-index: 1;
  // 여기에 필요한 스타일을 추가하세요.
`

export default function AddFriendsPage() {
  return (
    <>
      <Header textColor='white' plusColor='skyblue' />
      <Container>
        <Content></Content>
        <RecommendedFriends />
        <RecommendedFriends />
        <RecommendedFriends />
        <RecommendedFriends />
      </Container>
    </>
  )
}

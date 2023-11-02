'use client'
import { Logo } from '@/components/global/Logo'
import styled from '@emotion/styled'

// 이곳에 와이어프레임 작성
// 와이어프레임 구조
// 상단 중앙에 Remember Plus 로고
// 화면 중앙에 시작하기 버튼
const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: relative;
`

const StartPage: React.FC = () => {
  // 여기는 시작 페이지 입니다.
  return (
    <Container>
      <Logo animationType='fadeIn' animationDuration='2.4s' animationTimingFunction='ease' />
    </Container>
  )
}

export default StartPage

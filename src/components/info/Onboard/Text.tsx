import Link from 'next/link'
import styled from '@emotion/styled'
import { color } from 'highcharts'
import { link } from 'fs'

// 분리하기
const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const Title = styled.h1`
  span {
    background: linear-gradient(97deg, #ff00e5 21.55%, #e94646 74.82%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const ClickText = styled.div`
  position: relative;
  top: 70%;
  left: 49.7%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bold;
  font-size: 1rem;
`

const RememberText = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bolder;
  font-size: 1rem;

  & span {
    color: skyblue;
  }
`

const EnterLink = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bolder;
  font-size: 2rem;
  cursor: pointer;
`

const ScrollTopButton = styled.button`
  position: relative;
  top: 250px;
  left: 34rem;
  padding: 1px;
  border-radius: 10%;
  background-color: rgb(10, 10, 10);
  color: skyblue;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`

const Text = () => {
  return (
    <div>
      <Title>
        나만의 <span>Universe</span>를 만들어보세요
      </Title>
      <ClickText>클릭!</ClickText>
      <RememberText>
        Remember <span>plus+</span>
      </RememberText>
      <Link href='/login'>
        <h1 style={{ color: 'linear-gradient(97deg, #ff00e5 21.55%, #e94646 74.82%)' }}>
          시작하기
        </h1>
        <EnterLink>Enter</EnterLink>
      </Link>
      <ScrollTopButton onClick={handleScrollToTop}>맨 위로</ScrollTopButton>
    </div>
  )
}

export default Text

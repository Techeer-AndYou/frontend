'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type ContainerProps = {
  isLoaded: boolean
}

const TopContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 1s; // 1초 동안 fade in 효과
`

const FindFriendsContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  
  & > p {
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
  }

  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 1.2s; // 1.2초 동안 fade in 효과
}`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, white, black);
`

const EnterText = styled.div`
  right: 32%; // 오른쪽 위치 조절
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  & > p {
    opacity: 0; // 기본적으로 텍스트를 투명하게 설정
    margin-bottom: 16px;
    transform: translateX(-50px); // 시작 위치를 왼쪽으로 설정
    transition:
      transform 2.6s,
      opacity 3s; // 슬라이드 및 페이드인 효과의 지속 시간 설정

    &.visible {
      opacity: 1; // 텍스트를 보이게 설정
      transform: translateX(0); // 원래 위치로 돌아오게 설정
    }
  }

  & > p.line1 {
    margin-left: 10px;
    font-size: 28px;
    font-weight: 700;
  }

  & > p.line2 {
    margin-left: 22px;
    font-size: 28px;
    font-weight: 700;
  }

  & > p.line3 {
    margin-left: 34px;
    font-size: 28px;
    font-weight: 700;
  }

  & > p.line4 {
    margin-left: 46px;
    font-size: 32px;
    font-weight: 700;
    color: blue;
  }
`

export default function MainPage() {
  const [rotationDegree, setRotationDegree] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [isPageLoaded, setIsPageLoaded] = useState(false) // 페이지 로드 상태를 추적하는 state

  useEffect(() => {
    setIsPageLoaded(true) // 페이지 로드가 완료되면 isPageLoaded를 true로 설정

    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const halfPageScroll = (documentHeight - viewportHeight) * 0.4 // 전체 페이지의 50% 지점

      const currentScrollY = window.scrollY || window.pageYOffset
      setRotationDegree(-Math.min((currentScrollY - halfPageScroll) / 10, 22))
      setScrollY(currentScrollY - halfPageScroll) // 50% 지점부터의 스크롤 양을 계산
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <TopContainer isLoaded={isPageLoaded}>
        <Image src='/images/find_friends.png' alt='친구찾기 카드' width={383} height={258} />
        <FindFriendsContainer isLoaded={isPageLoaded}>
          <Image src='/images/find_friends2.png' alt='친구찾기 카드' width={187} height={187} />
          <p>친구 찾기</p>
        </FindFriendsContainer>
      </TopContainer>
      <BottomContainer>
        <Link href='/relation'>
          <Image
            src='/images/earth_star_card.png'
            alt='관계 보기 카드'
            width={309}
            height={541}
            style={{ transform: `rotate(${rotationDegree}deg)`, transition: 'transform 0.5s' }}
          />
        </Link>
        <EnterText>
          <p className={`line1 ${scrollY > 100 && scrollY >= 0 ? 'visible' : ''}`}>Explore</p>
          <p className={`line2 ${scrollY > 200 && scrollY >= 0 ? 'visible' : ''}`}>Your</p>
          <p className={`line3 ${scrollY > 300 && scrollY >= 0 ? 'visible' : ''}`}>Relations</p>
          <p className={`line4 ${scrollY > 400 && scrollY >= 0 ? 'visible' : ''}`}>
            ⬅️ Click to Enter
          </p>
        </EnterText>
      </BottomContainer>
    </>
  )
}

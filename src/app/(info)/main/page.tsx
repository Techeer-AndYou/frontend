'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, white, black);
  position: relative;
`

const EnterText = styled.div`
  margin-left: 20px; // 간격 조정. 필요에 따라 값을 조정하세요.
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export default function MainPage() {
  const [rotationDegree, setRotationDegree] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset
      setRotationDegree(-Math.min(currentScrollY / 10, 22))
      setScrollY(currentScrollY) // 추가
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <TopContainer>
        <Image src='/images/find_friends.png' alt='친구찾기 카드' width={383} height={258} />
      </TopContainer>
      <BottomContainer>
        <Image
          src='/images/earth_star_card.png'
          alt='관계 보기 카드'
          width={309}
          height={541}
          style={{ transform: `rotate(${rotationDegree}deg)`, transition: 'transform 0.5s' }}
        />
        <EnterText>
          <p>See</p>
          <p>Your</p>
          <p>Relations</p>
          <p>Click to Enter</p>
        </EnterText>
      </BottomContainer>
    </>
  )
}

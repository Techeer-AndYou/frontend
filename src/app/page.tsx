'use client'
import NightSky from '@/components/three/NightSky'
import { useRouter } from 'next/navigation'
import { Logo } from '@/components/global/Logo'

// 이곳에 와이어프레임 작성
// 와이어프레임 구조
// 화면 중앙에 시작하기 버튼

const StartPage: React.FC = () => {
  const router = useRouter()
  // 여기는 시작 페이지 입니다.
  return (
    <>
      <Logo animationType='fadeIn' animationDuration='2.4s' animationTimingFunction='ease' />
      <NightSky router={router} />
    </>
  )
}

export default StartPage

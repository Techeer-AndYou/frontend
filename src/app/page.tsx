'use client'
import NightSky from '@/components/three/NightSky'
import { useRouter } from 'next/navigation'

// 이곳에 와이어프레임 작성
const StartPage: React.FC = () => {
  const router = useRouter()
  // 여기는 시작 페이지 입니다.
  return (
    <main>
      <NightSky router={router} />
    </main>
  )
}

export default StartPage

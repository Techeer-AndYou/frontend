import Link from 'next/link'

export default function StartPage() {
  // 여기는 시작 페이지 입니다.
  return (
    <main>
      여기는 메인 페이지 입니다 <br />
      <Link href='/login'>로그인 페이지로 이동</Link>
      <Link href='/signup'>회원가입 페이지로 이동</Link>
    </main>
  )
}

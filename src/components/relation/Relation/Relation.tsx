// Relation.tsx
import Image from 'next/image'
import RelationGraph from './RelationGraph'
import styled from '@emotion/styled'
import Link from 'next/link'
import { SearchBar } from '@/components/global/SearchBar'

const Container = styled.div`
  position: relative;
`

const StyledImage = styled.div`
  display: flex; // flex로 변경하여 로고와 검색창이 수평으로 정렬되도록 합니다.
  position: absolute;
  top: 0;
  left: 0;

  & > div {
    display: unset !important; // next/image의 div 스타일 오버라이드
  }

  & img {
    margin-top: 1.6rem;
    margin-left: 0.8rem;
  }
`

export const Relation = () => {
  return (
    <Container>
      <StyledImage>
        <Link href='/'>
          <Image src='/images/RememberPlusV2.png' width={150} height={56} alt='Service logo' />
        </Link>
        <SearchBar />
      </StyledImage>
      <RelationGraph />
    </Container>
  )
}

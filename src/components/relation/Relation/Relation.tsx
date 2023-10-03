// Relation.tsx
import Image from 'next/image'
import RelationGraph from './RelationGraph'
import styled from '@emotion/styled'
import Link from 'next/link'

// 스크롤 바 숨기기 스타일, 현재 적용 안됨, 수정 필요
const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (hover: none) and (pointer: coarse),
    (-webkit-min-device-pixel-ratio: 1.5),
    (min-resolution: 120dpi) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const StyledImage = styled.div`
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
      </StyledImage>
      <RelationGraph />
    </Container>
  )
}

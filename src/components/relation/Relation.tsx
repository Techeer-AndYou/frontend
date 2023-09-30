// Relation.tsx

import RelationGraph from './RelationGraph'
import styled from '@emotion/styled'

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

export const Relation = () => {
  return (
    <Container>
      <RelationGraph />
    </Container>
  )
}

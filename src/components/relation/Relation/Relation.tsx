// Relation.tsx
import RelationGraph from './RelationGraph'
import styled from '@emotion/styled'
import Header from '@/components/global/Header'

const Container = styled.div`
  position: relative;
`

export const Relation = () => {
  return (
    <Container>
      <Header rememberColor='white' />
      {/* <SearchBar /> */}
      <RelationGraph />
    </Container>
  )
}

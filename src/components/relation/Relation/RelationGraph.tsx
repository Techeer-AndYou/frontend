import React, { useState, useEffect } from 'react'
import Chart from '../Chart/Chart'
import { fetchRelations } from '../services/fetchRelations'
import { RelationType } from '../types'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  border: 1px solid black;
`

const RelationGraph: React.FC = () => {
  // Fetch data
  const [data, setData] = useState<RelationType | null>(null)

  useEffect(() => {
    fetchRelations().then((relations) => setData(relations))
  }, [])

  // If data is still loading
  if (!data) {
    return <div>Loading...</div>
  }

  // Render chart
  return (
    <Container>
      <Chart />
    </Container>
  )
}

export default RelationGraph

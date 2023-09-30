import ChartContent from './ChartContent'
import ZoomableSVG from '../ZoomableSVG'
import { fetchRelations } from '../services/fetchRelations'
import RelationModal from '../RelationModal'
import { useState, useEffect } from 'react'
import { NodeType, RelationType } from '../types'

const Chart: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [localData, setLocalData] = useState<RelationType | null>(null)
  const [clickedNode, setClickedNode] = useState<NodeType | null>(null) // State variable to hold the clicked node

  const updateData = () => {
    fetchRelations().then((fetchedData) => setLocalData(fetchedData))
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    fetchRelations().then((fetchedData) => setLocalData(fetchedData))

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!localData) {
    return null
  }

  // Modify the onNodeClick function to set the clicked node in the state
  const handleNodeClick = (node: NodeType) => {
    setClickedNode(node) // Update the state with the clicked node
  }

  return (
    <>
      {clickedNode && <RelationModal node={clickedNode} onClose={() => setClickedNode(null)} />}
      <ZoomableSVG width={dimensions.width} height={dimensions.height} updateData={updateData}>
        {/* <Sky /> */}
        <ChartContent
          data={localData}
          width={dimensions.width}
          height={dimensions.height}
          onNodeClick={handleNodeClick} // Pass the modified onNodeClick function
        />
      </ZoomableSVG>
    </>
  )
}

export default Chart

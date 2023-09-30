import { zoom, D3ZoomEvent, select } from 'd3'
import { useRef, useState, useEffect } from 'react'
import { ZoomableSVGPropsType } from './types'
import Sky from './Sky'
import './Sky.css'

const ZoomableSVG: React.FC<ZoomableSVGPropsType> = ({ children, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [k, setK] = useState<number>(1)
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)

  useEffect(() => {
    const zoomHandler = zoom<SVGSVGElement, unknown>().on(
      'zoom',
      (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        const { x, y, k } = event.transform
        setK(k)
        setX(x)
        setY(y)
      },
    )

    if (svgRef.current) {
      select(svgRef.current).call(zoomHandler)
    }
  }, [])

  return (
    <svg ref={svgRef} width={width} height={height}>
      <defs>
        <linearGradient id='gradient' gradientTransform='rotate(50)'>
          <stop offset='0%' stopColor='#ffffff' />
          <stop offset='0%' stopColor={`rgba(0, 0, 0, ${k - 1})`} /> {/* Update the stopColor */}
        </linearGradient>
      </defs>

      <rect x='0' y='0' width={width} height={height} fill='url(#gradient)' />
      <Sky />
      <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>
      <foreignObject x={340} y={85} width={50} height={50}></foreignObject>
    </svg>
  )
}

export default ZoomableSVG

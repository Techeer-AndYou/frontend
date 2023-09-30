// type.ts

export type UserType = {
  user_name: string
  user_email: string
  password: string
  user_phone: string
  user_photo: string
}

// 각 데이터 포인트를 나타내는 타입입니다. x와 y 좌표를 가집니다.
export type DataPointType = {
  x: number
  y: number
}

// ZoomableSVG 컴포넌트의 속성 타입입니다. SVG의 가로, 세로 크기,
// 업데이트 함수, 그리고 자식 요소들을 props로 받습니다.
export type ZoomableSVGPropsType = {
  children: React.ReactNode // SVG 내부에 렌더링 될 요소들
  width: number // SVG의 가로 크기
  height: number // SVG의 세로 크기
  updateData: () => void // 데이터를 업데이트하는 함수
}

// NodeType과 LinkType을 아래와 같이 선언합니다.
export type NodeType = {
  user_uid: string
  friend_uid: string
  card_name: string
  user_photo: string
  relation_name: string
  // D3 simulation을 위한 필드 추가
  x?: number
  y?: number
  vx?: number
  vy?: number
  fx?: number | null
  fy?: number | null
  index?: number
}

export type LinkType = {
  source: string
  target: string
}

export type RelationType = {
  nodes: NodeType[]
  links: LinkType[]
}

// ChartContent 컴포넌트의 속성 타입입니다. Chart의 가로, 세로 크기,
// 그리고 데이터를 props로 받습니다.
export type ChartContentPropsType = {
  width: number
  height: number
  data: RelationType
  onNodeClick: (node: NodeType) => void
}

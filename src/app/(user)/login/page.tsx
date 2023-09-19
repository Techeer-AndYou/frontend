'use client'
import styled from '@emotion/styled'

type ParagraphPropsType = {
  hoverColor: string
}

const Paragraph = styled.p<ParagraphPropsType>`
  font-size: 16px;
  text-align: center;

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`

export default function loginPage() {
  return <Paragraph hoverColor='red'>로그인 페이지 입니다</Paragraph>
}

// 이 페이지처럼 상호작용에 따른 동적인 스타일링이 적용되어있는 경우에는
// 'use client'를 페이지 상단에 적어준다

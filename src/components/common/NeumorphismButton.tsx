import styled from '@emotion/styled'
import React from 'react'

const NeuButton = styled.button`
  background: #e0e0f0; /* 기존 색상 #e0e0e0에 푸른빛 추가 */
  opacity: 0.85;
  border-radius: 10px;
  border: none;
  padding: 15px 120px;
  outline: none;
  color: #555;
  box-shadow:
    4px 4px 8px #a7a7c7,
    /* 기존 색상 #a7a7a7에 푸른빛 추가 */ -4px -4px 8px #e0e0f0; /* 기존 색상 #e0e0e0에 푸른빛 추가 */
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow:
      inset 4px 4px 8px #a7a7c7,
      /* 기존 색상 #a7a7a7에 푸른빛 추가 */ inset -4px -4px 8px #e0e0f0; /* 기존 색상 #e0e0e0에 푸른빛 추가 */
  }
`

interface NeumorphismButtonProps {
  text: string
  onClick?: () => void
}

const NeumorphismButton: React.FC<NeumorphismButtonProps> = ({ text, onClick }) => (
  <NeuButton onClick={onClick}>{text}</NeuButton>
)

export default NeumorphismButton

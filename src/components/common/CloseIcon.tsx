'use client'
import styled from '@emotion/styled'

// SVG icon for the close button
const CloseIcon = () => (
  <CloseIconSVG
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </CloseIconSVG>
);

const CloseIconSVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`

export default CloseIcon;
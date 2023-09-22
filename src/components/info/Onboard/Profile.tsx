import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const word = keyframes`
  0% {
    transform: translateY(100%);
  }
  15% {
    transform: translateY(-10%);
    animation-timing-function: ease-out;
  }
  20% {
    transform: translateY(0);
  }
  40%, 100% {
    transform: translateY(-110%);
  }
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-weight: bolder;
  color: white;
`

const TextContainer = styled.div`
  text-align: center;
  & > h1:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const Services = styled.h1`
  font-family: serif;
  font-weight: bold;
`

const AnimatedWord = styled.h1`
  position: relative;
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 3rem;
  overflow: hidden;
  font-size: larger;
  color: skyblue;
  animation: ${word} 7s infinite;
  &:nth-of-type(2) {
    animation-delay: -1.4s;
  }
  &:nth-of-type(3) {
    animation-delay: -2.8s;
  }
  &:nth-of-type(4) {
    animation-delay: -4.2s;
  }
  &:nth-of-type(5) {
    animation-delay: -5.6s;
  }
`

const ServiceDescription = styled.h3`
  color: white;
  font-weight: normal;
`

const Profile = () => {
  return (
    <Container>
      <TextContainer>
        <Services>
          Services offered
          <div>
            <AnimatedWord>Mac</AnimatedWord>
            <AnimatedWord>Window</AnimatedWord>
            <AnimatedWord>IOS</AnimatedWord>
            <AnimatedWord>Android</AnimatedWord>
            <AnimatedWord>Firefox</AnimatedWord>
          </div>
        </Services>
        <ServiceDescription>우리의 서비스를 어디에서나 즐길 수 있습니다</ServiceDescription>
      </TextContainer>
    </Container>
  )
}

export default Profile

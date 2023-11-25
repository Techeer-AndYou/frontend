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
  background-color: rgb(2 35 84);
  font-weight: bolder;
  color: white;
`

const TextContainer = styled.div`
  text-align: center;
  margin-top: 60%;

  & > h1:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const Services = styled.h1`
  text-align: center;
  font-family: serif;
  font-weight: bold;
  font-size: 200%;
`

const AnimatedWord = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: linear-gradient(97deg, #ff00e5 21.55%, #e94646 74.82%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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

  .animate-word {
    background-color: white;
  }
`

const ServiceDescription = styled.h3`
  color: white;
  font-weight: normal;
  font-size: 120%;
`

const Profile = () => {
  return (
    <Container className='flex min-h-screen items-center justify-center bg-black font-bolder text-white'>
      <TextContainer className='text-center space-y-12'>
        <Services className='text-center font-serif font-bold'>
          Services offered
          <div className='relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden'>
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

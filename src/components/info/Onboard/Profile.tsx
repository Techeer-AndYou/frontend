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
  text-align: center;
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
`

const Profile = () => {
  return (
    <Container className='flex min-h-screen items-center justify-center bg-black font-bolder text-white'>
      <TextContainer className='text-center space-y-12'>
        <Services className='text-center font-serif font-bold'>
          Services offered
          <div>
            <AnimatedWord className='animate-word'>Mac</AnimatedWord>
            <AnimatedWord className='animate-word-delay-1'>Window</AnimatedWord>
            <AnimatedWord className='animate-word-delay-2'>IOS</AnimatedWord>
            <AnimatedWord className='animate-word-delay-3'>Android</AnimatedWord>
            <AnimatedWord className='animate-word-delay-4'>Firefox</AnimatedWord>
          </div>
        </Services>
        <ServiceDescription>우리의 서비스를 어디에서나 즐길 수 있습니다</ServiceDescription>
      </TextContainer>
    </Container>
  )
}

export default Profile

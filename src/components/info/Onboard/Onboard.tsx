import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useRef, useEffect } from 'react'
import Sphere from './Sphere'
import Information from './Information'

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-1rem);
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AnimateOnScroll1 = styled.div`
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
  &.animate-fade-out {
    animation: ${fadeOutAnimation} 0.8s ease-in-out;
  }
`

const SphereContainer = styled.div`
  height: 100vh;
`

const AnimateOnScroll2 = styled.div`
  margin-bottom: 4rem;
  background-image: linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255));
  height: 60vh;
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
`

const AnimateOnScroll3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-color: black;
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
`

const Slider = styled.div``

const AnimateOnScroll4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110vh;
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
`

const Chart = styled.div``

const AnimateOnScroll5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-image: linear-gradient(to bottom, rgb(67, 71, 75), rgb(0, 0, 0));
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
`

const TextComponent = styled.div``

const OnboardPage = () => {
  const profileRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const TextRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.17, // Adjust this threshold value as needed
    }

    const animateOnScroll = (
      entries: IntersectionObserverEntry[],
      // observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        } else {
          entry.target.classList.add('animate-fade-out')
          TextRef.current?.classList.remove('animate-fade-in')
        }
      })
    }

    const observer = new IntersectionObserver(animateOnScroll, options)

    if (profileRef.current) {
      observer.observe(profileRef.current)
    }
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    if (TextRef.current) {
      observer.observe(TextRef.current)
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current)
      }
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
      if (TextRef.current) {
        observer.unobserve(TextRef.current)
      }
    }
  }, [])

  return (
    <MainContainer>
      <AnimateOnScroll1 ref={TextRef} />
      <SphereContainer>
        <Sphere />
      </SphereContainer>
      <AnimateOnScroll2 ref={profileRef}>
        <Information />
      </AnimateOnScroll2>
      <AnimateOnScroll3>
        <Slider />
      </AnimateOnScroll3>
      <AnimateOnScroll4>
        <Chart />
      </AnimateOnScroll4>
      <AnimateOnScroll5>
        <TextComponent />
      </AnimateOnScroll5>
    </MainContainer>
  )
}

export default OnboardPage

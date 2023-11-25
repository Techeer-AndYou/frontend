'use client'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useRef, useEffect } from 'react'
import Sphere from './Sphere'
import Information from './Information'
import Profile from './Profile'
import Charts from './Charts'
import Text from './Text'
import { color } from 'highcharts'

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
const Section = styled.div`
  background-color: #000;
  overflow-x: hidden;
  .cover {
    display: flex;
    font-family: Helvetica, Dotum, '돋움', 'Apple SD Gothic Neo', sans-serif;
    font-weight: bold;
  }

  .cover:nth-child(1) {
    /* margin-top: 5vh; */
    transform: rotate(0deg);
    background-color: #37f5ff;
  }

  .cover:nth-child(2) {
    transform: rotate(0deg);
    background-color: #9137ff;
    justify-content: flex-end;
  }

  p {
    color: white;
    display: flex;
    padding: 3rem 0;
    font-size: 5rem;
  }

  [data-scroll] {
    opacity: 0;
    will-change: transform, scale, opacity;
    transform: translateY(6rem) scale(0.93);
    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  [data-scroll='in'] {
    opacity: 1;
    transform: translate(0) scale(1);
  }
  [data-scroll='out'] {
    opacity: 0;
  }
`

const Section2 = styled.div`
  background-color: rgb(24 255 141);
  overflow-x: hidden;

  .cover {
    display: flex;
    font-family: Helvetica, Dotum, '돋움', 'Apple SD Gothic Neo', sans-serif;
    font-weight: bold;
    background-color: rgb(10 20 50);
    border-top: 5px solid rgb(24 255 141);
    border-bottom: 5px solid rgb(24 255 141);
  }

  .cover:nth-child(3) {
    transform: rotate(0deg);

    justify-content: flex-end;
  }
  p {
    color: rgb(24 255 141);
    display: flex;
    padding: 3rem 0;
    font-size: 5rem;
  }
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
  background-color: rgb(2 35 84);
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
`

const AnimateOnScroll4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110vh;
  background-color: rgb(2 35 84);
  &.animate-fade-in {
    animation: ${fadeInAnimation} 5.8s ease-in-out;
  }

  .main-content-1 {
    width: 100%;
    height: 500vh;
    .sticky {
      position: sticky;
      top: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .card-frame {
      position: absolute;
      width: 95vw;
      height: 30vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .card {
      width: 24%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20vw;
      transform-style: preserve-3d;
      position: relative;
      transform: perspective(100vw) translateX(100vw) rotateY(180deg);
      transition: transform 0.1s;
    }
    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 1vw;
      overflow: hidden;
      backface-visibility: hidden;
    }

    .front {
      background-color: #fff;
      font-size: 0.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .back {
      transform: rotateY(180deg);
      background-color: #e0ded7;
      background-image: repeating-linear-gradient(
        0deg,
        #3b3a38,
        #3b3a38 33.3%,
        #ffffff00 0px,
        #ffffff00 67%
      );
      background-size: 100%;
    }
  }
`

const AnimateOnScroll5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-image: linear-gradient(to bottom, rgb(2 35 84), rgb(1 232 223));
  &.animate-fade-in {
    animation: ${fadeInAnimation} 0.8s ease-in-out;
  }
`

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

      const pTag1 = document.querySelector('.first')
      const pTag2 = document.querySelector('.second')
      const pTag3 = document.querySelector('.third')
      const textArr1 =
        'REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER REMEMBER '.split(
          ' ',
        )
      const textArr2 =
        'PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS PLUS'.split(
          ' ',
        )
      const textArr3 =
        'Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation Relation'.split(
          ' ',
        )

      function initTexts(element: HTMLElement, textArray: string[]): void {
        textArray.push(...textArray)
        for (let i = 0; i < textArray.length; i++) {
          element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`
        }
      }

      function marqueeText(count: number, element: HTMLElement, direction: number): number {
        if (count > element.scrollWidth / 2) {
          element.style.transform = `translateX(0)`
          count = 0
        }
        element.style.transform = `translateX(${count * direction}px)`
        return count
      }

      if (
        pTag1 instanceof HTMLElement &&
        pTag2 instanceof HTMLElement &&
        pTag3 instanceof HTMLElement
      ) {
        // pTag1과 pTag2가 null이 아닌 HTMLElement인 경우에만 initTexts 함수 실행
        initTexts(pTag1, textArr1)
        initTexts(pTag2, textArr2)
        initTexts(pTag3, textArr3)

        let count1 = 0
        let count2 = 0
        let count3 = 0

        const animate = () => {
          count1++
          count2++
          count3++

          if (
            pTag1 instanceof HTMLElement &&
            pTag2 instanceof HTMLElement &&
            pTag3 instanceof HTMLElement
          ) {
            count1 = marqueeText(count1, pTag1, -1)
            count1 = marqueeText(count2, pTag2, 1)
            count1 = marqueeText(count3, pTag3, -1)
          } else {
            console.error('pTag1 or pTag2 is null') // 요소가 존재하지 않는 경우 에러 처리
          }
          window.requestAnimationFrame(animate)
        }

        animate()

        window.addEventListener('scroll', () => {
          count1 += 15
          count2 += 15
          count3 += 15
        })
      }
    }
  }, [])

  return (
    <MainContainer>
      <AnimateOnScroll1 ref={TextRef} />
      <SphereContainer>
        <Sphere />
      </SphereContainer>
      <Section>
        <div className='cover'>
          <p className='first'></p>
        </div>
        <div className='cover'>
          <p className='second'></p>
        </div>
      </Section>

      <AnimateOnScroll2 ref={profileRef}>
        <Information />
      </AnimateOnScroll2>

      <AnimateOnScroll3>
        <Profile />
      </AnimateOnScroll3>

      <Section2>
        <div className='cover'>
          <p className='third'></p>
        </div>
      </Section2>

      <AnimateOnScroll4>
        <Charts />
      </AnimateOnScroll4>

      <AnimateOnScroll5>
        <Text />
      </AnimateOnScroll5>
    </MainContainer>
  )
}

export default OnboardPage

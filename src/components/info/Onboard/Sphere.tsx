import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import styled from '@emotion/styled'

const Sphere = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<THREE.Object3D>()
  const [isLarge, setIsLarge] = useState<boolean>(false)
  const [showText, setShowText] = useState<boolean>(false)

  useEffect(() => {
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let light: THREE.DirectionalLight

    const init = () => {
      // Set up the scene
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0xfffff) // White background

      // Set up the camera
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
      camera.position.z = 1

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      containerRef.current?.appendChild(renderer.domElement)

      // Add lighting
      light = new THREE.DirectionalLight(0xffffff, 60)
      light.position.set(3, 2, 2)
      scene.add(light)

      // Load the scene.gltf model
      const loader = new GLTFLoader()
      loader.load(
        '/gltf/sphere/scene.gltf',
        (gltf) => {
          const model = gltf.scene

          if (model) {
            modelRef.current = model
            scene.add(model)

            // Add reflective material
            model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const material = new THREE.MeshPhysicalMaterial({
                  color: 'skyblue',
                  metalness: 0.99,
                  roughness: 0.001,
                })
                child.material = material
              }
            })

            // Animation loop
            const animate = () => {
              requestAnimationFrame(animate)

              // Rotate the model
              if (model) {
                model.rotation.x += 0.02
                model.rotation.y += 0.01
              }

              // Change background color gradually
              const backgroundColor = new THREE.Color().lerpColors(
                new THREE.Color(0x002451),
                new THREE.Color(0x002451),
                model.scale.x / 3.5,
              )
              scene.background = backgroundColor

              renderer.render(scene, camera)
            }

            animate()
          }
        },
        undefined,
        (error) => {
          console.error('Error loading GLTF file:', error)
        },
      )
    }
    if (!containerRef.current?.children.length) {
      // 기존에 canvas가 없을 때만 init()을 실행한다.
      init()
    }
  }, [])

  const handleModelClick = () => {
    const model = modelRef.current

    if (model) {
      const targetScale = isLarge ? new THREE.Vector3(1, 1, 1) : new THREE.Vector3(9.5, 9.5, 9.5)
      const initialScale = model.scale.clone()
      const animationDuration = 1700
      const frameRate = 70
      const totalFrames = animationDuration / (3000 / frameRate)
      let currentFrame = 0

      const animateScale = () => {
        if (currentFrame >= totalFrames) {
          setIsLarge(!isLarge)
          setShowText(!isLarge) // 애니메이션이 완료된 후 텍스트를 표시하지 않음
          return
        }

        const t = currentFrame / totalFrames
        const scale = initialScale.clone().lerp(targetScale, t)

        model.scale.copy(scale)

        currentFrame++

        requestAnimationFrame(animateScale)
      }

      animateScale()
      setShowText(true) // 애니메이션 시작 시 텍스트 표시
    }
  }

  const handleScreenClick = () => {
    setShowText(false) // 화면 클릭 시 텍스트 숨김 휴 찾았다 이녀석
    if (!isLarge) {
      setShowText(false) // Hide the text when screen is clicked
    } else {
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) // Scroll to next page
      }, 2000)
    }
  }

  return (
    <div
      onClick={handleScreenClick}
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightgray',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleModelClick}
      />
      {showText && (
        <Text
          style={{
            transform: 'translate(0%, 0)',
            // 수정요망
          }}
          isVisible={true}
          onClick={handleScreenClick}
        />
      )}
    </div>
  )
}

interface TextProps {
  isVisible: boolean
  onClick: () => void
  style?: React.CSSProperties
}

const Text = ({ isVisible, onClick, style }: TextProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isShowing, setIsShowing] = useState(isVisible)

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsShowing(!isShowing)
      setTimeout(() => {
        onClick()
        setIsAnimating(false)
      }, 500)
    }
  }

  useEffect(() => {
    setIsShowing(isVisible)
  }, [isVisible])

  const RememberText = styled.div`
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-weight: bolder;
    font-size: 2rem;

    & span {
      color: skyblue;
    }
  `

  return (
    <Link href='/main'>
      <RememberText>
        Remember <span>plus+</span>
      </RememberText>
      <h1
        className={`Text1 ${isShowing ? 'fadeIn' : 'fadeOut'}`}
        onClick={handleClick}
        style={{
          color: 'white',
          display: isShowing ? 'block' : 'none',
          fontSize: '2rem',
          fontWeight: 'bold',
          ...style,
        }}
      >
        나와 명함을 주고받은 사람들을{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(97deg, #4d57e1 21.55%, #46d1e9 74.82%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
          className='text2'
        >
          한눈에
        </span>{' '}
        볼 수 있습니다!
      </h1>
    </Link>
  )
}

export default Sphere
// 수정 요망
// 1. Sphere.tsx의 Text 컴포넌트의 style을 수정해야 한다.
// 2. Sphere 컴포넌트의 style을 수정해야 한다.
// 3. 모듈화 시키기

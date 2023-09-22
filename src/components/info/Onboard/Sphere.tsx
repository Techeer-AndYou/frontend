import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

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
      scene.background = new THREE.Color(0xffffff) // White background

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
                new THREE.Color(0x000000),
                new THREE.Color(0xffffff),
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
      const totalFrames = animationDuration / (1000 / frameRate)
      let currentFrame = 0

      const animateScale = () => {
        if (currentFrame >= totalFrames) {
          setIsLarge(!isLarge)
          setShowText(true) // Show the text after scaling animation is complete
          return
        }

        const t = currentFrame / totalFrames
        const scale = initialScale.clone().lerp(targetScale, t)

        model.scale.copy(scale)

        currentFrame++

        requestAnimationFrame(animateScale)
      }

      animateScale()
    }
  }

  const handleScreenClick = () => {
    if (!isLarge) {
      setShowText(false) // Hide the text when screen is clicked
    } else {
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) // Scroll to next page
      }, 2000)
    }
  }

  return (
    <div onClick={handleScreenClick}>
      <div
        ref={containerRef}
        style={{ marginTop: '-237px', marginBottom: '-100px' }}
        onClick={handleModelClick}
      />
      {showText && <Text isVisible={true} onClick={handleScreenClick} />}
    </div>
  )
}

interface TextProps {
  isVisible: boolean
  onClick: () => void
}

const Text = ({ isVisible, onClick }: TextProps) => {
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

  return (
    <h1 className={`Text1 ${isShowing ? 'fadeIn' : 'fadeOut'}`} onClick={handleClick}>
      나와 명함을 주고받은 사람들을 <span className='text2'>한눈에</span> 볼 수 있습니다!
    </h1>
  )
}

export default Sphere

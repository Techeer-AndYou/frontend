import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { createThreeScene } from './threeSetup'
import { createTitleElement, createButtonElement } from './createUIElements'
import { handleWindowResize } from './eventHandlers'

interface NightSkyProps {
  router: ReturnType<typeof useRouter>
}

const NightSky: React.FC<NightSkyProps> = () => {
  const router = useRouter()
  const buttonElementRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    //size
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const { scene, camera, renderer } = createThreeScene(sizes)
    const [titleElement, plusSpan] = createTitleElement()
    const buttonElement = createButtonElement()

    buttonElementRef.current = buttonElement

    // Button event listener
    buttonElementRef.current.addEventListener('click', () => {
      router.push('/intro')
    })

    window.addEventListener('resize', () => {
      handleWindowResize(camera, renderer, sizes)
    })

    // Objects
    // Sphere
    const geometry = new THREE.TorusGeometry(0.2, 0.03, 54, 100)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x78e6e6,
      metalness: 2,
      roughness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 1,
      side: THREE.DoubleSide,
      envMapIntensity: 5,
      emissive: 0xa4aa0,
      emissiveIntensity: 10,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Particle
    const particlesGeometry = new THREE.BufferGeometry()
    const loader = new THREE.TextureLoader()
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.height = 100
    canvas.width = 100
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.arc(10, 50, 25, 0, 2 * Math.PI)
    ctx.fill()
    const img = canvas.toDataURL('image/png')
    const star = loader.load(img)
    const particlesmaterial = new THREE.PointsMaterial({
      size: 0.01,
      map: star,
      transparent: true,
    })
    const particlesCnt = 5500
    const posArray = new Float32Array(particlesCnt * 3)
    const colorsArray = new Float32Array(particlesCnt * 3)
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (Math.random() * 4)
      colorsArray[i] = Math.random()
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3))
    const particlesMesh = new THREE.Points(particlesGeometry, particlesmaterial)
    scene.add(particlesMesh)

    // Mouse variables
    const mouse = new THREE.Vector2()
    const targetRotation = new THREE.Vector2()

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / sizes.width) * 5 - 1
      mouse.y = -(event.clientY / sizes.height) * 5 + 1
      const rotationSpeed = 0.06
      targetRotation.x = mouse.x * rotationSpeed
      targetRotation.y = mouse.y * rotationSpeed
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update particle positions
      const positions = particlesGeometry.getAttribute('position') as THREE.BufferAttribute
      for (let i = 0; i < particlesCnt; i++) {
        const i3 = i * 5
        const x = positions.getX(i) || 1
        const y = positions.getY(i) || 1
        const z = positions.getZ(i) || 1

        // Randomly move particles in x, y, z directions
        positions.setXYZ(
          i3,
          x + (Math.random() - 0.1) * 0.00001,
          y + (Math.random() - 0.2) * 0.002,
          z + (Math.random() - 0.1) * 0.001,
        )
      }
      positions.needsUpdate = true

      particlesMesh.rotation.x += 0.006 * (targetRotation.y + particlesMesh.rotation.z)
      particlesMesh.rotation.y += 0.03 * (targetRotation.x - particlesMesh.rotation.z)
      particlesMesh.rotation.z += 0.03 * (targetRotation.x - particlesMesh.rotation.z)
      particlesMesh.position.y -= 0.0005 // 이동하는 속도를 조정할 수 있습니다.

      sphere.rotation.y += 0.05

      renderer.render(scene, camera)
    }

    animate()

    setTimeout(() => {
      titleElement.style.opacity = '1'
      titleElement.style.transition = 'opacity 2.4s ease'
    }, 300)

    setTimeout(() => {
      plusSpan.style.opacity = '1'
      plusSpan.style.transition = 'opacity 0.5s ease'
    }, 3000)

    return () => {
      // Clean up
      document.body.removeChild(renderer.domElement)
      document.body.removeChild(titleElement)
      document.body.removeChild(buttonElementRef.current!)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [router])

  return null
}

export default NightSky

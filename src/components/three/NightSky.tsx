import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface NightSkyProps {
  router: ReturnType<typeof useRouter>
}

const NightSky: React.FC<NightSkyProps> = () => {
  const router = useRouter()
  const buttonElementRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Scene 생성
    const scene = new THREE.Scene()
    //size
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    //camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 2
    scene.add(camera)
    //renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(new THREE.Color('#21282a'), 1)
    document.body.appendChild(renderer.domElement)

    // Create title element
    const titleElement = document.createElement('h1')
    titleElement.textContent = 'Remember '
    const plusSpan = document.createElement('span')
    plusSpan.textContent = 'Plus+'
    plusSpan.style.color = 'skyblue'
    titleElement.appendChild(plusSpan)
    titleElement.style.position = 'absolute'
    titleElement.style.top = '5%'
    titleElement.style.left = '49%'
    titleElement.style.transform = 'translateX(-50%)'
    titleElement.style.fontWeight = '800'
    titleElement.style.fontFamily = '"Times New Roman", Times, serif'
    titleElement.style.fontSize = '30px'
    titleElement.style.color = '#fff'
    titleElement.style.opacity = '0'
    document.body.appendChild(titleElement)

    // Create button element
    buttonElementRef.current = document.createElement('button')
    buttonElementRef.current.textContent = 'start'
    buttonElementRef.current.style.position = 'absolute'
    buttonElementRef.current.style.top = '50%'
    buttonElementRef.current.style.left = '50%'
    buttonElementRef.current.style.transform = 'translate(-50%, -50%)'
    buttonElementRef.current.style.padding = '70px 50px'
    buttonElementRef.current.style.fontSize = '15px'
    buttonElementRef.current.style.fontWeight = '900'
    buttonElementRef.current.style.color = '#fff'
    buttonElementRef.current.style.backgroundColor = 'rgba(33, 40, 42, 0.001)'
    buttonElementRef.current.style.border = 'none'
    buttonElementRef.current.style.borderRadius = '7px'
    buttonElementRef.current.style.cursor = 'pointer'
    document.body.appendChild(buttonElementRef.current)

    // Button event listener
    buttonElementRef.current.addEventListener('click', () => {
      router.push('/intro')
    })

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
      // Clean up event listeners or anything else if needed
      document.body.removeChild(renderer.domElement)
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(titleElement)
      if (buttonElementRef.current) {
        document.body.removeChild(buttonElementRef.current)
      }
    }
  }, [router])

  return null
}

export default NightSky

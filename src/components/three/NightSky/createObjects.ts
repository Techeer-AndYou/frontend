import * as THREE from 'three'

export const createTorus = (): THREE.Mesh => {
  const geomatery = new THREE.TorusGeometry(0.2, 0.03, 54, 100)
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
  return new THREE.Mesh(geomatery, material)
}

type ParticlesInfoType = {
  mesh: THREE.Points
  geometry: THREE.BufferGeometry
  material: THREE.PointsMaterial
  particlesCnt: number
}

export const createParticles = (): ParticlesInfoType => {
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
  return {
    mesh: particlesMesh,
    geometry: particlesGeometry,
    material: particlesmaterial,
    particlesCnt: particlesCnt,
  }
}

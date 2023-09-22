// Three.js 장면 설정 로직을 담당하는 파일
import * as THREE from 'three'

export const createThreeScene = (sizes: { width: number; height: number }) => {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 2
  scene.add(camera)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(new THREE.Color('#21282a'), 1)
  document.body.appendChild(renderer.domElement)

  return { scene, camera, renderer }
}

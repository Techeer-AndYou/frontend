// 이벤트 핸들러 로직 담당 파일
export const handleWindowResize = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  sizes: { width: number; height: number },
) => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

export const handleMouseMove = (
  event: MouseEvent,
  mouse: THREE.Vector2,
  sizes: { width: number; height: number },
) => {
  mouse.x = (event.clientX / sizes.width) * 5 - 1
  mouse.y = -(event.clientY / sizes.height) * 5 + 1
}

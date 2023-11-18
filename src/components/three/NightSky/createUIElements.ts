export const createButtonElement = () => {
  const buttonElement = document.createElement('button')
  // buttonElement.textContent = 'START'
  buttonElement.style.position = 'absolute'
  buttonElement.style.top = '50%'
  buttonElement.style.left = '50%'
  buttonElement.style.transform = 'translate(-50%, -50%)'
  buttonElement.style.padding = '7rem 5rem'
  buttonElement.style.fontSize = '1.5rem'
  buttonElement.style.backgroundColor = 'transparent'
  buttonElement.style.border = 'none'
  buttonElement.style.borderRadius = '0.7rem'
  buttonElement.style.cursor = 'pointer'
  document.body.appendChild(buttonElement)

  return buttonElement
}
// 개선 제안: css 스타일을 flex로 바꿀 수 있을까?

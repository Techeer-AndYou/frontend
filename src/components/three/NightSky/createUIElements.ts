// UI 요소 생성 로직을 담당하는 파일
export const createTitleElement = (): [HTMLHeadingElement, HTMLSpanElement] => {
  const titleElement = document.createElement('h1')
  titleElement.innerText = 'Remember '
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
  titleElement.style.fontSize = '3rem'
  titleElement.style.color = '#fff'
  titleElement.style.opacity = '0'
  document.body.appendChild(titleElement)

  return [titleElement, plusSpan]
}

export const createButtonElement = () => {
  const buttonElement = document.createElement('button')
  buttonElement.textContent = 'START'
  buttonElement.style.position = 'absolute'
  buttonElement.style.top = '50%'
  buttonElement.style.left = '50%'
  buttonElement.style.transform = 'translate(-50%, -50%)'
  buttonElement.style.padding = '7rem 5rem'
  buttonElement.style.fontSize = '1.5rem'
  buttonElement.style.fontWeight = '900'
  buttonElement.style.color = '#fff'
  buttonElement.style.backgroundColor = 'rgba(33, 40, 42, 0.001)'
  buttonElement.style.border = 'none'
  buttonElement.style.borderRadius = '0.7rem'
  buttonElement.style.cursor = 'pointer'
  document.body.appendChild(buttonElement)

  return buttonElement
}
// 개선 제안: css 스타일을 flex로 바꿀 수 있을까?

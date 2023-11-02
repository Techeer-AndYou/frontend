import styled from '@emotion/styled'

interface LogoProps {
  rememberColor?: string
  plusColor?: string
  animationType?: keyof typeof animations
  animationDuration?: string
  animationTimingFunction?: string
}

const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  slideIn: `
    @keyframes slideIn {
      from {
        transform: translate(-50%, -50%) translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) translateY(0);
        opacity: 1;
      }
    }
  `,
  // 다른 애니메이션 효과 추가 가능
}

const LogoContainer = styled.div<LogoProps>`
  ${(props) => animations[props.animationType!] || ''}

  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  font-size: 3rem;
  color: white;
  animation: ${(props) =>
    props.animationType
      ? `${props.animationType} ${props.animationDuration || '3s'} ${
          props.animationTimingFunction || 'ease'
        }`
      : 'none'};
`

export const Logo: React.FC<LogoProps> = ({
  rememberColor = 'white',
  plusColor = 'skyblue',
  animationType,
  animationDuration,
  animationTimingFunction,
}) => {
  return (
    <LogoContainer
      animationType={animationType}
      animationDuration={animationDuration}
      animationTimingFunction={animationTimingFunction}
    >
      <span style={{ color: rememberColor }}>Remember </span>
      <span style={{ color: plusColor }}>Plus</span>
    </LogoContainer>
  )
}

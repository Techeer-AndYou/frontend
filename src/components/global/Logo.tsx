import styled from '@emotion/styled'
import { animations } from '@/utils/animations'

interface LogoProps {
  rememberColor?: string
  plusColor?: string
  animationType?: keyof typeof animations
  animationDuration?: string
  animationTimingFunction?: string
}

const LogoContainer = styled.div<LogoProps>`
  ${(props) => animations[props.animationType!] || ''}

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
      <span style={{ color: plusColor }}> Plus+</span>
    </LogoContainer>
  )
}

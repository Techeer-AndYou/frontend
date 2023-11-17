import styled from '@emotion/styled'
import Link from 'next/link'
import { Logo } from './Logo'

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`

const Menu = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`

const MenuItem = styled.li`
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const Header = ({ rememberColor = 'black', plusColor = 'skyblue' }) => {
  return (
    <HeaderContainer>
      <Logo rememberColor={rememberColor} plusColor={plusColor} />
      <Menu>
        <MenuItem>
          <Link href={`https://time-map-installer.tistory.com/`} style={{ color: rememberColor }}>
            Blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/mypage' style={{ color: rememberColor }}>
            마이페이지
          </Link>
        </MenuItem>
        <MenuItem style={{ color: rememberColor }}>로그아웃</MenuItem>
      </Menu>
    </HeaderContainer>
  )
}

export default Header

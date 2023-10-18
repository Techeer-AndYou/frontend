import styled from '@emotion/styled'
import Link from 'next/link'

const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`

const Menu = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`

const MenuItem = styled.li`
  font-size: 16px;
  color: black;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href='/main'>
          <span>Remember </span>
          <span style={{ color: 'blue' }}>Plus</span>
        </Link>
      </Logo>
      <Menu>
        <MenuItem>
          <Link href={`https://time-map-installer.tistory.com/`}>Blog</Link>
        </MenuItem>
        <MenuItem>
          <Link href='/mypage'>마이페이지</Link>
        </MenuItem>
        <MenuItem>로그아웃</MenuItem>
      </Menu>
    </HeaderContainer>
  )
}

export default Header

import React, { useState } from 'react'
import styled from '@emotion/styled'

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  width: 60rem;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`

type SearchInputProps = {
  show: boolean
}

const SearchInput = styled.input<SearchInputProps>`
  border: none;
  flex: 1;
  padding: 10px 0;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  &::placeholder {
    color: #aaa;
  }
  display: ${(props) => (props.show ? 'block' : 'none')}; // props를 이용한 조건부 스타일링
`

const SearchButton = styled.button`
  background-color: #00a8ff;
  border: none;
  border-radius: 18px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007ab8;
  }
`

export const SearchBar: React.FC = () => {
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false) // 상태를 관리하기 위한 useState

  return (
    <SearchWrapper>
      <SearchInput placeholder='Search...' show={showSearchBox} /> {/* show 속성 추가 */}
      <SearchButton onClick={() => setShowSearchBox(!showSearchBox)}>Q</SearchButton>
    </SearchWrapper>
  )
}

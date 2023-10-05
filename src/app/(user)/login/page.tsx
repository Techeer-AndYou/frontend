'use client'
import styled from '@emotion/styled'
import { FormGroup, Input } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'src/assets/logo.png'

type ParagraphPropsType = {
  hoverColor: string
}

const Paragraph = styled.p<ParagraphPropsType>`
  font-size: 16px;
  text-align: center;

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`
//이 페이지처럼 상호작용에 따른 동적인 스타일링이 적용되어있는 경우에는
//'use client'를 페이지 상단에 적어준다

// const formContainerStyle = styled.div`
//   display:flex;
//   justifyContent: center;
//   alignItems: center;
//   background-color: lightgray;
//   padding: 20px;
// `;

//팁 이걸쓰면 저위에께 적용이된다!->  ${formContainerStyle};
//formContainerStyle을 적용합니다.

// 스타일을 적용할 컴포넌트를 정의합니다.
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0rem;
  height: 90vh;
`

const LoginContainerStyle = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 7rem;
  width: 39rem;
  border-radius: 1rem;
  text-align: center;
  margin-top: 7rem;
`

// 반응형이 안된다
// const Logo = styled(Image)`
//   width: 12%;
//   height: auto;
//   position: fixed;
//   top: 28%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 0;
// `;

const RememberStyle = styled.h2`
  position: relative;
  text-align: center;
  font-weight: bold;

  margin-bottom: 1rem;
  background: linear-gradient(97deg, #ff00e5 21.55%, #e94646 74.82%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  .plus {
    color: #462b62;
  }
`

const LoginStyle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`

const FormStyle = styled.form`
  margin-top: 20px;

  label {
    font-weight: bold;
  }

  .loginButton {
    padding: 10px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: linear-gradient(95deg, #c853ff 39.3%, #ff008a 90.57%);
    color: #fff;
    width: 25rem;
    cursor: pointer;
    font-weight: 450;
  }
`

const Form_Group = styled.div`
  margin-bottom: 0.4rem;
  text-align: left;

  .label {
    display: block;
    margin-bottom: 0.3rem;
  }

  .loginInput {
    margin-left: 0px;
    padding: 0.8rem;
    border: none;
    border-radius: 0.4rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    width: 25rem;
  }
`

const SignUpLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background-color: rgb(255 255 255);
    color: black;
    width: 25rem;
    border: solid;
    font-weight: 450;
    font-size: 0.9rem;
    padding: 1rem 10.5rem;
    border-radius: 10px;
    border-width: 1px;
    border-color: rgb(223 223 223);
  }
`

export default function loginPage() {
  return (
    <div>
      {/* <Paragraph hoverColor='red'>로그인 페이지 입니다</Paragraph> */}
      <FormContainer>
        <LoginContainerStyle>
          {/*잠시 반응형이슈 <Logo src={logo} alt="로고 이미지" /> */}
          <RememberStyle>
            <h2>Remember</h2>
            <span className='plus'>plus+</span>
          </RememberStyle>
          <LoginStyle>
            <h1>로그인</h1>
          </LoginStyle>
          <FormStyle /*onSubmit={handleSubmit}*/>
            <Form_Group>
              <label className='label'>Email</label>
              <input
                type='email'
                className='loginInput'
                /*value={user_email}
              onChange={(event) => setEmail(event.target.value)}*/
              ></input>
            </Form_Group>

            <Form_Group>
              <label className='label'>비밀번호</label>
              <input
                type='password'
                className='loginInput'
                /*value={password}
              onChange={(event) => setEmail(event.target.value)}*/
              ></input>
            </Form_Group>
            <button type='submit' className='loginButton'>
              로그인
            </button>
          </FormStyle>

          <SignUpLink href='/signup'>
            <button> 회원가입</button>
          </SignUpLink>
        </LoginContainerStyle>
      </FormContainer>
    </div>
  )
}

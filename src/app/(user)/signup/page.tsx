'use client'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { FormGroup, Input } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'src/assets/logo.png'

import axios from 'axios'
import { useRouter } from 'next/navigation'

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0rem;
  height: 90vh;
`

const SignupContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 7rem;
  max-width: 39rem;
  border-radius: 1rem;
  text-align: center;
  margin-top: 7rem;
`

const RememberStyle = styled.div`
  position: relative;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(97deg, #ff00e5 21.55%, #e94646 74.82%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SignUpTitle = styled.h1`
  margin-top: 2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  font-size: 2rem;
  font-weight: 650;
`

const FormStyle = styled.form`
  margin-top: 20px;

  label {
    font-weight: bold;
  }
`

const Form_Group = styled.div`
  margin-bottom: 1rem;
  text-align: left;

  .label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .signupInput {
    margin-left: 0px;
    padding: 0.8rem;
    border: none;
    border-radius: 0.4rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    width: 25rem;
    margin-bottom: 0.5rem;
  }
`
const SignUpLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 0.8rem;
    border: none;
    border-radius: 0.8rem;
    // box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: skyblue;
    border-radius: 10px;
    background: linear-gradient(90deg, #f47efe 28.51%, rgba(255, 74, 139, 0) 96.56%);
    width: 25rem;
    cursor: pointer;
    font-weight: 450;
  }
`

export default function signupPage() {
  const router = useRouter()
  const [user_email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user_name, setName] = useState('')
  const [user_phone, setPhone] = useState('')

  const SignupAPI = `http:8000/api/v1/users/register/`

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await axios.post(SignupAPI, {
        user_email,
        password,
        user_name,
        user_phone,
      })

      console.log('회원가입 성공!', response.data)
      alert('회원가입 성공!')
      router.push('/login')
    } catch (error: any) {
      console.error('회원가입 실패!', error.message)
      alert('회원가입에 실패하였습니다')
    }
  }

  return (
    <div>
      <FormContainer>
        <SignupContainer>
          {/*잠시 반응형이슈 <Logo src={logo} alt="로고 이미지" /> */}
          <RememberStyle>
            Remember <span className='plus'>plus+</span>
          </RememberStyle>
          <SignUpTitle>회원가입</SignUpTitle>

          <FormStyle onSubmit={handleSubmit}>
            <Form_Group>
              <label className='label'>이름</label>
              <input
                type='text'
                className='signupInput'
                value={user_name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </Form_Group>

            <Form_Group>
              <label className='label'>Email</label>
              <input
                type='email'
                className='signupInput'
                value={user_email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </Form_Group>

            <Form_Group>
              <label className='label'>비밀번호</label>
              <input
                type='password'
                className='signupInput'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </Form_Group>

            <Form_Group>
              <label className='label'>Phone</label>
              <input
                type='tel'
                className='signupInput'
                value={user_phone}
                onChange={(event) => setPhone(event.target.value)}
              ></input>
            </Form_Group>
          </FormStyle>

          <SignUpLink href='/login' type='submit'>
            <button> 회원가입</button>
          </SignUpLink>
        </SignupContainer>
      </FormContainer>
    </div>
  )
}

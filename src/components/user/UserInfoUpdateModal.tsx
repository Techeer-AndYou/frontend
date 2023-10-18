'use client'
import styled from '@emotion/styled'

import React from "react";
import CloseIcon from '../common/CloseIcon';

type UserInfoUpdateModalPropsType = {
  onSaveChanges: (data: { user_name: string; user_email: string; password: string }) => void;
};


const UserInfoUpdateModal: React.FC<UserInfoUpdateModalPropsType> = ({ onSaveChanges }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [user_name, setName] = React.useState("");
  const [user_email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSaveChanges = () => {
    // Add your logic here to save the changes (e.g., send data to the server)
    onSaveChanges({ user_name, user_email, password });
    setShowModal(false);
  };

  const handleEditProfile = () => {
    // Add your logic here to handle the "Edit Profile" button click
    setShowModal(true);
  };

  return (
    <>
      <EditProfileButton
        type="button"
        onClick={handleEditProfile}
      >
        프로필 변경
      </EditProfileButton>

      {showModal ? (
        <>
          <MainContainer>
            <div>
              <ModalContainer>
                <ModalHeader>
                  <div>프로필 변경</div>
                  <button onClick={() => setShowModal(false)}><CloseIcon /></button>
                </ModalHeader>
                <ModalBody>
                  <div>
                    <label htmlFor="name">이름</label>
                    <input
                      id="name"
                      type="text"
                      value={user_name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">이메일</label>
                    <input
                      id="email"
                      type="email"
                      value={user_email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password">비밀번호</label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </ModalBody>
                <ModalFooter >
                  <button
                    type="button"
                    onClick={handleSaveChanges}
                  >
                    저장하기
                  </button>
                </ModalFooter>
              </ModalContainer>
            </div>
          </MainContainer>
          <ModalBackground></ModalBackground>
        </>
      ) : null}
    </>
  );
}

const EditProfileButton = styled.button`
  // dark:bg-rememberBlue dark:hover:bg-rememberBlueHover dark:focus:ring-gray-700
  // hover:bg-rememberBlueHover 
  margin-top: 2rem;
  width: 200px;
  height: 55px;
  color: white;
  background-color: RGB(123, 199, 231);
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  line-height: 1.25rem;
  padding: 10px 1.25rem;
  border: none;
  :hover {
    background-color: RGB(123, 199, 231);
    opacity: 0.8;
    cursor: pointer;
  }
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-color: rgb(209 213 219); //focus:ring-gray-300
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0px;
  z-index: 50;
  outline: 2px solid transparent;
  outline-offset: 2px;
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  & > div {
    position: relative;
    width: 430px;
    height: 444px;
    margin: 1.5rem auto;
    max-width: 48rem;
  }
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: white;
  outline: 2px solid transparent;
  outline-offset: 2px;
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  border-width: 0px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  width: 100%;
  height: 100%;
`

const ModalHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(226, 232, 240);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  & > div {
    font-size: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 8px 2rem;
  }

  & > button {
    //  leading-none  transition-colors duration-300 
    padding: 0.75rem;
    margin-left: auto;
    margin-right: 0.5rem;
    background-color: transparent;
    border: 0px;
    color: black;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 600;
    outline: 2px solid transparent;
    outline-offset: 2px;
    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    :hover {
      color: RGB(123, 199, 231);
      cursor: pointer;
    }
    border-radius: 9999px;
  }
`

const ModalBody = styled.div`
  position: relative;
  padding: 2rem 2rem;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    margin: 1rem;

  & > label {
    display: block;
    color: rgb(55 65 81);
    font-size: 1.6rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
  }

  & > input {
    //  focus:shadow-outline
    appearance: none;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    width: 100%;
    height: 40px;
    padding: 0.5rem 0.75rem;
    color: rgb(55 65 81);
    line-height: 1.25;
    background-color: white;
    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
}
`

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-top: 1px solid rgb(226, 232, 240);
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  height: 76px;

  & > button {
    width: 120px;
    height: 40px;
    color: white;
    background-color: RGB(123, 199, 231);
    border-radius: 0.5rem;
    font-size: 1.6rem;
    line-height: 1.25rem;
    padding: 10px 1.25rem;
    border: none;
    :hover {
      background-color: RGB(123, 199, 231);
      opacity: 0.8;
      cursor: pointer;
    }
    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      --tw-ring-color: rgb(209 213 219); //focus:ring-gray-300
    }
  }
`

const ModalBackground = styled.div`
  opacity: 0.6;
  position: fixed;
  background-color: black;
  inset: 0px;
  z-index: 40;
`

export default UserInfoUpdateModal;
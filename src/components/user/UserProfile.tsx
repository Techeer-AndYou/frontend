'use client'
import styled from '@emotion/styled'

import axios from "axios";
import UserInfoUpdateModal from "./UserInfoUpdateModal";
import UserPhotoUpdateModal from "./UserPhotoUpdateModal";
import { UserType } from "../../app/(user)/mypage/page";
import { domain } from "../../domain/domain";
export type UserPropsType = {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
};
export type UserUpdatePropsType = {
  user_id: number;
  name: string;
  email: string;
  passwd: string;
  update_at: string;
};
export type UserPhotoUpdatePropsType = {
  user_id: number;
  photo: string;
};
const user_uuid = localStorage.getItem("user_uuid");
const UserProfile: React.FC<UserPropsType> = ({ userData, setUserData }) => {
  // State to store updated user data

  const handleSaveChanges = async (updatedUserData: {
    user_name: string;
    user_email: string;
    password: string;
  }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      const response = await axios.put(
        `${domain}:8000/api/v1/users/update/${user_uuid}/`,
        updatedUserData
      );
      if (response.status === 202) {
        // Update the state with the new data
        setUserData((prev) => {
          return { ...prev, ...updatedUserData };
        });
      }
    } catch (error) {}
  };
  const handlePhotoSaveChanges = async (user_photo: string) => {
    setUserData((prev) => {
      return { ...prev, user_photo };
    });
  };
  return (
    <UserProfileContainer>
      <UserPhotoContainer >
        <img
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="Profile picture"
        />
        <UserPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} />
      </UserPhotoContainer>
      <p className="user-name">김예빈</p>
      <UserInfoUpdateContainer>
        <div className="user-email-container">
          <p className="user-email">kimyeobin@naver.com</p>
        </div>
        <UserInfoUpdateModal onSaveChanges={handleSaveChanges} />
      </UserInfoUpdateContainer>
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  width: 270px;
  max-width: 32rem;
  margin-top: 3rem;
  margin-bottom: 40px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 3rem;
  box-sizing: border-box;

  .user-name {
    text-align: center;
    font-size: 28px;
  }
`
const UserPhotoContainer = styled.div`
  position: relative;

  & > img {
    width: 170px;
    height: 170px;
    border-radius: 9999px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    object-fit: cover;
  }
`

const UserInfoUpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .user-email-container {
    margin-bottom: 14px;
  }

  .user-email {
    font-size: 14px;
    color: rgb(107 114 128);
  }
`

export default UserProfile;

'use client'
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
    <div className="w-[270px] max-w-lg mt-12 mb-[40px] bg-white rounded-lg shadow-md p-12 box-border">
      <div className="relative">
        <img
          className="w-[170px] h-[170px] rounded-full mx-auto mb-12 object-cover"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="Profile picture"
        />
        <UserPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} />
      </div>
      <p className="text-center text-[28px]">김예빈</p>
      <div className="flex flex-col items-center w-full">
        <div className="mb-[14px]">
          <p className="text-[14px] text-gray-500">kimyeobin@naver.com</p>
        </div>
        <UserInfoUpdateModal onSaveChanges={handleSaveChanges} />
      </div>
    </div>
  );
};
export default UserProfile;

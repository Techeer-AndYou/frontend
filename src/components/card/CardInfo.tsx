'use client'
import styled from '@emotion/styled'
import React, { useEffect, useState } from "react";
import CardInfoUpdateModal from "./CardInfoUpdateModal";
import CardPhotoUpdateModal from "./CardPhotoUpdateModal";
import axios from "axios";
import { domain } from "../../domain/domain";

export type CardPropsType = {
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
  photo: string;
};

const CardInfo: React.FC<CardPropsType> = ({ name, email, phoneNumber, introduction, photo }) => {
  // State to store updated user data
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedIntro, setUpdatedIntro] = useState(introduction);
  const [updatedPhoto, setUpdatedPhoto] = useState(photo);

  const user_uuid = localStorage.getItem("user_uuid");

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedIntro(introduction);
    setUpdatedPhoto(photo);
  }, [name, email, introduction, photo]);

  const handleSaveChanges = async (updatedCardData: {
    card_name: string;
    card_email: string;
    card_intro: string;
  }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data

      const response = await axios.put(`${domain}:8000/api/v1/cards/update/${user_uuid}/`, {
        ...updatedCardData,
      });

      if (response.status === 202) {
        // Update the state with the new data
        setUpdatedName(updatedCardData.card_name);
        setUpdatedEmail(updatedCardData.card_email);
        setUpdatedIntro(updatedCardData.card_intro);
      }
    } catch (error) {}
  };

  const handlePhotoSaveChanges = async (updatedCardData: { photo_url: string }) => {
    setUpdatedPhoto(updatedCardData.photo_url);
  };

  return (
    <div className="rounded-lg shadow-md flex flex-col justify-around items-center w-[600px] h-[600px]">
      <div className="relative">
        <img className="w-[500px] h-[300px] object-cover" src={updatedPhoto} alt="Card Photo" />
        {/* onSaveChanges 함수를 handlePhotoSaveChanges로 변경 */}
        <CardPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} />
      </div>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="text-[26px] mb-[14px] font-semibold">{updatedName}</h2>
          <p className=" text-gray-600 mt-8 text-[13px] underline underline-offset-[15px] decoration-gray-300">
            이메일: {updatedEmail}
          </p>
          <p className=" text-gray-600 mt-8 text-[13px] underline underline-offset-[15px] decoration-gray-300">
            전화번호: {phoneNumber}
          </p>
          <p className=" text-gray-600 mt-8 text-[13px] underline underline-offset-[15px] decoration-gray-300">
            소개: {updatedIntro}
          </p>
        </div>
        <CardInfoUpdateModal onSaveChanges={handleSaveChanges} updatedPhoto={""} />
      </div>
    </div>
  );
};
export default CardInfo;
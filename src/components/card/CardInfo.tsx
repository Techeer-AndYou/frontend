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
    <MainContainer>
      <CardPhotoContainer>
        <img src={updatedPhoto} alt="Card Photo" />
        {/* onSaveChanges 함수를 handlePhotoSaveChanges로 변경 */}
        <CardPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} />
      </CardPhotoContainer>
      <CardInfoContaiener>
        <div>
          <h2>{updatedName}</h2>
          <p>이메일: {updatedEmail}</p>
          <p>전화번호: {phoneNumber}</p>
          <p>소개: {updatedIntro}</p>
        </div>
        <CardInfoUpdateModal onSaveChanges={handleSaveChanges} updatedPhoto={""} />
      </CardInfoContaiener>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 770px;
  height: 600px;
`

const CardPhotoContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
  & > img {
    width: 600px;
    object-fit: cover;
  }
`

const CardInfoContaiener = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  & > div > p {
    color: rgb(75 85 99);
    margin-top: 3rem;
    font-size: 13px;
    text-decoration: underline;
    text-underline-offset: 15px;
    text-decoration-color: #d1d5db;
  }
`
export default CardInfo;
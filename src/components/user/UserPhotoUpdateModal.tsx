'use client'
import styled from '@emotion/styled'

import React from "react";
import axios from "axios";
import { FiUpload } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { domain } from "../../domain/domain";
import CloseIcon from '../common/CloseIcon';

type UserPhotoUpdateModalProps = {
  onSaveChanges: (user_photo: string) => void;
};

const UserPhotoUpdateModal: React.FC<UserPhotoUpdateModalProps> = ({ onSaveChanges }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = React.useState<string | null>(null);
  const user_uuid = localStorage.getItem("user_uuid");

  const handleSaveChanges = () => {
    if (selectedPhoto) {
      let formData = new FormData();
      formData.append("user_photo", selectedPhoto); // "photo"에서 "user_photo"로 변경

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Using axios API to send the form data to the server
      axios
        .put(`${domain}:8000/api/v1/users/photo/${user_uuid}/`, formData, config)
        .then((response) => {
          onSaveChanges(response.data.photo_url); // "user_photo"에서 "photo_url"로 변경
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setShowModal(false);
  };

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string | null;
        setSelectedPhotoPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <PhotoEditButton
        onClick={handleEditProfile}
      >
        <FaCamera size={20} color={"white"} />
      </PhotoEditButton>
      {showModal ? (
        <>
          <MainContainer>
            <div>
              <ModalContainer>
                <ModalHeader>
                  <div>프로필 사진</div>
                  <button onClick={() => setShowModal(false)}><CloseIcon /></button>
                </ModalHeader>
                <ModalBody>
                  <div className="upload-button-container">
                    <label htmlFor="photo">
                      <FiUpload className="file-upload-icon" />
                      사진 업로드
                    </label>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*" // Only allow image files to be selected
                      onChange={handlePhotoChange}
                    />
                  </div>
                  {selectedPhotoPreview && (
                    <div className="upload-img-container">
                      <img
                        src={selectedPhotoPreview}
                        alt="Selected Preview"
                      />
                    </div>
                  )}
                </ModalBody>
                <ModalFooter>
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

const PhotoEditButton = styled.button`
  position: absolute;
  z-index: 10;
  padding: 0.5rem;
  bottom: 0.625rem;
  right: 0.5rem;
  width: 36px;
  height: 36px;
  background-color: rgba(66, 66, 66, 0.358);
  border: none;
  border-radius: 9999px;
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  :hover {
    cursor: pointer;
  }
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
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
  padding: 1rem 2rem;
  flex: 1 1 auto;

  .upload-button-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .upload-img-container {
    margin-bottom: 2rem;
  }
  & > div {
    margin: 1.5rem 0.5rem;

  & > label {
    .file-upload-icon {
      margin-right: 0.5rem;
    }

    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: RGB(123, 199, 231);
    color: white;
    :active {
      background-color: RGB(123, 199, 231);
    }
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 1.25rem;
    padding: 0.5rem 130px;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    :hover {
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      cursor: pointer;
    }
    outline: 2px solid transparent;
    outline-offset: 2px;
    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    margin-right: 0.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  & > input {
    display: none;
  }

  & > img {
    width: 100%;
    object-fit: contain;
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

export default UserPhotoUpdateModal;
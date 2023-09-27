'use client'
import styled from '@emotion/styled'

import React from "react";

interface ModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  photo: string;
  card_name: string;
  card_phone: string;
  card_email: string;
  card_intro: string;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  toggleModal,
  photo,
  card_name,
  card_phone,
  card_email,
  card_intro,
}) => {
  if (!isModalOpen) {
    return null; // If the modal is not open, don't render anything
  }

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-60"
    >
      <div className="relative w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal content */}
          <button
            type="button"
            className="absolute top-3 right-2.5"
            onClick={toggleModal} // close 버튼을 누르면 Modal을 닫도록 설정
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Check Your Card
            </h3>
            <form className="space-y-6" action="#">
              {/* Modal 내부의 Form과 Input 요소 */}
              <div className="enroll-form-group relative flex justify-center items-center mb-6">
                <img
                  id="preview-image-modal"
                  className="example-picture max-w-full max-h-80"
                  src={photo}
                  alt="Example"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name:
                  <div className="bg-gray-100 px-2 py-1 rounded-md">{card_name}</div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone:
                  <div className="bg-gray-100 px-2 py-1 rounded-md">{card_phone}</div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email:
                  <div className="bg-gray-100 px-2 py-1 rounded-md">{card_email}</div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="indroduction"
                  className="block mb-4 text-sm font-medium text-gray-900 "
                >
                  Introduction:
                  <div className="bg-gray-100 px-2 py-1 rounded-md">{card_intro}</div>
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enroll Your Card
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
import axios from 'axios'
import React from 'react'
import { FiUpload } from 'react-icons/fi'
import { FaCamera } from 'react-icons/fa'
import { domain } from './domain'

type CardPhotoUpdateModalPropsType = {
  onSaveChanges: (data: { photo_url: string }) => void
}

// SVG icon for the close button
const CloseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
  </svg>
)
export default function CardPhotoUpdateModal({ onSaveChanges }: CardPhotoUpdateModalPropsType) {
  const [showModal, setShowModal] = React.useState(false)
  const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null) // New state for the selected photo file
  const user_uuid = localStorage.getItem('user_uuid')

  const handleSaveChanges = () => {
    if (selectedPhoto) {
      const formData = new FormData()
      formData.append('card_photo', selectedPhoto) // "photo"에서 "user_photo"로 변경

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      // Using axios API to send the form data to the server
      axios
        .put(`${domain}:8000/api/v1/cards/photo/${user_uuid}/`, formData, config)
        .then((response) => {
          onSaveChanges({ photo_url: response.data.photo_url }) // "user_photo"에서 "photo_url"로 변경
        })
        .catch((error) => {
          console.log(error)
        })
    }
    setShowModal(false)
  }
  const handleEditProfile = () => {
    setShowModal(true)
  }
  // Function to handle the photo file selection
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedPhoto(file)
    // Optional: You can also show a preview of the selected photo
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // Set the image preview URL
        const result = reader.result as string | null
        setSelectedPhotoPreview(result) // Explicitly cast to string | null
      }
      reader.readAsDataURL(file)
    }
  }

  const [selectedPhotoPreview, setSelectedPhotoPreview] = React.useState<string | null>(null)

  return (
    <>
      <button
        className='flex justify-center items-center w-[500px] h-[80px] absolute bottom-0 z-10 p-2.5 bg-black/30 focus:outline-none shadow-md'
        onClick={handleEditProfile} // Replace this with your desired action
      >
        <FaCamera size={45} color={'white'} />
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-[430px] my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full justify-center bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='w-full h-14 flex items-start justify-between border-b border-solid border-slate-200 rounded-t'>
                  <div className='text-[20px] font-semibold flex items-center w-full h-full px-8 pt-[8px]'>
                    명함 사진
                  </div>
                  <button
                    className='p-3 ml-auto bg-transparent border-0 text-black text-2xl leading-none font-semibold outline-none focus:outline-none transition-colors duration-300 hover:text-white hover:bg-red-500 rounded-full'
                    onClick={() => setShowModal(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
                {/*body*/}
                <div className='relative items-center justify-center px-4 flex-auto'>
                  <div className='my-8'>
                    <label
                      htmlFor='photo'
                      className='cursor-pointer bg-rememberBlue text-white active:bg-rememberBlueActive font-bold uppercase text-sm px-[130px] py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex items-center justify-center'
                    >
                      <FiUpload className='mr-2' />
                      사진 업로드
                    </label>
                    <input
                      className='hidden'
                      id='photo'
                      type='file'
                      accept='image/*' // Only allow image files to be selected
                      onChange={handlePhotoChange}
                    />
                  </div>
                  {selectedPhotoPreview && (
                    <div className='mb-8'>
                      <img
                        src={selectedPhotoPreview}
                        alt='Selected Preview'
                        className='w-full object-contain'
                      />
                    </div>
                  )}
                </div>
                {/*footer*/}
                <div className='flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='bg-rememberBlue text-white active:bg-rememberBlueActive font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={handleSaveChanges}
                  >
                    저장하기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-60 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}

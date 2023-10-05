import React from 'react'
import styled from '@emotion/styled'

type CardShowModalProps = {
  card_photo: string
}

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

const CloseButton = styled.button`
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  outline: none;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: red;
    color: white;
  }
`

const ShowButton = styled.button`
  margin-top: 1rem;
  width: 200px;
  height: 55px;
  font-size: 13px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.625rem 1.25rem;
  font-weight: 500;

  &:hover {
    background-color: #005d99;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px gray;
  }
`

const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
`

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 1.5rem auto;
  position: relative;
`

const CardImage = styled.img`
  object-fit: contain;
  margin-bottom: 8.4375rem;
`

const CardShowModal: React.FC<CardShowModalProps> = ({ card_photo }) => {
  const [showModal, setShowModal] = React.useState(false)

  const handleEditProfile = () => {
    setShowModal(true)
  }

  return (
    <>
      <ShowButton type='button' onClick={handleEditProfile}>
        명함 보기
      </ShowButton>
      {showModal && (
        <ModalBackdrop>
          <ModalContent>
            <CardImage src={card_photo} alt='Card Photo' />
            <CloseButton onClick={() => setShowModal(false)}>
              {/* SVG remains the same */}
              <CloseIcon />
            </CloseButton>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  )
}

export default CardShowModal

import axios from 'axios'
import { useEffect, useState } from 'react'
import { domain } from './domain'
import './Modal.css'
import CardDetail from './CardDetail'
import { NodeType, UserType } from './types'

const RelationModal: React.FC<{ node: NodeType; onClose: () => void }> = ({ node, onClose }) => {
  const [cardData, setCardData] = useState({
    card_name: '',
    card_email: '',
    card_phone: '',
    card_photo: '',
    card_intro: '',
    memo: '',
  })

  const [modalVisible, setModalVisible] = useState(true)
  const [animateSlideOut, setAnimateSlideOut] = useState(false)

  const [userData, setUserData] = useState<UserType>({
    user_name: '',
    user_email: '',
    password: '',
    user_phone: '',
    user_photo: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${domain}:8000/api/v1/relations/detail/${node.friend_uid}/`,
        )
        const { card_name, card_email, card_phone, card_photo, card_intro, memo } =
          response.data.result
        setCardData({ card_name, card_email, card_phone, card_photo, card_intro, memo })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    axios
      .get(`${domain}:8000/api/v1/users/info/${node.friend_uid}/`)
      .then((response) => {
        // 로그인 성공 시 처리
        const userData: { result: UserType } = response.data
        setUserData(userData.result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [node])

  const closeModal = () => {
    setAnimateSlideOut(true) // Trigger the slide-out animation
    setTimeout(() => {
      setModalVisible(false) // Hide the modal after the animation ends
      onClose()
      setAnimateSlideOut(false) // Reset the animation state for the next open
    }, 300) // Adjust this time to match the slide-out animation duration
  }

  // Close the modal when clicking outside of it
  const handleOutsideClick = (event: MouseEvent) => {
    const modalContent = document.querySelector('.modal-content')
    if (modalContent && !modalContent.contains(event.target as Node)) {
      closeModal()
    }
  }

  useEffect(() => {
    if (modalVisible) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [modalVisible])

  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full bg-black bg-opacity-50 py-10 ${
        modalVisible ? 'flex' : 'hidden'
      }`}
    >
      <div
        className={`max-h-min max-w-[270px] modal-content ${
          modalVisible ? (animateSlideOut ? 'animate-slide-out' : 'animate-slide-in') : ''
        }`}
      >
        {/* <div className="w-full"> */}
        <CardDetail
          user_photo={userData.user_photo}
          card_name={cardData.card_name}
          card_email={cardData.card_email}
          card_phone={cardData.card_phone}
          card_photo={cardData.card_photo}
          card_intro={cardData.card_intro}
          memo={cardData.memo}
        />
        {/* </div> */}
      </div>
    </div>
  )
}

export default RelationModal

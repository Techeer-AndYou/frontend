// CardDetail.tsx

import styled from '@emotion/styled'
import CardShowModal from './CardShowModal'
import { CardDetailPropsType } from './types'

const Container = styled.div`
  display: flex;
  width: 270px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  max-width: 100%;
  margin-top: 12rem;
  margin-bottom: 40px;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin: 0 auto 6rem;
`

const NameText = styled.p`
  text-align: center;
  font-size: 26px;
  margin-bottom: 2rem;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`

const FlexRow = styled.div`
  display: flex;
`

const GrayText = styled.p`
  color: #7f7f7f;
  font-size: 13px;
  margin-right: 0.5rem;
`

const DarkText = styled.p`
  color: #1d1d1d;
  font-size: 13px;
`

const Separator = styled.hr`
  margin: 1px 0 14px;
`

const CardDetail: React.FC<CardDetailPropsType> = (cardData) => {
  return (
    <Container>
      <CardWrapper>
        <Image src={cardData.user_photo} alt='Profile picture' />
        <NameText>{cardData.card_name}</NameText>
        <FlexColumn>
          <FlexRow>
            <GrayText>이메일</GrayText>
            <DarkText>{cardData.card_email}</DarkText>
          </FlexRow>
          <FlexRow>
            <GrayText>전화번호</GrayText>
            <DarkText>{cardData.card_phone}</DarkText>
          </FlexRow>
          <FlexRow>
            <GrayText>소개</GrayText>
            <DarkText>{cardData.card_intro}</DarkText>
          </FlexRow>
          <Separator />
          <GrayText>Memo</GrayText>
          <DarkText>{cardData.memo}</DarkText>
        </FlexColumn>
        <CardShowModal card_photo={cardData.card_photo} />
      </CardWrapper>
    </Container>
  )
}

export default CardDetail

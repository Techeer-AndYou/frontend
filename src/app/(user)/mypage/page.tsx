'use client'
import styled from '@emotion/styled'

import React, { useEffect, useState } from "react";
import CardInfo from "../../../components/card/CardInfo";
import UserProfile from "../../../components/user/UserProfile";
import axios from "axios";
import { domain } from "../../../domain/domain";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LineChart = dynamic(
  () => import('../../../components/analytic/LineChart'),
  {
    loading: () => <div className='line-chart-skeleton'></div>
  },
);
const PieChart = dynamic(
  () => import('../../../components/analytic/PieChart'),
  {
    loading: () => <div className='pie-chart-skeleton'></div>
  }
);
const BarChart = dynamic(
  () => import('../../../components/analytic/BarChart'),
  {
    loading: () => <div className='bar-chart-skeleton'></div>
  }
);

export type UserType = {
  user_name: string;
  user_email: string;
  password: string;
  user_phone: string;
  user_photo: string;
};

type CardType = {
  card_name: string;
  card_email: string;
  card_phone: string;
  card_intro: string;
  card_photo: string;
};

type CountContainerProps = {
  bgColor: string;
  titleColor: string;
}

export default function userPage() {
  const [showCardInfo, setShowCardInfo] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(false);

  const [userData, setUserData] = useState<UserType>({
    user_name: "",
    user_email: "",
    password: "",
    user_phone: "",
    user_photo: "",
  });

  const [cardData, setCardData] = useState<CardType>({
    card_name: "",
    card_email: "",
    card_phone: "",
    card_intro: "",
    card_photo: "",
  });

  useEffect(() => {
    //const user_uuid = localStorage.getItem("user_uuid");
    const user_uuid = 'abcd'; // api mocking test

    axios
      .get(`${domain}:3000/api/v1/users/info/${user_uuid}/`)
      .then((response) => {
        // 로그인 성공 시 처리
        const userData: { result: UserType } = response.data;
        setUserData(userData.result);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("유저 정보 불러오기 실패", error);
        // 예: 에러 메시지 표시 등
      });

    axios
      .get(`${domain}:3000/api/v1/cards/info/${user_uuid}/`)
      .then((response) => {
        // 로그인 성공 시 처리
        const cardData: { result: CardType } = response.data;
        setCardData(cardData.result);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("카드 정보 불러오기 실패", error);
        // 예: 에러 메시지 표시 등
      });
  }, []);

  const handleButtonClick = (component: string) => {
    setShowCardInfo(component === "cardInfo");
    setShowChart(component === "chart");
  };
  
  return (
    <BaseContainer>
      <LeftContainer>
        <UserProfile userData={userData} setUserData={setUserData} />
        <ButtonContainer>
          <button
            onClick={() => handleButtonClick("cardInfo")}
            type="button"
          >
            내 명함
          </button>
          <button
            onClick={() => handleButtonClick("chart")}
            type="button"
          >
            통계
          </button>
        </ButtonContainer>
      </LeftContainer>
      {showCardInfo && cardData && (
        <CardInfoContainer>
          <CardInfo
            name={cardData.card_name}
            email={cardData.card_email}
            phoneNumber={cardData.card_phone}
            introduction={cardData.card_intro}
            photo={cardData.card_photo}
          />
          <div className="advertising-container">
            <a href="https://youtu.be/su8KH8jT7e0" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/final_ad.png"
              alt="ad"
              width={230}
              height={600}
            />
          </a>
          </div>
        </CardInfoContainer>
      )}
      {showChart && (
        <ChartContainer>
          <CenterContainer>
            <div className='count-info-container'>
              <CountInfo bgColor='RGB(249, 249, 249)' titleColor='rgb(75 85 99)'>
                <div className="count-title">오늘 나를 조회한<br />사용자</div>
                <div className="count-container">
                  <div className="count-num">20</div>
                  <div className="count-unit">명</div>
                </div>
              </CountInfo>
              <CountInfo bgColor='RGB(195, 220, 249)' titleColor='black'>
                <div className="count-title">지금까지 내 명함을 본<br />사용자</div>
                <div className="count-container">
                  <div className="count-num">127</div>
                  <div className="count-unit">명</div>
                </div>
              </CountInfo>
              <CountInfo bgColor='RGB(249, 249, 249)' titleColor='rgb(75 85 99)'>
                <div className="count-title">오늘 추가한 명함</div>
                <div className="count-container">
                  <div className="count-num">7</div>
                  <div className="count-unit">개</div>
                </div>
              </CountInfo>
              <CountInfo bgColor='RGB(195, 220, 249)' titleColor='black'>
                <div className="count-title">지금까지 추가한 명함</div>
                <div className="count-container">
                  <div className="count-num">104</div>
                  <div className="count-unit">개</div>
                </div>
              </CountInfo>
            </div>
            <LineChart />
          </CenterContainer>
          <RightContainer>
            <div><PieChart /></div>
            <BarChart />
          </RightContainer>
        </ChartContainer>
      )}
    </BaseContainer>
  );
};

const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'GmarketSansMedium';
  width: 100vw;
  height: 100vh;
  background-color: rgb(242, 242, 242);
`

const LeftContainer = styled.div`
  //margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 3rem;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;

  & > button {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    width: 130px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: black;
    :hover {
      color: white;
      background-color: RGB(123, 199, 231);
      cursor: pointer;
      border: none;
    }
    border: 1px solid rgb(224, 224, 224);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    //dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive
  }
`

const CardInfoContainer = styled.div`
  display: flex;
  margin-top: 3rem;

  .advertising-container {
    margin-left: 3rem;
    width: 230px;
    height: 603px;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  .line-chart-skeleton {
    width: 660px;
    height: 430px;
    background-color: rgb(222, 222, 222);
    border-radius: 0.5rem;
  }

  .pie-chart-skeleton {
    width: 350px;
    height: 330px;
    background-color: rgb(222, 222, 222);
    border-radius: 0.5rem;
  }

  .bar-chart-skeleton {
    width: 350px;
    height: 250px;
    background-color: rgb(222, 222, 222);
    border-radius: 0.5rem;
  }
`
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;

  .count-info-container {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    display: flex;
  }
`

const CountInfo = styled.div<CountContainerProps>`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.75rem;
  margin-right: 20px;

  .count-title {
    color: ${(props) => props.titleColor};
    text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .count-container {
    display: flex;
    align-items: end;

    .count-num {
      color: black;
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }

    .count-unit {
      font-size: 15px;
      padding-bottom: 0.25rem;
      margin-left: 2px;
    }
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
`

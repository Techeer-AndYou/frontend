'use client'
import styled from '@emotion/styled'

import React, { useEffect, useState } from "react";
import CardInfo from "../../../components/card/CardInfo";
import LineChart from "../../../components/analytic/LineChart";
import PieChart from "../../../components/analytic/PieChart";
import UserProfile from "../../../components/user/UserProfile";
import BarChart from "../../../components/analytic/BarChart";
import axios from "axios";
import { domain } from "../../../domain/domain";

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

const UserPage: React.FC = () => {
  const [showCardInfo, setShowCardInfo] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(false);

  const [userData, setUserData] = useState<UserType>({
    user_name: "김예빈",
    user_email: "kimyeobin@naver.com",
    password: "1234",
    user_phone: "010-4645-7186",
    user_photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
  });

  const [cardData, setCardData] = useState<CardType>({
    card_name: "김예빈",
    card_email: "kimyeobin12@gmail.com",
    card_phone: "010-4645-7186",
    card_intro: "",
    card_photo: "",
  });

  useEffect(() => {
    const user_uuid = localStorage.getItem("user_uuid");
    axios
      .get(`${domain}:8000/api/v1/users/info/${user_uuid}/`)
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
      .get(`${domain}:8000/api/v1/cards/info/${user_uuid}/`)
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
    <div className="font-['GmarketSansMedium'] flex w-screen h-screen bg-rememberWhiteHover">
      <div className="ml-12 mr-12">
        <UserProfile userData={userData} setUserData={setUserData} />
        <div className="flex justify-between items-center w-[270px]">
          <button
            onClick={() => handleButtonClick("cardInfo")}
            type="button"
            className="shadow-sm w-[130px] h-[50px] flex justify-center items-center text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            내 명함
          </button>
          <button
            onClick={() => handleButtonClick("chart")}
            type="button"
            className="shadow-sm w-[130px] h-[50px] flex justify-center items-center text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            통계
          </button>
        </div>
      </div>
      {showCardInfo && cardData && (
        <div className="flex mt-12">
          <CardInfo
            name={cardData.card_name}
            email={cardData.card_email}
            phoneNumber={cardData.card_phone}
            introduction={cardData.card_intro}
            photo={cardData.card_photo}
          />
          <a href="https://youtu.be/su8KH8jT7e0" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github.com/SV-Summer-BootCamp-Team-F/frontend/blob/design/update-design-relation-page-69/src/pages/User/final_ad.png?raw=true"
              alt="ad"
              className="ml-12 w-[230px] h-[603px] rounded-xl shadow-md"
            />
          </a>
        </div>
      )}
      {showChart && (
        <div className="flex justify-center mt-12">
          <div className="flex flex-col">
            <div className="w-full h-[150px] mb-[20px] flex">
              <div
                className={`shadow-md py-4 px- flex flex-col items-center justify-around w-[150px] h-[150px] bg-white/50 rounded-xl mr-[20px]`}
              >
                <div className="text-gray-600 text-center text-[12px] flex justify-center items-center font-semibold">
                  오늘 나를 조회한
                  <br />
                  사용자
                </div>
                <div className="flex items-end">
                  <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                    20
                  </div>
                  <div className="text-[15px] pb-1 ml-[2px]">명</div>
                </div>
              </div>
              <div
                className={`shadow-md py-4 px-3 flex flex-col items-center justify-around w-[150px] h-[150px] bg-blue-300/50 rounded-xl mr-[20px]`}
              >
                <div className="text-black text-center text-[12px] flex justify-center items-center font-semibold">
                  지금까지 내 명함을 본 사용자
                </div>
                <div className="flex items-end">
                  <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                    127
                  </div>
                  <div className="text-[15px] pb-1 ml-[2px]">명</div>
                </div>
              </div>
              <div
                className={`shadow-md py-4 px-3 flex flex-col items-center justify-around w-[150px] h-[150px] bg-white/50 rounded-xl mr-[20px]`}
              >
                <div className="text-gray-600 text-center text-[12px] flex justify-center items-center font-semibold">
                  오늘 추가한 명함
                </div>
                <div className="flex items-end">
                  <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                    7
                  </div>
                  <div className="text-[15px] pb-1 ml-[2px]">개</div>
                </div>
              </div>
              <div
                className={`shadow-md py-4 px-2 flex flex-col items-center justify-around w-[150px] h-[150px] bg-blue-300/50 rounded-xl mr-[20px]`}
              >
                <div className="text-black text-center text-[12px] flex justify-center items-center font-semibold">
                  지금까지 추가한 명함
                </div>
                <div className="flex items-end">
                  <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                    104
                  </div>
                  <div className="text-[15px] pb-1 ml-[2px]">개</div>
                </div>
              </div>
            </div>
            <LineChart />
          </div>
          <div className="flex flex-col">
            <div className="mb-[20px]">
              <PieChart />
            </div>
            <BarChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
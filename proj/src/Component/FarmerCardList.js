import FarmerCard from "./FarmerCard";
import React, { useState, useEffect } from "react";
import "./FarmerCardList.css"; // 스타일 파일 불러오기

const FarmerCardList = () => {
    const [cards, setCards] = useState([]);
    //   useEffect(() => {
    //       axios
    //           .get("https://your-spring-boot-api-url/cards")
    //           .then((response) => {
    //               setCards(response.data);
    //           })
    //           .catch((error) => {
    //               console.error("Error fetching data:", error);
    //           });
    //   }, []);

    const farmerCardsData = [
        {
            farmname: "명수팜",
            farmaddress: "경기 이천시 명수로",
            category: "토마토, 무화과, 감자",
            imageUrl: "/farmer.png", // 이미지 URL
        },
        {
            farmname: "명수팜",
            farmaddress: "경기 이천시 명수로",
            category: "토마토, 무화과, 감자",
            imageUrl: "/ha.jpg", // 이미지 URL
        },
        {
            farmname: "명수팜",
            farmaddress: "경기 이천시 명수로",
            category: "토마토, 무화과, 감자",
            imageUrl: "/dont.png", // 이미지 URL
        },
    ];

    return (
        <div
            className="farmer-card-grid"
            style={{ display: "flex", justifyContent: "center" }}
        >
            {farmerCardsData.map((farmerCard, index) => (
                <FarmerCard
                    key={index}
                    farmname={farmerCard.farmname}
                    farmaddress={farmerCard.farmaddress}
                    category={farmerCard.category}
                    imageUrl={farmerCard.imageUrl}
                />
            ))}
            {/* {cards.map((card, index) => (
                // FarmerCard 컴포넌트를 사용하여 각각의 카드 렌더링
                <FarmerCard key={index} cardData={card} />
            ))} */}
        </div>
    );
};

export default FarmerCardList;

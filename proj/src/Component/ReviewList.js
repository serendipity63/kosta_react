import React from "react";
import ReviewCard from "./ReviewCard"; // ReviewCard 컴포넌트 import
// import "./ReviewList.css"; // 리뷰 리스트의 스타일 파일 import

const ReviewList = () => {
    // 예시 데이터
    const reviews = [
        {
            nickname: "명수사랑",
            starRating: 1,
            date: "23.11.22",
            farmName: "명수팜",
            itemName: "토마토",
            quantity: "5kg",
            content:
                "명수팜 못난이 토마토 존맛! 못생겼지만 신선하고 맛있어요! ",
        },
        {
            nickname: "명수사랑",
            starRating: 5,
            date: "23.11.22",
            farmName: "명수팜",
            itemName: "토마토",
            quantity: "5kg",
            content:
                "명수팜 못난이 토마토 존맛! 못생겼지만 신선하고 맛있어요! ",
        },
        // ...더 많은 리뷰 데이터 추가 가능
    ];

    return (
        <div className="review-list">
            {reviews.map((review, index) => (
                <ReviewCard
                    key={index}
                    nickname={review.nickname}
                    starRating={review.starRating}
                    date={review.date}
                    farmName={review.farmName}
                    itemName={review.itemName}
                    quantity={review.quantity}
                    content={review.content}
                />
            ))}
        </div>
    );
};

export default ReviewList;

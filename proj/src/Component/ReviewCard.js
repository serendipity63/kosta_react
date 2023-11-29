import React from "react";
import "./ReviewCard.css"; // 리뷰 카드의 스타일 파일 import

const ReviewCard = ({
    nickname,
    starRating,
    date,
    farmName,
    itemName,
    quantity,
    content,
}) => {
    // 별점에 따라 별
    const renderStars = (starRating) => {
        const stars = [];
        const starFilled = "/star.png"; // 별 이미지 경로 width 30px height 30px

        for (let i = 1; i <= starRating; i++) {
            stars.push(
                <img key={i} className="star" src={starFilled} alt="star" />
            );
        }
        return stars;
    };

    return (
        <div className="review-card">
            <div className="review-contents">
                <div className="nickname">{nickname}님</div>
                <div className="rating">{renderStars(starRating)}</div>
                <div className="details">
                    <span className="date">{date}</span>
                    <span className="farm-name">{farmName}</span>
                    <span className="item-name">{itemName}</span>
                    <span className="quantity">{quantity}</span>
                </div>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default ReviewCard;

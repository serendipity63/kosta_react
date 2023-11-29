import React from "react";
import "./FarmerCard.css"; // 스타일 파일 import
import Button from "./Button";

const FarmerCard = ({ farmname, farmaddress, category, imageUrl }) => {
    const imageStyle = {
        border: "3px solid #75786c",
        borderRadius: "50%",
        width: "150px",
        height: "150px",
    };
    const starRating = 4.5; // 별점 평균 값 (예시)
    const starCount = 199; // 별점 개수 (예시)
    const heartCount = 100; // 하트 개수 (예시)

    return (
        <div className="farmer-card">
            <div className="card-header">
                <div className="button-wrapper">
                    <Button text="상세보기" />
                </div>
            </div>

            <div className="image-container ">
                <img src={imageUrl} alt="Farmer Card" style={imageStyle} />
            </div>
            <div className="info">
                <div className="rating-info">
                    <img src="/star.png" alt="Star" />
                    <span>{starRating}</span> (<span>{starCount}</span>) &nbsp;
                </div>
                <div className="heart-info">
                    <img src="/heart.png" alt="Heart" />
                    <span>{heartCount}</span>
                </div>
            </div>

            <div className="card-details">
                <div className="farmname">{farmname}</div>
                <div className="farmaddress">{farmaddress}</div>
                <div className="category">{category}</div>
            </div>
        </div>
    );
};

export default FarmerCard;

import React from "react";
import "./App.css"; // 전역 스타일 파일 import
import FarmerCardList from "./Component/FarmerCardList"; // FarmerCardList 컴포넌트 import
import ReviewList from "./Component/ReviewList";
import FarmerDetail from "./Component/FarmerDetail";

function App() {
    return (
        <div className="app">
            {/* <h1>파머 카드 리스트</h1> */}
            {/* <FarmerCardList />
            <ReviewList /> */}
            <FarmerDetail />
        </div>
    );
}

export default App;

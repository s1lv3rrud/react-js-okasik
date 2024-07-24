import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ResultStoryCard.css";

const ResultStoryCard = ({ image }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text">
          오늘의 식당은
          <br />ㅇㅇㅇ (이)에요.
          <br /> 맛있게 먹어요.
        </p>
      </div>
      <div className="menu-buttons">
        <button className="btn share-button">💬 카톡공유</button>
        <button className="btn map-button">🗺️ 지도보기</button>
      </div>
      <div
        className="card-footer btn init-button"
        onClick={() => navigate("/")}
      >
        ↪️ 처음으로
      </div>
    </div>
  );
};

export default ResultStoryCard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ResultStoryCard.css";
import man01 from "../assets/images/man01.jpg";
import man02 from "../assets/images/man02.jpg";
import man08 from "../assets/images/man08.jpg";
import man03 from "../assets/images/man03.webp";
import man04 from "../assets/images/man04.webp";
import man05 from "../assets/images/man05.webp";
import man06 from "../assets/images/man06.webp";
import man07 from "../assets/images/man07.webp";
import man09 from "../assets/images/man09.webp";
import man10 from "../assets/images/man10.webp";
import man11 from "../assets/images/man11.webp";

const images = [
  man01,
  man02,
  man03,
  man04,
  man05,
  man06,
  man07,
  man08,
  man09,
  man10,
  man11,
];

const ResultStoryCard = () => {
  const navigate = useNavigate();
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={randomImage} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text">
          야레야레.. 못 말리는 아가씨,
          <br />또 메뉴 정하는 거예요?
        </p>
      </div>
      <div className="menu-buttons">
        <button className="btn share-button">💬 카톡공유</button>
        <button className="btn map-button">🗺️ 지도보기</button>
      </div>
      <div className="card-footer btn init-button" onClick={() => navigate("/")}>
        ↪️ 처음으로
      </div>
    </div>
  );
};

export default ResultStoryCard;

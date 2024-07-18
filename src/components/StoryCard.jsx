import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoryCard.css";
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

const StoryCard = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="card">
      <img src={randomImage} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">
          야레야레.. 못 말리는 아가씨,
          <br />
          카테고리를 선택해주세요.
        </p>
      </div>
      <div className="menu-buttons">
        <button className="btn btn-light menu-button">전체</button>
        <button className="btn btn-light menu-button">한식</button>
        <button className="btn btn-light menu-button">중식</button>
        <button className="btn btn-light menu-button">일식</button>
        <button className="btn btn-light menu-button">양식</button>
        <button className="btn btn-light menu-button">기타</button>
      </div>
      <button className="card-footer btn btn-warning">
        식당 골라줘!
      </button>
    </div>
  );
};

export default StoryCard;

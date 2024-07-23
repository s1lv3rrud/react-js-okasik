import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CategoryStoryCard.css";
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

const CategoryStoryCard = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const [activeButtons, setActiveButtons] = useState(["전체"]);

  const handleButtonClick = (button) => {
    if (button === "전체") {
      setActiveButtons(["전체"]);
    } else {
      setActiveButtons((prev) => {
        const newActiveButtons = prev.includes(button)
          ? prev.filter((b) => b !== button)
          : [...prev.filter((b) => b !== "전체"), button];
        return newActiveButtons.length === 0 || newActiveButtons.length === 5
          ? ["전체"]
          : newActiveButtons;
      });
    }
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={randomImage} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text">
          야레야레.. 못 말리는 아가씨,
          <br />
          카테고리를 선택해주세요.
        </p>
      </div>
      <div className="menu-buttons">
        <button
          className={`btn menu-button ${
            activeButtons.includes("전체") ? "active" : "btn-light"
          }`}
          onClick={() => handleButtonClick("전체")}
        >
          전체
        </button>
        <button
          className={`btn menu-button ${
            activeButtons.includes("한식") ? "active" : "btn-light"
          }`}
          onClick={() => handleButtonClick("한식")}
        >
          한식
        </button>
        <button
          className={`btn menu-button ${
            activeButtons.includes("중식") ? "active" : "btn-light"
          }`}
          onClick={() => handleButtonClick("중식")}
        >
          중식
        </button>
        <button
          className={`btn menu-button ${
            activeButtons.includes("일식") ? "active" : "btn-light"
          }`}
          onClick={() => handleButtonClick("일식")}
        >
          일식
        </button>
        <button
          className={`btn menu-button ${
            activeButtons.includes("양식") ? "active" : "btn-light"
          }`}
          onClick={() => handleButtonClick("양식")}
        >
          양식
        </button>
        <button
          className={`btn menu-button ${
            activeButtons.includes("기타") ? "active" : "btn-light"
          }`}
          onClick={() => handleButtonClick("기타")}
        >
          기타
        </button>
      </div>
      <div className="card-footer btn">식당 골라줘!</div>
    </div>
  );
};

export default CategoryStoryCard;

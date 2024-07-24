import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CategoryStoryCard.css";
import { getRestaurantRecommendation } from "../services/randomRestaurantService";

const CategoryStoryCard = ({ image }) => {
  const navigate = useNavigate();
  const [activeButtons, setActiveButtons] = useState(["전체"]);

  const categoryMap = {
    전체: "all",
    한식: "korean",
    중식: "chinese",
    일식: "japanese",
    양식: "western",
    기타: "others",
  };

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

  const handleGetRecommendation = async () => {
    const selectedCategories = activeButtons.map(
      (button) => categoryMap[button]
    );

    try {
      const recommendation = await getRestaurantRecommendation(
        selectedCategories
      );
      /*const recommendation = {
        id: 69446673,
        name: "미메이라",
        address: "경기 성남시 분당구 대왕판교로 660",
        categoryName: "음식점 > 중식",
        url: "http://place.map.kakao.com/69446673",
        distance: 33,
        xaddress: "127.10665836352175",
        yaddress: "37.40061852529423",
      };*/
      navigate("/story/story", { state: { recommendation, image } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} className="card-img-top" />
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
      <div className="card-footer btn" onClick={handleGetRecommendation}>
        "식당 골라줘!"
      </div>
    </div>
  );
};

export default CategoryStoryCard;

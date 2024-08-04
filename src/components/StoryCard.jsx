import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoryCard.css";
import LoadingSpinner from "../assets/LoadingSpinner.gif";

const StoryCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recommendation, image } = location.state || {};
  const isWoman = image?.includes("woman");

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/story/result", { state: { recommendation, image } });
    }, 1000);

    // 타이머를 클린업하여 컴포넌트가 언마운트될 때 메모리 누수를 방지
    return () => clearTimeout(timer);
  }, [navigate, recommendation, image]);

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} className="card-img-top" alt="Story" />
      </div>
      <div className="card-body">
        <p className="card-text">
          야레야레.. 못 말리는 {isWoman ? "도련님" : "아가씨"},
          <br />또 메뉴 정하는 거예요?
        </p>
      </div>
      <div className="card-footer loading-button">
        <img src={LoadingSpinner} alt="Loading..." />
      </div>
    </div>
  );
};

export default StoryCard;

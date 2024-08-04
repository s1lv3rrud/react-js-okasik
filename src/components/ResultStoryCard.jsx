import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ResultStoryCard.css";

const ResultStoryCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recommendation, image } = location.state || {};

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true); // 페이지 진입 시 페이드 인
  }, []);

  return (
    <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
      <div className="card">
        <div className="card-img-container">
          <img src={image} className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="card-text">
            오늘의 식당은
            <br />
            {recommendation?.name}(이)에요.
            <br /> 맛있게 먹어요.
          </p>
        </div>
        <div className="menu-buttons">
          {/*<button className="btn share-button">💬 카톡공유</button>
        <button className="btn loc-button">📍 위치보기</button>*/}
          <a
            href={recommendation?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn map-button"
          >
            🗺️ 카카오맵
          </a>
        </div>
        <div
          className="card-footer btn init-button"
          onClick={() => navigate("/")}
        >
          ↪️ 처음으로
        </div>
      </div>
    </CSSTransition>
  );
};

export default ResultStoryCard;

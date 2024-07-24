import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoryCard.css";

const StoryCard = ({ image }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text">
          야레야레.. 못 말리는 아가씨,
          <br />또 메뉴 정하는 거예요?
        </p>
      </div>
      <div
        className="card-footer btn"
        onClick={() => navigate("/story/result")}
      >
        다음으로
      </div>
    </div>
  );
};

export default StoryCard;

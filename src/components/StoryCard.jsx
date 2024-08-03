import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StoryCard.css";

const StoryCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recommendation, image } = location.state || {};
  const isWoman = image?.includes("woman");

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text">
          야레야레.. 못 말리는 {isWoman ? "도련님" : "아가씨"},
          <br />또 메뉴 정하는 거예요?
        </p>
      </div>
      <div
        className="card-footer btn"
        onClick={() =>
          navigate("/story/result", { state: { recommendation, image } })
        }
      >
        다음으로
      </div>
    </div>
  );
};

export default StoryCard;

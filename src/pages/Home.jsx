import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import Layout from "../components/Layout";

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    };
    stars.push(<div key={i} className="star" style={style}></div>);
  }
  return stars;
};

const handleKakaoLogin = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  window.location.href = `${BASE_URL}/v1/login/kakao`;
};

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loginStatus = queryParams.get("login");

    if (loginStatus === "success") {
      alert("로그인에 성공했습니다!");
      navigate("/story/category");
    } else if (loginStatus === "failed") {
      alert("로그인에 실패했습니다.");
    }
  }, [location]);

  return (
    <Layout>
      <div className="background d-flex flex-column justify-content-center align-items-center vh-100">
        {generateStars(100)}
        <h1 className="logo-text text-left">잘먹어요</h1>
        <h1 className="logo-text text-right">아가씨</h1>
        <div className="mb-4"></div>
        <button type="button" className="btn login-button">
          <img
            onClick={handleKakaoLogin}
            src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            alt="카카오 로그인"
            className="kakao-login-button-image"
          />
        </button>
        <button
          type="button"
          className="btn btn-light login-button"
          onClick={() => navigate("/story/category")}
        >
          🧑‍🍳 로그인 없이 시작하기
        </button>
      </div>
    </Layout>
  );
};

export default Home;
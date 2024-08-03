import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleKakaoLogin = () => {
    alert("로그인에 성공했습니다!");
    dispatch(loginSuccess(true));
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    //window.location.href = `${BASE_URL}/v1/login/kakao`;
  };

  // 로그인 상태 확인을 위한
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loginStatus = queryParams.get("login");

    if (loginStatus === "success") {
      alert("로그인에 성공했습니다!");
      dispatch(loginSuccess(true));
      navigate("/story/category");
    } else if (loginStatus === "failed") {
      alert("로그인에 실패했습니다.");
    }
  }, [location, dispatch, navigate]);

  return (
    <Layout>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
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

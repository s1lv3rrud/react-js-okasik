import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../features/auth/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import Layout from "../components/Layout";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleKakaoLogin = () => {
    //alert("로그인에 성공했습니다!");
    //dispatch(loginSuccess(true));
    //navigate("/");
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    window.location.href = `${BASE_URL}/v1/login/kakao`;
  };

  // 로그인 상태 확인을 위한 useEffect
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loginStatus = queryParams.get("login");

    if (loginStatus === "success") {
      alert("로그인에 성공했습니다!");
      dispatch(loginSuccess(true));
      navigate("/", { replace: true });
    } else if (loginStatus === "failed") {
      alert("로그인에 실패했습니다.");
    }
  }, [location, dispatch, navigate]);

  const handleKakaoLogout = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    window.location.href = `${BASE_URL}/v1/logout/kakao`;

    // Redux 상태 업데이트 및 로그아웃 처리
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <Layout>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="logo-text text-left">잘먹어요</h1>
        <h1 className="logo-text text-right">아가씨</h1>
        <div className="mb-4"></div>
        {isLoggedIn ? (
          <div>
            <button
              className="btn start-button"
              onClick={() => navigate("/story/category")}
            >
              🎬 시작하기
            </button>
            <button
              type="button"
              className="btn btn-light login-button"
              onClick={handleKakaoLogout}
            >
              ⮐ 로그아웃
            </button>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </Layout>
  );
};

export default Home;

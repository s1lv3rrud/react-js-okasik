import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

const Home = () => {
  return (
    <div className="background d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="grandiflora-one-regular text-left">잘먹어요</h1>
      <h1 className="grandiflora-one-regular text-right">아가씨</h1>
      <div className="mb-4"></div>
      <button type="button" className="btn login-button">
        <img
          src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          alt="카카오 로그인"
          className="kakao-login-button-image"
        />
      </button>
      <button type="button" className="btn btn-light login-button">
        🧑‍🍳 로그인 없이 시작하기
      </button>
    </div>
  );
};

export default Home;

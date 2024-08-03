import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../features/auth/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 모바일 환경의 사이드 메뉴 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKakaoLogout = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    window.location.href = `${BASE_URL}/v1/logout/kakao`;

    // Redux 상태 업데이트 및 로그아웃 처리
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-text">
          잘먹어요 아가씨
        </Link>
      </div>
      <div className="navbar-links">
        {isLoggedIn && (
          <Link onClick={handleKakaoLogout} className="navbar-text">
            로그아웃
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/mypage" className="navbar-text">
            마이페이지
          </Link>
        )}
        <Link to="/restaurants" className="navbar-text">
          주변 식당
        </Link>
      </div>
      <div className="navbar-menu-button" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navbar-slide-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-close-button" onClick={toggleMenu}>
          ✕
        </div>
        {isLoggedIn && (
          <Link to="/mypage" onClick={toggleMenu} className="navbar-text">
            마이페이지
          </Link>
        )}
        <Link to="/restaurants" onClick={toggleMenu} className="navbar-text">
          주변 식당
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

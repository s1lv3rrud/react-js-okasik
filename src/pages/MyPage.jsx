import React, { useEffect, useState } from "react";
import { getUserInfo } from "../services/userService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/MyPage.css";

const MyPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/");
      return;
    }
    const fetchUserData = async () => {
      try {
        const userData = await getUserInfo();
        setUser(userData);
      } catch (err) {
        setError("사용자 정보를 가져오는 중 오류가 발생했습니다.");
        alert("사용자 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [isLoggedIn, navigate]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      {isLoggedIn && user && (
        <div className="mypage-container flex vh-100 ">
          <div className="user-info">
            <img
              src={user.profileImageUrl}
              alt="프로필"
              className="profile-image"
            />
            <div className="user-details">
              <p>
                <span className="label">닉네임</span>
                <span className="value">{user.nickname}</span>
              </p>
              <p>
                <span className="label">이메일</span>
                <span className="value">{user.email}</span>
              </p>
              <p>
                <span className="label">성별</span>
                <span className="value">
                  {user.gender === "FEMALE" ? "여성" : "남성"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyPage;

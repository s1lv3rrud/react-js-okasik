import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const mockUser = {
  id: 1,
  nickname: "은학",
  email: "529acky@naver.com",
  profileImageUrl:
    "http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640",
  gender: "FEMALE",
};

export const getUserInfo = async () => {
  /*return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 500);
  });*/
  try {
    const response = await axios.get(`${BASE_URL}/v1/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
    throw error;
  }
};

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const mockRecommendation = {
  id: 69446673,
  name: "미메이라",
  address: "경기 성남시 분당구 대왕판교로 660",
  categoryName: "음식점 > 중식",
  url: "http://place.map.kakao.com/69446673",
  distance: 33,
  xaddress: "127.10665836352175",
  yaddress: "37.40061852529423",
};

export const getRestaurantRecommendation = async (categories) => {
  /*return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRecommendation);
    }, 500);
  });*/
  try {
    const response = await axios.post(`${BASE_URL}/v1/category`, {
      category: categories,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

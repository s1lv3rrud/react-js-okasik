import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getRestaurantRecommendation = async (categories) => {
  try {
    const response = await axios.post(`${BASE_URL}/kakao/v1/category`, {
      category: categories,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

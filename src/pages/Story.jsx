import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Story.css";
import CategoryStoryCard from "../components/CategoryStoryCard";

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

const Home = () => {
  return (
    <div className="background d-flex flex-column justify-content-center align-items-center vh-100">
      {generateStars(100)}
      <CategoryStoryCard />
    </div>
  );
};

export default Home;
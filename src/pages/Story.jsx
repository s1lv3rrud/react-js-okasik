import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Story.css";
import CategoryStoryCard from "../components/CategoryStoryCard";
import StoryCard from "../components/StoryCard";
import ResultStoryCard from "../components/ResultStoryCard";
import man01 from "../assets/images/man01.jpg";
import man02 from "../assets/images/man02.jpg";
import man08 from "../assets/images/man08.jpg";
import man03 from "../assets/images/man03.webp";
import man04 from "../assets/images/man04.webp";
import man05 from "../assets/images/man05.webp";
import man06 from "../assets/images/man06.webp";
import man07 from "../assets/images/man07.webp";
import man09 from "../assets/images/man09.webp";
import man10 from "../assets/images/man10.webp";
import man11 from "../assets/images/man11.webp";

const images = [
  man01,
  man02,
  man03,
  man04,
  man05,
  man06,
  man07,
  man08,
  man09,
  man10,
  man11,
];

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

const Story = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="background d-flex flex-column justify-content-center align-items-center vh-100">
      {generateStars(100)}
      <Routes>
        <Route
          path="/category"
          element={<CategoryStoryCard image={randomImage} />}
        />
        <Route path="/story" element={<StoryCard image={randomImage} />} />
        <Route
          path="/result"
          element={<ResultStoryCard image={randomImage} />}
        />
      </Routes>
    </div>
  );
};

export default Story;

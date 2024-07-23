import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Story.css";
import CategoryStoryCard from "../components/CategoryStoryCard";
import StoryCard from "../components/StoryCard";
import ResultStoryCard from "../components/ResultStoryCard";

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
  return (
    <div className="background d-flex flex-column justify-content-center align-items-center vh-100">
      {generateStars(100)}
      <Routes>
        <Route path="/category" element={<CategoryStoryCard />} />
        <Route path="/story" element={<StoryCard />} />
        <Route path="/result" element={<ResultStoryCard />} />
      </Routes>
    </div>
  );
};

export default Story;

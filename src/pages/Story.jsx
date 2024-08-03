import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Story.css";
import CategoryStoryCard from "../components/CategoryStoryCard";
import StoryCard from "../components/StoryCard";
import ResultStoryCard from "../components/ResultStoryCard";
import man01 from "../assets/images/man01.jpg";
import man02 from "../assets/images/man02.jpg";
import man03 from "../assets/images/man03.webp";
import man04 from "../assets/images/man04.webp";
import man05 from "../assets/images/man05.webp";
import man06 from "../assets/images/man06.webp";
import woman01 from "../assets/images/woman01.jpg";
import woman02 from "../assets/images/woman02.jpg";
import woman03 from "../assets/images/woman03.jpg";
import woman04 from "../assets/images/woman04.jpg";
import woman05 from "../assets/images/woman05.jpg";
import woman06 from "../assets/images/woman06.jpg";
import woman07 from "../assets/images/woman07.jpg";
import Layout from "../components/Layout";

const images = [
  man01,
  man02,
  man03,
  man04,
  man05,
  man06,
  woman01,
  woman02,
  woman03,
  woman04,
  woman05,
  woman06,
  woman07,
];

const Story = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <Layout>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{paddingTop: `60px`}}>
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
    </Layout>
  );
};

export default Story;

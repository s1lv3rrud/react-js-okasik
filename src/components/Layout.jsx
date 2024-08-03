import React from "react";
import NavBar from "./NavBar";
import "../styles/Layout.css";

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

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="background">
        {generateStars(100)}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

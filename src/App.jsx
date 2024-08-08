import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import MyPage from "./pages/MyPage";
import OAuthCallback from "./pages/OAuthCallback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/*" element={<Story />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/oauth-callback" element={<OAuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;

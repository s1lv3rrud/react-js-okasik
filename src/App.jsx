import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/*" element={<Story />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/oauth-callback" element={<OAuthCallBack />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectCategory from './pages/SelectCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<SelectCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
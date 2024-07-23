import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectMenu from './pages/SelectMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<SelectMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
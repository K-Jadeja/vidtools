import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GenerateSubtitles from "./pages/GenerateSubtitles";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-subtitles" element={<GenerateSubtitles />} />
        {/* Add more utility routes here */}
      </Routes>
    </Router>
  );
}

export default App;

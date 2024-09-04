import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white bg-opacity-40 backdrop-blur-lg border border-white/20 shadow-lg rounded-full px-10 py-4 flex justify-center space-x-8">
        <Link
          to="/"
          className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/generate-subtitles"
          className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
        >
          Generate Subtitles
        </Link>
        <Link
          to="/extract-mp3"
          className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
        >
          Extract MP3
        </Link>
        {/* Add more utility links here */}
      </div>
    </nav>
  );
}

export default Navbar;

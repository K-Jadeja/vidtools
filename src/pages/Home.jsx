import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center py-32">
        <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Video Utility App
        </h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto drop-shadow-md">
          All your video needs in one place, with cutting-edge tools at your
          fingertips.
        </p>
        <Link
          to="/utilities"
          className="mt-10 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
        >
          Explore Utilities
        </Link>
      </section>

      {/* Utility Cards */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/generate-subtitles"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 text-center hover:bg-opacity-30 transition-all"
          >
            <h2 className="text-3xl font-semibold mb-4">Generate Subtitles</h2>
            <p className="text-lg">
              Automatically generate subtitles for your videos in various
              languages.
            </p>
          </Link>
          <Link
            to="/extract-mp3"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 text-center hover:bg-opacity-30 transition-all"
          >
            <h2 className="text-3xl font-semibold mb-4">Extract MP3</h2>
            <p className="text-lg">
              Convert your video files to high-quality MP3 audio files.
            </p>
          </Link>
          {/* Add more utility cards here */}
        </div>
      </section>
    </div>
  );
}

export default Home;

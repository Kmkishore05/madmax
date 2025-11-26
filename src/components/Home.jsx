import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/rb-logo.png";
import hoverSound from "../assets/audio.mp3";

const Home = () => {
  const navigate = useNavigate();

  const goToDome = () => {
    navigate("/domegallery");  // <-- correct URL path
  };
    const playHoverSound = () => {
    const audio = new Audio(hoverSound);
    audio.volume = 0.4;    // adjust loudness
    audio.play();
  };

  return (
    <div className="home-container">

      {/* Logo */}
      <header className="home-header">
        <img src={logoImage} alt="Logo" className="home-logo" />
      </header>

      {/* Hero */}
      <section className="hero-section">
        <h1 className="hero-title">MAX</h1>

        {/* Button on top of car */}
       <button
          className="hero-btn"
          onClick={goToDome}
          onMouseEnter={playHoverSound}     // <-- Sound on hover
        >
          View Dome
        </button>

        {/* Car Image */}
      
      </section>
    </div>
  );
};
export default Home;

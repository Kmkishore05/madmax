import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/rb-logo.png";
import hoverSound from "../assets/audio.mp3";
import bg from "../assets/home.jpg";

const Home = () => {
  const navigate = useNavigate();

  const goToDome = () => {
    navigate("/domegallery");
  };

  const playHoverSound = () => {
    const audio = new Audio(hoverSound);
    audio.volume = 0.4;
    audio.play();
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Logo */}
      <header className="home-header">
        <img src={logoImage} alt="Logo" className="home-logo" />
      </header>

      {/* Hero */}
      <section className="hero-section">
        <h1 className="hero-title">MAX</h1>

        {/* Button */}
        <button
          className="hero-btn"
          onClick={goToDome}
          onMouseEnter={playHoverSound}
        >
          View Dome
        </button>
      </section>
    </div>
  );
};

export default Home;

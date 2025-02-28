import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../components/Match";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage";

const TournamentPage = ({ setPageTitle }) => {
  const [remainingImages, setRemainingImages] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPageTitle("Tournament");
  }, [setPageTitle]);

  useEffect(() => {
    const images = loadFromLocalStorage("tournamentImages");
    if (images) {
      const shuffledImages = [...images].sort(() => Math.random() - 0.5); // 랜덤 섞기
      setRemainingImages(shuffledImages);
    }
  }, []);

  useEffect(() => {
    if (remainingImages.length >= 2) {
      setCurrentMatch([remainingImages[0], remainingImages[1]]);
    } else if (remainingImages.length === 1) {
      saveToLocalStorage("tournamentWinner", remainingImages[0]);
      navigate("/results");
    }
  }, [remainingImages, navigate]);

  const handleMatchResult = (winner) => {
    setRemainingImages((prev) => [...prev.slice(2), winner]); // 다음 라운드 준비
  };

  if (!currentMatch) return <p>Loading...</p>;

  return (
    <div>
      <Match
        player1={currentMatch[0]}
        player2={currentMatch[1]}
        onSelectWinner={handleMatchResult}
      />
    </div>
  );
};

export default TournamentPage;

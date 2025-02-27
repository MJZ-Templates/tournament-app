// src/pages/TournamentPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../components/Match";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage";

const TournamentPage = () => {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const images = loadFromLocalStorage("tournamentImages");
    if (images) {
      const generatedMatches = images.map((image, index) => ({
        id: index,
        player1: { name: `Player ${index * 2 + 1}`, image },
        player2: { name: `Player ${index * 2 + 2}`, image },
      }));
      setMatches(generatedMatches);
      saveToLocalStorage("currentMatches", generatedMatches);
    }
  }, []);

  const handleMatchResult = (matchId, winner) => {
    const newMatches = matches.map((match) => {
      if (match.id === matchId) {
        return { ...match, winner };
      }
      return match;
    });
    setMatches(newMatches);
    saveToLocalStorage("currentMatches", newMatches);

    const remainingMatches = newMatches.filter((match) => !match.winner);
    if (remainingMatches.length === 0) {
      saveToLocalStorage("tournamentResults", newMatches);
      navigate("/results");
    }
  };

  return (
    <div>
      <h1>Tournament</h1>
      <div>
        {matches.map((match) => (
          <Match
            key={match.id}
            match={match}
            onSelectWinner={(winner) => handleMatchResult(match.id, winner)}
          />
        ))}
      </div>
    </div>
  );
};

export default TournamentPage;

// src/components/Match.jsx
import React from "react";

const Match = ({ match, onSelectWinner }) => {
  return (
    <div className="match">
      <div className="player">
        <img src={match.player1.image} alt={match.player1.name} />
        <p>{match.player1.name}</p>
        <button onClick={() => onSelectWinner(match.player1)}>
          Select Player 1
        </button>
      </div>
      <div className="player">
        <img src={match.player2.image} alt={match.player2.name} />
        <p>{match.player2.name}</p>
        <button onClick={() => onSelectWinner(match.player2)}>
          Select Player 2
        </button>
      </div>
    </div>
  );
};

export default Match;

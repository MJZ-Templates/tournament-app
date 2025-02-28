import React from "react";

const Match = ({ player1, player2, onSelectWinner }) => {
  return (
    <div className="match">
      <div className="player">
        <img src={player1} alt="Player 1" />
        <button onClick={() => onSelectWinner(player1)}>Select</button>
      </div>
      <div className="player">
        <img src={player2} alt="Player 2" />
        <button onClick={() => onSelectWinner(player2)}>Select</button>
      </div>
    </div>
  );
};

export default Match;

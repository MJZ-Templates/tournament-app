import React from "react";
import styled from "styled-components";
import vsImage from "../assets/img-vs.png";

const MatchContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Player = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlayerImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const VSImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  z-index: 10;
`;

const Match = ({ player1, player2, onSelectWinner }) => {
  return (
    <MatchContainer>
      <Player onClick={() => onSelectWinner(player1)}>
        <PlayerImage src={player1} alt="Player 1" />
      </Player>
      <VSImage src={vsImage} alt="VS" />
      <Player onClick={() => onSelectWinner(player2)}>
        <PlayerImage src={player2} alt="Player 2" />
      </Player>
    </MatchContainer>
  );
};

export default Match;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../utils/storage";
import styled from "styled-components";
import Confetti from "react-confetti";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  width: 100vw;
  background-color: #f8f9fa;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WinnerImage = styled.img`
  display: block;
  max-width: 80%;
  border-radius: 10px;
`;

const RestartButton = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultsPage = () => {
  const [winner, setWinner] = useState(null);
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const finalWinner = loadFromLocalStorage("tournamentWinner");
    setWinner(finalWinner);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <Container>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
          gravity={0.5}
        />
      )}
      {winner ? (
        <WinnerContainer>
          <Title>🏆 Tournament Winner! 🏆</Title>
          <WinnerImage src={winner} alt="Tournament Winner" />
          <RestartButton onClick={handleRestart}>
            Start New Tournament
          </RestartButton>
        </WinnerContainer>
      ) : (
        <p>No results to show.</p>
      )}
    </Container>
  );
};

export default ResultsPage;

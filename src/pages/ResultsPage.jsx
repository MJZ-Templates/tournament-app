import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../utils/storage";
import styled from "styled-components";
import Confetti from "react-confetti";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  margin: auto 0;
  padding: 30px 10px;
  gap: 20px;
`;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  color: #333;
`;

const WinnerImage = styled.img`
  display: block;
  width: auto;
  height: 50vh;
  border-radius: 10px;
  object-fit: contain;
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
          <Title>🏆 Winner! 🏆</Title>
          <WinnerImage src={winner} alt="Tournament Winner" />
          <Button onClick={handleRestart}>Start New Tournament</Button>
        </WinnerContainer>
      ) : (
        <p>No results to show.</p>
      )}
    </Container>
  );
};

export default ResultsPage;

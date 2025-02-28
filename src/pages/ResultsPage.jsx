import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../utils/storage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const WinnerImage = styled.img`
  display: block;
  max-width: 80%;
  margin: auto;
`;

const ResultsPage = ({ setPageTitle }) => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setPageTitle("Tournament Results");
    const finalWinner = loadFromLocalStorage("tournamentWinner");
    setWinner(finalWinner);
  }, [setPageTitle]);

  return (
    <Container>
      {winner ? (
        <div>
          <Title>🏆 Tournament Winner! 🏆</Title>
          <WinnerImage src={winner} alt="Tournament Winner" />
        </div>
      ) : (
        <p>No results to show.</p>
      )}
    </Container>
  );
};

export default ResultsPage;

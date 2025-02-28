import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const TitleInput = styled.input`
  width: 60%;
  padding: 15px;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  margin-bottom: 20px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const StartButton = styled.button`
  width: 200px;
  padding: 15px;
  font-size: 1.5rem;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

const HomePage = ({ setTournamentTitle }) => {
  const [title, setLocalTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsDisabled(title.trim().length === 0);
  }, [title]);

  const handleStart = () => {
    if (isDisabled) return;
    setTournamentTitle(title);
    saveToLocalStorage("tournamentTitle", title);
    navigate("/create-tournament");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isDisabled) {
      handleStart();
    }
  };

  return (
    <Container>
      <Title>🏆 Let the Tournament Begin! 🏆</Title>
      <TitleInput
        type="text"
        value={title}
        onChange={(e) => setLocalTitle(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter Tournament Title"
      />
      <StartButton onClick={handleStart} disabled={isDisabled}>
        Start
      </StartButton>
    </Container>
  );
};

export default HomePage;

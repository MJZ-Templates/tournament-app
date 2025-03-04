import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
  margin: auto 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Description = styled.pre`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;
  white-space: pre-wrap;

  span {
    font-weight: bold;
    color: #333;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
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

  useEffect(() => {
    setTournamentTitle("");
  }, [setTournamentTitle]);

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
      <Description>
        Create your own tournament by selecting your favorite images in a{" "}
        <span>1:1 random match</span> style. <br />
        Get ready to have fun and choose the best!
      </Description>
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

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  margin: auto 0;
  padding: 30px 10px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Description = styled.pre`
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 1.5;
  white-space: pre-wrap;

  span {
    font-weight: bold;
    color: #333;
  }
`;

const TitleInput = styled.input`
  width: 80%;
  padding: 15px;
  font-size: 24px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
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
      <Content>
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
      </Content>
      <Button onClick={handleStart} disabled={isDisabled}>
        Start
      </Button>
    </Container>
  );
};

export default HomePage;

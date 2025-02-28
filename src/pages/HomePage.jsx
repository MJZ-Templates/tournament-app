import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = ({ setTournamentTitle, setPageTitle }) => {
  const [title, setLocalTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  const handleStart = () => {
    setTournamentTitle(title);
    saveToLocalStorage("tournamentTitle", title);
    navigate("/create-tournament");
  };

  return (
    <Container>
      <TitleInput
        type="text"
        value={title}
        onChange={(e) => setLocalTitle(e.target.value)}
        placeholder="Enter Tournament Title"
      />
      <StartButton onClick={handleStart}>Start</StartButton>
    </Container>
  );
};

export default HomePage;

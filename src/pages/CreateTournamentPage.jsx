import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
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

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const UploadSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  background-color: white;
`;

const StartButton = styled.button`
  padding: 15px;
  font-size: 1.5rem;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

const CreateTournamentPage = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleUpload = (uploadedImages) => {
    setImages(uploadedImages);
  };

  const handleStartTournament = () => {
    saveToLocalStorage("tournamentImages", images);
    navigate("/tournament");
  };

  return (
    <Container>
      <Title>Upload Images for Tournament</Title>
      <UploadSection>
        <ImageUploader onUpload={handleUpload} />
      </UploadSection>
      <StartButton onClick={handleStartTournament} disabled={images.length < 2}>
        Start Tournament
      </StartButton>
    </Container>
  );
};

export default CreateTournamentPage;

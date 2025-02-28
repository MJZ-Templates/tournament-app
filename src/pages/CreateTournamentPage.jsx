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

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-width: 60%;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px;
`;

const PreviewImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #ddd;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: 0;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }
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
    setImages((prevImages) => {
      const filteredImages = uploadedImages.filter(
        (newImage) => !prevImages.some((prevImage) => prevImage === newImage)
      );
      return [...prevImages, ...filteredImages];
    });
  };

  const handleDeleteImage = (imageToDelete) => {
    setImages((prevImages) =>
      prevImages.filter((image) => image !== imageToDelete)
    );
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

      <PreviewContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <PreviewImage src={image} alt={`Preview ${index + 1}`} />
            <DeleteButton onClick={() => handleDeleteImage(image)}>
              ❌
            </DeleteButton>
          </ImageWrapper>
        ))}
      </PreviewContainer>

      <StartButton onClick={handleStartTournament} disabled={images.length < 2}>
        Start Tournament
      </StartButton>
    </Container>
  );
};

export default CreateTournamentPage;

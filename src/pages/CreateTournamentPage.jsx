import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { saveToLocalStorage } from "../utils/storage";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isDragging ? "#e3f2fd" : "#f8f9fa")};
  transition: background-color 0.3s ease-in-out;
  margin: auto 0;
  padding: 30px 10px;
  gap: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #333;
`;

const UploadSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  background-color: ${(props) => (props.isDragging ? "#e3f2fd" : "white")};
  text-align: center;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  gap: 16px;

  ${(props) =>
    props.isDragging &&
    `
    border-color: #007bff;
  `};
`;

const UploadSectionDescription = styled.pre`
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
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
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
  }
`;

const CreateTournamentPage = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (uploadedImages) => {
    if (images.length + uploadedImages.length > 16) {
      alert("You can only upload up to 16 images.");
      return;
    }

    setImages((prevImages) => [...prevImages, ...uploadedImages]);
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

  const processDroppedFiles = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => URL.createObjectURL(file));

    handleUpload(imageFiles);
  };

  useEffect(() => {
    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (e) => {
      if (e.relatedTarget === null) {
        setIsDragging(false);
      }
    };

    const handleDrop = (e) => {
      processDroppedFiles(e);
    };

    document.body.addEventListener("dragover", handleDragOver);
    document.body.addEventListener("dragleave", handleDragLeave);
    document.body.addEventListener("drop", handleDrop);

    return () => {
      document.body.removeEventListener("dragover", handleDragOver);
      document.body.removeEventListener("dragleave", handleDragLeave);
      document.body.removeEventListener("drop", handleDrop);
    };
  }, [images]);

  return (
    <Container isDragging={isDragging}>
      <Title>Upload Images for Tournament</Title>
      <UploadSection isDragging={isDragging}>
        <UploadSectionDescription>
          You can add between 2 and 16 images for the tournament. <br />
          Supported formats are JPEG, PNG, GIF, BMP, and WEBP.
          <br />
          <br />
          Drag & Drop images anywhere on the page or use the upload button.
        </UploadSectionDescription>
        <ImageUploader onUpload={handleUpload} isDragging={isDragging} />
      </UploadSection>
      {images.length > 0 && (
        <PreviewContainer>
          {images.map((image, index) => (
            <ImageWrapper key={index}>
              <PreviewImage src={image} alt={`Preview ${index + 1}`} />
              <DeleteButton onClick={() => handleDeleteImage(image)}>
                <IoClose size={20} color="#333333" />
              </DeleteButton>
            </ImageWrapper>
          ))}
        </PreviewContainer>
      )}

      <Button onClick={handleStartTournament} disabled={images.length < 2}>
        Start Tournament
      </Button>
    </Container>
  );
};

export default CreateTournamentPage;

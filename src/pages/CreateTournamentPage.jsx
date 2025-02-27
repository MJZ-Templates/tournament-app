// src/pages/CreateTournamentPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { saveToLocalStorage } from "../utils/storage";

const CreateTournamentPage = ({ setPageTitle }) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPageTitle("Upload Images for Tournament");
  }, [setPageTitle]);

  const handleUpload = (uploadedImages) => {
    setImages(uploadedImages);
  };

  const handleStartTournament = () => {
    saveToLocalStorage("tournamentImages", images);
    navigate("/tournament");
  };

  return (
    <div>
      <ImageUploader onUpload={handleUpload} />
      {images.length > 0 && (
        <button onClick={handleStartTournament}>Start Tournament</button>
      )}
    </div>
  );
};

export default CreateTournamentPage;

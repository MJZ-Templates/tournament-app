import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { saveToLocalStorage } from "../utils/storage";

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
    <div>
      <h1>Upload Images for Tournament</h1>
      <ImageUploader onUpload={handleUpload} />
      <button onClick={handleStartTournament} disabled={images.length < 2}>
        Start Tournament
      </button>
    </div>
  );
};

export default CreateTournamentPage;

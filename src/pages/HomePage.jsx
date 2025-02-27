// src/pages/HomePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";

const HomePage = ({ setTournamentTitle }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    setTournamentTitle(title);
    saveToLocalStorage("tournamentTitle", title);
    navigate("/create-tournament");
  };

  return (
    <div>
      <h1>Start Your Tournament</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Tournament Title"
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default HomePage;

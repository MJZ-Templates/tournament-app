// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";

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
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setLocalTitle(e.target.value)}
        placeholder="Enter Tournament Title"
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default HomePage;

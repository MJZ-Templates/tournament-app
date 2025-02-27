// src/components/Header.jsx
import React from "react";
import { loadFromLocalStorage } from "../utils/storage";

const Header = () => {
  const tournamentTitle = loadFromLocalStorage("tournamentTitle");

  return (
    <header>
      <h1>{tournamentTitle ? tournamentTitle : "Tournament App"}</h1>
    </header>
  );
};

export default Header;

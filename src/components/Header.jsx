// src/components/Header.jsx
import React from "react";

const Header = ({ tournamentTitle, pageTitle }) => {
  return (
    <header>
      <h1>
        {tournamentTitle
          ? `${tournamentTitle} - ${pageTitle}`
          : "Tournament App"}
      </h1>
    </header>
  );
};

export default Header;

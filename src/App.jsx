// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTournamentPage from "./pages/CreateTournamentPage";
import TournamentPage from "./pages/TournamentPage";
import ResultsPage from "./pages/ResultsPage";
import Header from "./components/Header";

const App = () => {
  const [tournamentTitle, setTournamentTitle] = useState("");

  return (
    <Router>
      <div>
        <Header tournamentTitle={tournamentTitle} />
        <Routes>
          <Route
            path="/"
            element={<HomePage setTournamentTitle={setTournamentTitle} />}
          />
          <Route path="/create-tournament" element={<CreateTournamentPage />} />
          <Route path="/tournament" element={<TournamentPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

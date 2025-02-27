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
  const [pageTitle, setPageTitle] = useState("");

  return (
    <Router>
      <div>
        <Header tournamentTitle={tournamentTitle} pageTitle={pageTitle} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setTournamentTitle={setTournamentTitle}
                setPageTitle={setPageTitle}
              />
            }
          />
          <Route
            path="/create-tournament"
            element={<CreateTournamentPage setPageTitle={setPageTitle} />}
          />
          <Route
            path="/tournament"
            element={<TournamentPage setPageTitle={setPageTitle} />}
          />
          <Route
            path="/results"
            element={<ResultsPage setPageTitle={setPageTitle} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTournamentPage from "./pages/CreateTournamentPage";
import TournamentPage from "./pages/TournamentPage";
import ResultsPage from "./pages/ResultsPage";
import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => {
  const [tournamentTitle, setTournamentTitle] = useState("");

  return (
    <Router>
      <AppContainer>
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
      </AppContainer>
    </Router>
  );
};

export default App;

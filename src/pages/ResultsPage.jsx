// src/pages/ResultsPage.jsx
import React, { useEffect } from "react";
import { loadFromLocalStorage } from "../utils/storage";

const ResultsPage = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle("Tournament Results");
  }, [setPageTitle]);

  const results = loadFromLocalStorage("tournamentResults");

  return (
    <div>
      {results ? (
        <div>
          {results.map((result, index) => (
            <div key={index}>
              <h2>Winner of Match {result.id + 1}</h2>
              <img
                src={result.winner.image}
                alt={`Winner of Match ${result.id + 1}`}
              />
              <p>{result.winner.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results to show.</p>
      )}
    </div>
  );
};

export default ResultsPage;

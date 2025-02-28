import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../utils/storage";

const ResultsPage = ({ setPageTitle }) => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setPageTitle("Tournament Results");
    const finalWinner = loadFromLocalStorage("tournamentWinner");
    setWinner(finalWinner);
  }, [setPageTitle]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {winner ? (
        <div>
          <h1>🏆 Tournament Winner! 🏆</h1>
          <img
            src={winner}
            alt="Tournament Winner"
            style={{ maxWidth: "50%", borderRadius: "10px" }}
          />
        </div>
      ) : (
        <p>No results to show.</p>
      )}
    </div>
  );
};

export default ResultsPage;

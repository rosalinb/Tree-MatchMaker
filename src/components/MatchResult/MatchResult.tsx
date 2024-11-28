import React from "react";
import { Match } from "../../utils/types";
import "./MatchResult.css";

interface MatchResultProps {
  match: Match;
}

const MatchResult: React.FC<MatchResultProps> = ({ match }) => {
  return (
    <div className="match-result-page">
      <div className="match-result-card">
        <h1 className="match-title"> Tree Match Found! 🌳</h1>
        <p className="match-name">{match.name}</p>
        <p className="match-description">{match.description}</p>
      </div>
    </div>
  );
};

export default MatchResult;

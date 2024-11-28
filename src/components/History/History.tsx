import React from "react";
import { HistoryItem } from "../../utils/types";
import "./History.css";

interface HistoryProps {
  history: HistoryItem[];
  onChangeAnswer: (index: number, newAnswer: string) => void;
}

const History: React.FC<HistoryProps> = ({ history, onChangeAnswer }) => {
  return (
    <div className="history-container">
      {history.map((item, index) => (
        <div className="history-item-card" key={index}>
          <p className="history-question">{item.question}</p>
          {item.answers.map((option) => (
            <button
              key={option}
              className={
                option === item.answer ? "selected-answer" : "available-options"
              }
              onClick={() => onChangeAnswer(index, option)}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;

import React from "react";
import { Question } from "../../utils/types";
import "./QuestionDisplay.css";

interface QuestionDisplayProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  onAnswer,
}) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      {question.answers.map((answer) => (
        <button key={answer} onClick={() => onAnswer(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionDisplay;

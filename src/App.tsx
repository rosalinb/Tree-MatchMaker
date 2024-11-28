import React from "react";
import { useQuiz } from "./utils/hooks/useQuiz";
import LandingPage from "./components/LandingPage/LandingPage";
import QuestionDisplay from "./components/QuestionDisplay/QuestionDisplay";
import MatchResult from "./components/MatchResult/MatchResult";
import History from "./components/History/History";
import "./App.css";

const App: React.FC = () => {
  const {
    isQuizStarted,
    currentQuestion,
    history,
    match,
    isLoading,
    startQuiz,
    handleAnswer,
    handleChangeAnswer,
  } = useQuiz();

  return (
    <div className="App">
      <header className="app-header">
        <h1>Tree Match Maker</h1>
      </header>

      <main className="app-main-container">
        {!isQuizStarted ? (
          <LandingPage onStartQuiz={startQuiz} />
        ) : isLoading ? (
          <div className="loader">Loading...</div>
        ) : match ? (
          <MatchResult match={match} />
        ) : (
          <section>
            <History history={history} onChangeAnswer={handleChangeAnswer} />
            {currentQuestion && (
              <QuestionDisplay
                question={currentQuestion}
                onAnswer={handleAnswer}
              />
            )}
          </section>
        )}
      </main>
      <footer className="app-footer">
        <p>© 2024 Tree Match Quiz. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;

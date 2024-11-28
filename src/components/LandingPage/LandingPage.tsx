import React from "react";
import "./LandingPage.css";

interface LandingPageProps {
  onStartQuiz: () => void; // Function to trigger starting the quiz
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="landing-page">
      <div className="landing-page-card">
        <h1>Your Perfect Tree Awaits!</h1>
        <p>Find the tree that’s meant for you! 🌳. </p>
        <p>
          Answer a few simple questions, and let TreeMatchmaker match you with
          the ideal tree for your home or garden. Let's plant the perfect match!
        </p>
        <button onClick={onStartQuiz}>Start Quest</button>
      </div>
    </div>
  );
};

export default LandingPage;

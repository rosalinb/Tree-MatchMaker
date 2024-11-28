import { useState } from "react";
import { Question, Match, HistoryItem } from "../types";
import { fetchInitialQuestion, submitAnswer } from "../services/apiServices";

export const useQuiz = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [match, setMatch] = useState<Match | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Start the quiz and fetch the first question
    const startQuiz = async () => {
        setIsQuizStarted(true);
        setIsLoading(true)
        try{
            const data = await fetchInitialQuestion();
            setCurrentQuestion(data.question);
        } catch (error) {
            console.log("Error starting the quiz", error)
        } finally {
            setIsLoading(false)
        }
  
    };

    // Handle submitting an answer for the current question
    const handleAnswer = async (answer: string) => {
        if (!currentQuestion) return;

        const step_id = currentQuestion.step_id;
        setIsLoading(true)

        try {
            const data = await submitAnswer(step_id, answer);

            // Update match or move to the next question
            if (data.match) setMatch(data.match);
            else if (data.question) setCurrentQuestion(data.question);

            // Append the submitted answer to the history
            setHistory((prevHistory) => [
                ...prevHistory,
                {
                    step_id,
                    question: currentQuestion.question,
                    answers: currentQuestion.answers,
                    answer,
                },
            ]);
        } catch (error) {
            console.error("Error submitting answer:", error);
        } finally {
            setIsLoading(false)
        }
    };

    // Handle changing an answer in the history
    const handleChangeAnswer = async (index: number, newAnswer: string) => {
        const updatedHistory = [...history];
        const step_id = updatedHistory[index].step_id;
        setIsLoading(true)

        try {
            const data = await submitAnswer(step_id, newAnswer);

            // Update the current question if applicable
            if (data.question) setCurrentQuestion(data.question);

            // Update the specific answer in the history
            updatedHistory[index].answer = newAnswer;
            setHistory(updatedHistory);

            console.log("Updated history:", updatedHistory);
        } catch (error) {
            console.error("Error updating answer:", error);
        } finally {
            setIsLoading(false)
        }
    };

    return {
        isQuizStarted,
        currentQuestion,
        history,
        match,
        isLoading,
        startQuiz,
        handleAnswer,
        handleChangeAnswer,
    };
};

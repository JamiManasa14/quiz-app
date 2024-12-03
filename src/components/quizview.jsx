import React from "react";
import "./quizview.css";

const QuizView = ({ questions, currentQuestion, handleAnswerClick }) => {
    const { question, answers } = questions[currentQuestion];

    return (
        <div className="quiz-view">
            <div className="question">
                <div className="question-number">
                    <span>
                        Question {currentQuestion + 1} / {questions.length}
                    </span>
                </div>
                <div className="question-text">
                    {question}
                </div>
            </div>

            <div className="answers">
                {answers.map(({ text, isCorrect }, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(isCorrect)}
                        className="answer-button"
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizView;

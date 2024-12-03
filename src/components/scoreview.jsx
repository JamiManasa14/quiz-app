import React from "react";
import "./scoreview.css";

const ScoreView = ({ playerName, score, category, avatar, handleResetClick }) => {
    // Dynamically calculate the maximum possible score based on the category
    const getMaxScore = () => {
        const categoryScores = {
            "General Knowledge": 2,
            "Geography": 2,
            "Nature": 1,
            "Computer Science Basics": 4,
            "Data Structures": 4,
            "Algorithms": 4,
            "Operating Systems": 4,
            "Networking": 4,
            "Databases": 4,
            "Software Engineering": 4
        };
        return categoryScores[category] || 0;
    };

    const maxScore = getMaxScore();

    return (
        <div className="score-view">
            <h2>Quiz Results</h2>
            <div className="score-box">
                <div className="player-info">
                    <span className="info-label">Player Name:</span> {playerName}
                </div>
                <div className="player-info">
                    <span className="info-label">Category:</span> {category}
                </div>
                <div className="player-info">
                    <span className="info-label">Score:</span> {score} / {maxScore}
                </div>
                <div className="player-info">
                    <span className="info-label">Avatar:</span>
                    <img src={avatar} alt="Selected Avatar" className="avatar-image" />
                </div>
            </div>
            <button onClick={handleResetClick} className="restart-button">
                Restart Quiz
            </button>
        </div>
    );
};

export default ScoreView;

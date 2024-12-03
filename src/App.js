import React, { useState } from "react";
import "./App.css";
import QuizView from "./components/quizview";
import ScoreView from "./components/scoreview";
import quiz_logo from "./assets/images/quiz_logo.jpeg";

import avatar1 from "./assets/images/girl.jpeg";
import avatar2 from "./assets/images/boy.jpeg";

function App() {
  const categories = [
    {
      name: "General Knowledge",
      questions: [
        {
          question: "Total number of oceans in the World is",
          answers: [
            { text: "7" },
            { text: "6" },
            { text: "5", isCorrect: true },
          ],
        },
        {
          question: "Who is CEO of Tesla?",
          answers: [
            { text: "Jeff Bezos" },
            { text: "Elon Musk", isCorrect: true },
            { text: "Bill Gates" },
            { text: "Tony Stark" },
          ],
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          answers: [
            { text: "China" },
            { text: "South Korea" },
            { text: "Japan", isCorrect: true },
            { text: "Thailand" },
          ],
        },
        {
          question: "Who wrote 'To Kill a Mockingbird'?",
          answers: [
            { text: "Harper Lee", isCorrect: true },
            { text: "Mark Twain" },
            { text: "Ernest Hemingway" },
            { text: "J.K. Rowling" },
          ],
        },
      ],
    },
    {
      name: "Geography",
      questions: [
        {
          question: "Where is Statue of Liberty located?",
          answers: [
            { text: "India" },
            { text: "Russia" },
            { text: "UK" },
            { text: "USA", isCorrect: true },
          ],
        },
        {
          question: "What is the capital of Germany?",
          answers: [
            { text: "Paris" },
            { text: "Berlin", isCorrect: true },
            { text: "London" },
            { text: "Dublin" },
          ],
        },
        {
          question: "Which is the largest desert in the world?",
          answers: [
            { text: "Sahara Desert", isCorrect: true },
            { text: "Gobi Desert" },
            { text: "Kalahari Desert" },
            { text: "Antarctic Desert" },
          ],
        },
        {
          question: "Which continent is the smallest by land area?",
          answers: [
            { text: "Asia" },
            { text: "Africa" },
            { text: "Europe", isCorrect: true },
            { text: "Australia" },
          ],
        },
      ],
    },
    {
      name: "Nature",
      questions: [
        {
          question: "Which one is the largest tropical rain forest in the world?",
          answers: [
            { text: "Amazon", isCorrect: true },
            { text: "Bosawas" },
            { text: "Southeast Asian Rain Forest" },
            { text: "Daintree Rain Forest" },
          ],
        },
        {
          question: "What is the tallest mountain in the world?",
          answers: [
            { text: "Mount Kilimanjaro" },
            { text: "Mount Everest", isCorrect: true },
            { text: "K2" },
            { text: "Denali" },
          ],
        },
        {
          question: "What is the primary source of energy for Earth's climate system?",
          answers: [
            { text: "Geothermal Energy" },
            { text: "Solar Energy", isCorrect: true },
            { text: "Wind Energy" },
            { text: "Nuclear Energy" },
          ],
        },
        {
          question: "Which animal is known as the 'King of the Jungle'?",
          answers: [
            { text: "Tiger" },
            { text: "Lion", isCorrect: true },
            { text: "Elephant" },
            { text: "Giraffe" },
          ],
        },
      ],
    },
    {
      name: "Computer Science Basics",
      questions: [
        {
          question: "What does CPU stand for?",
          answers: [
            { text: "Central Processing Unit", isCorrect: true },
            { text: "Central Programming Unit" },
            { text: "Computer Personal Unit" },
            { text: "Central Process Unit" },
          ],
        },
        {
          question: "Which language is known as the mother of all programming languages?",
          answers: [
            { text: "Java" },
            { text: "C", isCorrect: true },
            { text: "Python" },
            { text: "Assembly" },
          ],
        },
        {
          question: "What is the main function of RAM?",
          answers: [
            { text: "Permanent data storage" },
            { text: "Temporary data storage", isCorrect: true },
            { text: "Data backup" },
            { text: "Network management" },
          ],
        },
        {
          question: "What does HTTP stand for?",
          answers: [
            { text: "HyperText Transfer Protocol", isCorrect: true },
            { text: "HyperText Transfer Program" },
            { text: "HighText Transfer Protocol" },
            { text: "HyperText Test Protocol" },
          ],
        },
      ],
    },
    {
      name: "Data Structures",
      questions: [
        {
          question: "Which of the following is a linear data structure?",
          answers: [
            { text: "Tree" },
            { text: "Graph" },
            { text: "Array", isCorrect: true },
            { text: "Heap" },
          ],
        },
        {
          question: "What is the time complexity of accessing an element in an array?",
          answers: [
            { text: "O(1)", isCorrect: true },
            { text: "O(n)" },
            { text: "O(log n)" },
            { text: "O(n^2)" },
          ],
        },
        {
          question: "Which data structure uses LIFO order?",
          answers: [
            { text: "Queue" },
            { text: "Array" },
            { text: "Stack", isCorrect: true },
            { text: "Linked List" },
          ],
        },
        {
          question: "In which data structure are nodes connected through pointers?",
          answers: [
            { text: "Array" },
            { text: "Stack" },
            { text: "Linked List", isCorrect: true },
            { text: "Queue" },
          ],
        },
      ],
    },
    {
      name: "Algorithms",
      questions: [
        {
          question: "What is the time complexity of a binary search algorithm?",
          answers: [
            { text: "O(n)" },
            { text: "O(log n)", isCorrect: true },
            { text: "O(n^2)" },
            { text: "O(1)" },
          ],
        },
        {
          question: "Which algorithm is used for finding the shortest path in a graph?",
          answers: [
            { text: "Binary Search" },
            { text: "Merge Sort" },
            { text: "Dijkstra's Algorithm", isCorrect: true },
            { text: "Quick Sort" },
          ],
        },
        {
          question: "Which sorting algorithm has the best average-case time complexity?",
          answers: [
            { text: "Bubble Sort" },
            { text: "Merge Sort", isCorrect: true },
            { text: "Selection Sort" },
            { text: "Insertion Sort" },
          ],
        },
        {
          question: "What is the main idea behind the divide and conquer strategy?",
          answers: [
            { text: "Divide the problem into smaller parts, solve them independently, and combine the results.", isCorrect: true },
            { text: "Solve the problem by breaking it into the smallest possible parts." },
            { text: "Solve the problem by brute force." },
            { text: "Use the same approach for every problem." },
          ],
        },
      ],
    },
    {
      name: "Operating Systems",
      questions: [
        {
          question: "Which of the following is not an operating system?",
          answers: [
            { text: "Windows" },
            { text: "Linux" },
            { text: "Python", isCorrect: true },
            { text: "MacOS" },
          ],
        },
        {
          question: "What is the main function of an operating system?",
          answers: [
            { text: "Manage hardware resources", isCorrect: true },
            { text: "Compile code" },
            { text: "Design user interfaces" },
            { text: "Manage databases" },
          ],
        },
        {
          question: "Which operating system uses a kernel architecture?",
          answers: [
            { text: "Windows" },
            { text: "Linux", isCorrect: true },
            { text: "Android" },
            { text: "iOS" },
          ],
        },
        {
          question: "What does GUI stand for in operating systems?",
          answers: [
            { text: "Graphical User Interface", isCorrect: true },
            { text: "General User Interface" },
            { text: "Graphical Unified Interface" },
            { text: "Generalized User Interface" },
          ],
        },
      ],
    },
    {
      name: "Networking",
      questions: [
        {
          question: "What does IP stand for in networking?",
          answers: [
            { text: "Internet Protocol", isCorrect: true },
            { text: "Integrated Protocol" },
            { text: "Internal Protocol" },
            { text: "Interconnected Protocol" },
          ],
        },
        {
          question: "Which layer of the OSI model is responsible for routing?",
          answers: [
            { text: "Physical Layer" },
            { text: "Data Link Layer" },
            { text: "Network Layer", isCorrect: true },
            { text: "Transport Layer" },
          ],
        },
        {
          question: "What does DNS stand for?",
          answers: [
            { text: "Domain Name System", isCorrect: true },
            { text: "Dynamic Name Service" },
            { text: "Domain Name Service" },
            { text: "Dynamic Network System" },
          ],
        },
        {
          question: "Which protocol is used to send email?",
          answers: [
            { text: "HTTP" },
            { text: "FTP" },
            { text: "SMTP", isCorrect: true },
            { text: "POP3" },
          ],
        },
      ],
    },
    {
      name: "Databases",
      questions: [
        {
          question: "Which SQL command is used to retrieve data from a database?",
          answers: [
            { text: "INSERT" },
            { text: "UPDATE" },
            { text: "SELECT", isCorrect: true },
            { text: "DELETE" },
          ],
        },
        {
          question: "What does DBMS stand for?",
          answers: [
            { text: "Database Management System", isCorrect: true },
            { text: "Data Base Management System" },
            { text: "Database Mainframe System" },
            { text: "Data Base Mainframe System" },
          ],
        },
        {
          question: "Which of the following is a NoSQL database?",
          answers: [
            { text: "MySQL" },
            { text: "PostgreSQL" },
            { text: "MongoDB", isCorrect: true },
            { text: "Oracle" },
          ],
        },
        {
          question: "What is a foreign key in databases?",
          answers: [
            { text: "A key used to uniquely identify a record in a table" },
            { text: "A key used to establish a link between two tables", isCorrect: true },
            { text: "A key that cannot be duplicated" },
            { text: "A key that is used for encryption" },
          ],
        },
      ],
    },
    {
      name: "Software Engineering",
      questions: [
        {
          question: "What does SDLC stand for?",
          answers: [
            { text: "Software Development Life Cycle", isCorrect: true },
            { text: "Software Design Life Cycle" },
            { text: "System Development Life Cycle" },
            { text: "System Design Life Cycle" },
          ],
        },
        {
          question: "Which of the following is a phase in the Software Development Life Cycle?",
          answers: [
            { text: "Implementation", isCorrect: true },
            { text: "Execution" },
            { text: "Documentation" },
            { text: "Deployment" },
          ],
        },
        {
          question: "What is Agile methodology?",
          answers: [
            { text: "A software development methodology based on iterative development", isCorrect: true },
            { text: "A methodology for database management" },
            { text: "A method for network security" },
            { text: "A technique for hardware design" },
          ],
        },
        {
          question: "Which document is used to outline the requirements of a software project?",
          answers: [
            { text: "Design Document" },
            { text: "Project Plan" },
            { text: "Requirements Specification Document", isCorrect: true },
            { text: "Test Plan" },
          ],
        },
      ],
    },
  ];

  const avatars = [
    avatar1,
    avatar2
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleStartQuiz = () => {
    if (playerName.trim() !== "" && selectedCategory && selectedAvatar) {
      setQuizStarted(true);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < selectedCategory.questions.length) {
      setCurrentQuestion(next);
    } else {
      setIsQuizOver(true);
    }
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setQuizStarted(false);
    setPlayerName("");
    setSelectedCategory(null);
    setSelectedAvatar(null);
  };

  const handleNameInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const category = categories.find(cat => cat.name === categoryName);
    setSelectedCategory(category);
  };

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div className="App">
      <div className="app-header">
        <img src={quiz_logo} alt="Quiz Logo" className="quiz-logo" />
      </div>

      {!quizStarted ? (
        <div className="start-button-container">
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={handleNameInputChange}
            className="name-input"
          />
          <select
            className="category-select"
            onChange={handleCategoryChange}
            value={selectedCategory ? selectedCategory.name : ""}
          >
            <option value="" disabled>Select Category</option>
            {categories.map(category => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="avatar-selection">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className={`avatar ${selectedAvatar === avatar ? 'selected' : ''}`}
                onClick={() => handleAvatarChange(avatar)}
              />
            ))}
          </div>
          <button
            className="start-button"
            onClick={handleStartQuiz}
            disabled={playerName.trim() === "" || !selectedCategory || !selectedAvatar}
          >
            Start Quiz
          </button>
        </div>
      ) : isQuizOver ? (
        <ScoreView
          playerName={playerName}
          score={score}
          category={selectedCategory.name}
          avatar={selectedAvatar}
          handleResetClick={handleResetClick}
        />
      ) : (
        <QuizView
          questions={selectedCategory.questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;

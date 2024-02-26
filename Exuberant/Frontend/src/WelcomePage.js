// WelcomePage.js
import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Exuberant-Assignment(Shivansh Srivastava)</h1>
      <h2>Click the button below to start the survey!</h2>
      <Link to="/survey" className="start-button">
        Start Survey
      </Link>
      <Link to="/Question" className="start-button">
        Create Survey question
      </Link>
    </div>
  );
};

export default WelcomePage;

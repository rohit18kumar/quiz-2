import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="welcome-container">
      <h1>Congratulations! You have Submitted the Survey</h1>
      <Link to="/" className="start-button">
        Go to Home
      </Link>
    </div>
  );
};

export default Success;

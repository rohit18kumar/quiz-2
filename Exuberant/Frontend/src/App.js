// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import SurveyPage from "./SurveyPage";
import "./App.css";
import CreateQuestion from "./CreateQuestion";
import Success from "./Success";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Total 3 pages 1-Welcome, 2-Survey, 3-Create Question */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/Question" element={<CreateQuestion />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;

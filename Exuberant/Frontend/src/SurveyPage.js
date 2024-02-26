// SurveyPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const SurveyPage = () => {
  const [userName, setUserName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Fetch questions when the component mounts
    axios
      .get("http://localhost:5000/questions")
      .then((response) => setQuestions(response.data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = {
      questionIndex,
      answer: selectedOption,
    };
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    axios
      .post("http://localhost:5000/submit", { userName, answers })
      .then((response) => {
        console.log(response.data);
        // Display success message to the user
        setSubmitSuccess(true);

        // Redirect after successful submission
        setTimeout(() => {
          window.location.href = "/success";
        }, 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        alert("Please fill in all fields.");
        console.error("Error submitting answers:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="survey-container">
      <h1>Survey</h1>
      <label>
        User Name:
        <input
          type="text"
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          <ul>
            {q.options.map((option, i) => (
              <li key={i}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    required
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {submitSuccess && (
        <div style={{ marginTop: "10px", color: "green" }}>
          Form submitted successfully! Redirecting...
        </div>
      )}
    </div>
  );
};

export default SurveyPage;

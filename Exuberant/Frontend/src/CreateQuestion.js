import React, { useState } from "react";
import axios from "axios";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCreateQuestion = async () => {
    try {
      // Validate inputs
      if (!question || options.some((option) => !option.trim())) {
        alert("Please fill in all fields.");
        return;
      }

      // Send the new question to the server
      const newQuestion = {
        question,
        options,
      };

      await axios.post("http://localhost:5000/questions", newQuestion);
      alert("Question created successfully!");
      setTimeout(() => {
        window.location.href = "/"; // Replace '/success' with the desired route
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Failed to create question. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create a New Question</h2>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>

      <h3>Options:</h3>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            Option {index + 1}:
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}

      <button onClick={handleCreateQuestion}>Create Question</button>
    </div>
  );
};

export default CreateQuestion;

const Response = require("../models/Response");
const Question = require("../models/Question");

const SurveyController = {
  getQuestions: async (req, res) => {
    try {
      const questions = await Question.find();
      const questions2 = [
        {
          question: "What is your favorite Mobile Brand?",
          options: ["Xiaomi", "Apple", "Oppo", "Realme"],
        },

        {
          question: "What is your favorite Sports?",
          options: ["Cricket", "Hockey", "Football", "Volleyball"],
        },

        {
          question: "What is your favorite animal?",
          options: ["Dog", "Cat", "Elephant", "Lion"],
        },

        {
          question: "What is your favorite color?",
          options: ["Red", "Blue", "Green", "Yellow"],
        },
        // Add more questions as needed
      ];
      // res.json(questions);
      const ques = [...questions2, ...questions];
      res.json(ques);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  postQuestion: async (req, res) => {
    try {
      const { question, options } = req.body;

      // Validate the incoming data
      if (!question || !options) {
        return res.status(400).json({ error: "Incomplete data" });
      }

      // Create a new question and save it to the database
      const newQuestion = await Question.create({
        question,
        options,
      });

      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  submitSurvey: async (req, res) => {
    try {
      const { userName, answers } = req.body;
      await Response.create({ userName, answers });
      // Save user responses to the database

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = SurveyController;

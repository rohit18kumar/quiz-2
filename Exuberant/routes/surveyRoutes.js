const express = require("express");
const SurveyController = require("../controllers/SurveyController");

const router = express.Router();

router.get("/questions", SurveyController.getQuestions);
router.post("/submit", SurveyController.submitSurvey);
router.post("/questions", SurveyController.postQuestion);

module.exports = router;

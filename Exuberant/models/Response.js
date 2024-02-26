// models/Response.js
const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  answers: [
    {
      questionIndex: {
        type: Number,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;

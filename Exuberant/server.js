const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/db");
const surveyRoutes = require("./routes/surveyRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Include survey routes
app.use("/", surveyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.js

const express = require("express");
const logger = require("./logger"); // Import the global logger
const authorRouter = require("./authorRouter");

const app = express();
app.use(express.json());

// Global simple logger middleware
app.use(logger);

// Link Author router to the main app
app.use("/authors", authorRouter);

const PORT = 3000;
const HOSTNAME = "localhost";
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}`);
});

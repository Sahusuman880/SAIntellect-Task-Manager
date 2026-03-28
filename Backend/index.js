const express = require("express");
const cors = require("cors");
const app = express();
const taskRouter = require("./src/controller/task");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (token && token === "Bearer saintellect") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.use("/api/task", taskRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message || "Something went wrong!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

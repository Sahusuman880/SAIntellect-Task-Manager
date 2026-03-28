const express = require("express");
const CustomError = require("../Errors/customError");
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: "pending",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "completed",
  },
];
let nextId = 4;

router.get("/all", (req, res) => {
  res.status(200).json({ message: "Tasks fetched successfully", status: 200, data: tasks });
});

router.post("/add", (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      throw new CustomError("All fields are required", 400);
    }
    const newTask = { id: nextId++, title, description, status };
    tasks.push(newTask);
    res.status(201).json({ message: "Task added successfully", data: newTask, status: 201 });
  } catch (error) {
    next(error);
  }
});

router.put("/update/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      throw new CustomError("Task not found", 404);
    }
    const { title, description, status } = req.body;
    tasks[taskIndex] = { ...tasks[taskIndex], title, description, status };
    res.status(200).json({ message: "Task updated successfully", status: 200, data: tasks[taskIndex] });
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      throw new CustomError("Task not found", 404);
    }
    const deleted = tasks.splice(taskIndex, 1)[0];
    res.status(200).json({ message: "Task deleted successfully", status: 200, data: deleted });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

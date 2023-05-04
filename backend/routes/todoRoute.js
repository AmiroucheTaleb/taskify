import express from "express";
import {
  createToDo,
  fetchToDo,
  fetchSingleToDo,
  updateToDo,
  deleteToDo,
} from "../controller/TodoController.js";
// const { Todo } = require("../models/Todo");
const router = express.Router();

router.post("/todos", createToDo);
router.get("/todos", fetchToDo);
router.get("/todos/:id", fetchSingleToDo);
router.put("/todos/:id", updateToDo);
router.delete("/todos/:id", deleteToDo);

export default router;

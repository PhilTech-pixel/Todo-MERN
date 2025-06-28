import express from "express";
import {viewTodo, editTodo, deleteTodo, createTodo, viewTodoById} from "../controllers/todoController.js";

const router = express.Router()

//routes
//create
router.post("/", createTodo)

//view
router.get("/", viewTodo)
//view id
router.get("/:id", viewTodoById)
//edit
router.patch("/:id", editTodo)
//delete
router.delete("/:id", deleteTodo)

export default router
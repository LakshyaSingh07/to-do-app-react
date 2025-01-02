const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.route("/todos").get(protect, getTodos).post(protect, addTodo);
router
  .route("/todos/:id")
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;

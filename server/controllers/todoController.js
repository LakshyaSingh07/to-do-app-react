const Todo = require("../model/Todo");

// Get all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Add a new todo
const addTodo = async (req, res) => {
  const { text } = req.body;

  const todo = await Todo.create({ text });

  res.status(201).json(todo);
};

// Update a todo (complete/incomplete)
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  todo.text = text || todo.text;
  todo.completed = completed !== undefined ? completed : todo.completed;

  await todo.save();
  res.json(todo);
};

// Delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  await todo.remove();
  res.json({ message: "Todo removed" });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };

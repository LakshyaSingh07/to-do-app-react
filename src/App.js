import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend (we will implement the backend later)
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      const res = await axios.post("http://localhost:5000/api/todos", { text });
      setTodos([...todos, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todo = todos.find((todo) => todo._id === id);
      const updatedTodo = { ...todo, completed: !todo.completed };
      await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
